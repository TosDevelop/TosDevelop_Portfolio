import { timingSafeEqual } from 'node:crypto';

type Language = 'km' | 'en';
const labels = [
  [
    'TosDevelop · សារថ្មី / New inquiry',
    'TosDevelop · សារថ្មី',
    'TosDevelop · New inquiry',
  ],
  [
    'ពីទម្រង់ទំនាក់ទំនងគេហទំព័រ / Website contact form',
    'ពីទម្រង់ទំនាក់ទំនងគេហទំព័រ',
    'Website contact form',
  ],
  ['ទៅកាន់ / To', 'ទៅកាន់', 'To'],
  ['អ្នកផ្ញើ / Sender', 'អ្នកផ្ញើ', 'Sender'],
  ['អ៊ីមែល / Email', 'អ៊ីមែល', 'Email'],
  ['ប្រធានបទ / Subject', 'ប្រធានបទ', 'Subject'],
  ['សារ / Message', 'សារ', 'Message'],
  [
    'សារសង្ខេប — មើលសារពេញក្នុងអ៊ីមែល។\nPreview shortened — see the email for the full message.',
    'សារសង្ខេប — មើលសារពេញក្នុងអ៊ីមែល។',
    'Preview shortened — see the email for the full message.',
  ],
  [
    'ឆ្លើយតបតាមអ៊ីមែលរបស់អ្នកផ្ញើ។\nReply to the sender by email.',
    'ឆ្លើយតបតាមអ៊ីមែលរបស់អ្នកផ្ញើ។',
    'Reply to the sender by email.',
  ],
];

export function languageButtons(language?: Language) {
  return {
    inline_keyboard: [
      [
        {
          text: `${language === 'km' ? '✓ ' : ''}🇰🇭 ភាសាខ្មែរ`,
          callback_data: 'alert-language:km',
        },
        {
          text: `${language === 'en' ? '✓ ' : ''}🇬🇧 English`,
          callback_data: 'alert-language:en',
        },
      ],
    ],
  };
}

const escape = (text: string) =>
  text.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
interface Entity {
  type: string;
  offset: number;
  length: number;
}

// Telegram supplies UTF-16 entity offsets. Translate only our formatted labels,
// never visitor text, even when it happens to contain one of those same labels.
export function translateAlert(
  text: string,
  entities: Entity[],
  language: Language,
) {
  const tags: Record<string, string> = {
    bold: 'b',
    italic: 'i',
    blockquote: 'blockquote',
  };
  const formatted = entities
    .filter((entity) => Object.hasOwn(tags, entity.type))
    .sort((a, b) => a.offset - b.offset);
  let cursor = 0;
  let html = '';
  for (const entity of formatted) {
    const end = entity.offset + entity.length;
    if (
      !Number.isInteger(entity.offset) ||
      !Number.isInteger(entity.length) ||
      entity.offset < cursor ||
      entity.length < 1 ||
      end > text.length
    )
      throw new Error('Invalid message formatting');
    html += escape(text.slice(cursor, entity.offset));
    const original = text.slice(entity.offset, end);
    const translation =
      entity.type === 'blockquote'
        ? undefined
        : labels.find((row) => row.includes(original));
    html += `<${tags[entity.type]}>${escape(translation ? translation[language === 'km' ? 1 : 2] : original)}</${tags[entity.type]}>`;
    cursor = end;
  }
  return html + escape(text.slice(cursor));
}

export async function processLanguageUpdate(
  update: any,
  env: Record<string, string | undefined>,
  request: typeof fetch = fetch,
) {
  const query = update?.callback_query;
  const message = query?.message;
  const token = env.TELEGRAM_BOT_TOKEN?.trim();
  if (
    !token ||
    !query ||
    typeof query.id !== 'string' ||
    !['alert-language:km', 'alert-language:en'].includes(query.data)
  )
    return;
  if (
    String(message?.chat?.id) !== env.TELEGRAM_CHAT_ID?.trim() ||
    !message?.from?.is_bot ||
    String(message.from.id) !== token.split(':')[0]
  )
    return;
  if (
    !Number.isInteger(message.message_id) ||
    typeof message.text !== 'string' ||
    !message.text.startsWith('📩 TosDevelop · ') ||
    !Array.isArray(message.entities)
  )
    return;
  const language: Language = query.data.endsWith(':km') ? 'km' : 'en';
  const text = translateAlert(message.text, message.entities, language);
  const call = async (method: string, body: unknown) => {
    const response = await request(
      `https://api.telegram.org/bot${token}/${method}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
        signal: AbortSignal.timeout(10000),
      },
    );
    const data = await response.json();
    if (
      (!response.ok || !data.ok) &&
      !(
        method === 'editMessageText' &&
        data.description?.includes('message is not modified')
      )
    )
      throw new Error('Telegram language update failed');
  };
  await call('answerCallbackQuery', { callback_query_id: query.id });
  await call('editMessageText', {
    chat_id: env.TELEGRAM_CHAT_ID?.trim(),
    message_id: message.message_id,
    text,
    parse_mode: 'HTML',
    reply_markup: languageButtons(language),
    link_preview_options: { is_disabled: true },
  });
}

export async function handleTelegramWebhook(
  request: Request,
  env: Record<string, string | undefined>,
  send: typeof fetch = fetch,
) {
  if (request.method !== 'POST') return new Response(null, { status: 405 });
  const expected = env.TELEGRAM_WEBHOOK_SECRET?.trim();
  const supplied = request.headers.get('x-telegram-bot-api-secret-token') || '';
  if (!expected || expected.startsWith('YOUR_'))
    return new Response(null, { status: 503 });
  if (
    Buffer.byteLength(supplied) !== Buffer.byteLength(expected) ||
    !timingSafeEqual(Buffer.from(supplied), Buffer.from(expected))
  )
    return new Response(null, { status: 403 });
  let update: unknown;
  try {
    const body = await request.text();
    if (body.length > 96000) return new Response(null, { status: 413 });
    update = JSON.parse(body);
  } catch {
    return new Response(null, { status: 400 });
  }
  try {
    await processLanguageUpdate(update, env, send);
  } catch {
    console.error('Telegram language update failed');
    return new Response(null, { status: 502 });
  }
  return Response.json({ ok: true });
}
