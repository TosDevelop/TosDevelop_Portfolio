import { config } from 'dotenv';
import { processLanguageUpdate } from '../server/telegramLanguage.ts';

config({ quiet: true });
const token = process.env.TELEGRAM_BOT_TOKEN?.trim();
if (!token || token.startsWith('YOUR_'))
  throw new Error('Set TELEGRAM_BOT_TOKEN in .env first.');

async function call(method: string, payload: unknown) {
  try {
    const response = await fetch(
      `https://api.telegram.org/bot${token}/${method}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(35000),
      },
    );
    const data = await response.json();
    if (!response.ok || !data.ok) throw new Error();
    return data.result;
  } catch {
    throw new Error(
      `Telegram ${method} failed. Check configuration and connectivity.`,
    );
  }
}

const mode = process.argv[2] || 'poll';
if (mode === 'webhook') {
  const url = new URL(process.argv[3]);
  if (url.protocol !== 'https:') throw new Error('Webhook URL must use HTTPS.');
  const secret = process.env.TELEGRAM_WEBHOOK_SECRET?.trim();
  if (
    !secret ||
    secret.startsWith('YOUR_') ||
    !/^[A-Za-z0-9_-]{1,256}$/.test(secret)
  )
    throw new Error('Set TELEGRAM_WEBHOOK_SECRET in .env and Vercel first.');
  await call('setWebhook', {
    url: url.href,
    secret_token: secret,
    allowed_updates: ['callback_query'],
  });
  console.log('Telegram language-button webhook registered.');
} else if (mode === 'poll') {
  const webhook = await call('getWebhookInfo', {});
  if (webhook.url)
    throw new Error(
      'A webhook is already active. Use the deployed webhook; polling was not started.',
    );
  console.log(
    'Listening for group language-button clicks. Press Ctrl+C to stop.',
  );
  let offset = 0;
  while (true) {
    const updates = await call('getUpdates', {
      offset,
      timeout: 25,
      allowed_updates: ['callback_query'],
    });
    for (const update of updates) {
      try {
        await processLanguageUpdate(update, process.env);
      } catch {
        console.error(
          'Telegram language update failed. Tap the button again to retry.',
        );
      }
      offset = update.update_id + 1;
    }
  }
} else {
  throw new Error('Use poll or webhook mode.');
}
