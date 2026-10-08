import { languageButtons } from './telegramLanguage.ts';

const recipients: Record<string, string> = {
  team: 'TosDevelop',
};

export interface AlertInput {
  recipientId: string;
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

class TelegramDeliveryError extends Error {
  constructor(
    public readonly reason: string,
    public readonly status?: number,
  ) {
    super(`Telegram delivery failed: ${reason}`);
  }
}

function rejectionReason(description: unknown) {
  const text = typeof description === 'string' ? description.toLowerCase() : '';
  if (text.includes('parse entities') || text.includes('unsupported start tag'))
    return 'invalid-formatting';
  if (text.includes('too long')) return 'message-too-long';
  if (text.includes('chat not found')) return 'chat-not-found';
  if (
    text.includes('not enough rights') ||
    text.includes('forbidden') ||
    text.includes('kicked')
  )
    return 'bot-permission-denied';
  if (text.includes('unauthorized')) return 'invalid-bot-token';
  if (text.includes('too many requests')) return 'rate-limited';
  if (text.includes('upgraded') || text.includes('migrat'))
    return 'group-migrated';
  return 'telegram-rejected-request';
}

export function parseAlert(value: unknown): AlertInput | null {
  if (!value || typeof value !== 'object') return null;
  const data = value as Record<string, unknown>;
  const limits = {
    recipientId: 50,
    fullName: 120,
    email: 254,
    subject: 200,
    message: 10000,
  };
  for (const [key, limit] of Object.entries(limits)) {
    if (
      typeof data[key] !== 'string' ||
      !data[key].trim() ||
      data[key].length > limit
    )
      return null;
  }
  if (!Object.hasOwn(recipients, data.recipientId as string)) return null;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email as string)) return null;
  return Object.fromEntries(
    Object.keys(limits).map((key) => [key, (data[key] as string).trim()]),
  ) as unknown as AlertInput;
}

export async function deliverTelegramAlert(
  input: AlertInput,
  env: Record<string, string | undefined>,
  request: typeof fetch = fetch,
) {
  const token = env.TELEGRAM_BOT_TOKEN?.trim();
  const chatId = env.TELEGRAM_CHAT_ID?.trim();
  if (
    !token ||
    token.startsWith('YOUR_') ||
    !chatId ||
    chatId.startsWith('YOUR_')
  )
    return 'disabled';
  const messagePreview = input.message
    .slice(0, 2400)
    .replace(/[\uD800-\uDBFF]$/, '');
  const text = [
    '📩 <b>TosDevelop · សារថ្មី / New inquiry</b>',
    '<i>ពីទម្រង់ទំនាក់ទំនងគេហទំព័រ / Website contact form</i>',
    '',
    '📥 <b>ទៅកាន់ / To</b>',
    'tosdevelop2026@gmail.com',
    '',
    `👤 <b>អ្នកផ្ញើ / Sender</b>\n${escapeHtml(input.fullName)}`,
    `✉️ <b>អ៊ីមែល / Email</b>\n${escapeHtml(input.email)}`,
    '',
    `📝 <b>ប្រធានបទ / Subject</b>\n${escapeHtml(input.subject)}`,
    '',
    '💬 <b>សារ / Message</b>',
    `<blockquote>${escapeHtml(messagePreview)}</blockquote>`,
    ...(messagePreview.length < input.message.length
      ? [
          '<i>សារសង្ខេប — មើលសារពេញក្នុងអ៊ីមែល។\nPreview shortened — see the email for the full message.</i>',
        ]
      : []),
    '',
    '<i>ឆ្លើយតបតាមអ៊ីមែលរបស់អ្នកផ្ញើ។\nReply to the sender by email.</i>',
  ].join('\n');
  let response: Response;
  try {
    response = await request(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: 'HTML',
          reply_markup: languageButtons(),
          link_preview_options: { is_disabled: true },
        }),
        signal: AbortSignal.timeout(15000),
      },
    );
  } catch (error) {
    const name = error instanceof Error ? error.name : '';
    throw new TelegramDeliveryError(
      name === 'TimeoutError' || name === 'AbortError'
        ? 'request-timed-out'
        : 'network-error',
    );
  }
  let result: {
    ok?: boolean;
    description?: string;
    parameters?: { migrate_to_chat_id?: number };
  };
  try {
    result = await response.json();
  } catch {
    throw new TelegramDeliveryError('invalid-api-response', response.status);
  }
  if (!response.ok || !result.ok)
    throw new TelegramDeliveryError(
      result.parameters?.migrate_to_chat_id
        ? 'group-migrated'
        : rejectionReason(result.description),
      response.status,
    );
  return 'sent';
}

export async function handleTelegramAlert(
  request: Request,
  env: Record<string, string | undefined>,
  send: typeof fetch = fetch,
) {
  const json = (data: unknown, status = 200) =>
    Response.json(data, { status, headers: { 'Cache-Control': 'no-store' } });
  if (request.method !== 'POST')
    return new Response(null, { status: 405, headers: { Allow: 'POST' } });
  // This rejects cross-origin browser submissions, but is not authentication.
  if (request.headers.get('origin') !== new URL(request.url).origin)
    return json({ error: 'Origin not allowed' }, 403);
  if (!request.headers.get('content-type')?.includes('application/json'))
    return json({ error: 'JSON required' }, 415);
  let data: unknown;
  try {
    const body = await request.text();
    if (body.length > 24000) return json({ error: 'Request too large' }, 413);
    data = JSON.parse(body);
  } catch {
    return json({ error: 'Invalid JSON' }, 400);
  }
  const input = parseAlert(data);
  if (!input) return json({ error: 'Invalid contact details' }, 400);
  try {
    const status = await deliverTelegramAlert(input, env, send);
    return json({ status });
  } catch (error) {
    // Do not log the token-bearing Telegram URL or visitors' message content.
    console.error(
      'Telegram contact alert failed',
      error instanceof TelegramDeliveryError
        ? { reason: error.reason, status: error.status }
        : { reason: 'unexpected-error' },
    );
    return json({ error: 'Alert unavailable' }, 502);
  }
}
