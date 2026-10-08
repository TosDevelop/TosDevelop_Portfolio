import assert from 'node:assert/strict';
import test from 'node:test';
import {
  handleTelegramWebhook,
  languageButtons,
  processLanguageUpdate,
  translateAlert,
} from '../server/telegramLanguage.ts';

const env = {
  TELEGRAM_BOT_TOKEN: '123:test-token',
  TELEGRAM_CHAT_ID: '-456',
  TELEGRAM_WEBHOOK_SECRET: 'test-secret',
};
const heading = 'TosDevelop · សារថ្មី / New inquiry';
const senderLabel = 'អ្នកផ្ញើ / Sender';
const visitor = 'អ្នកផ្ញើ / Sender <b>ឈ្មោះ</b> & Name';
const body = 'Message <script>\nសួស្តី & hello';
const text = `📩 ${heading}\n👤 ${senderLabel}\n${visitor}\n${body}`;
const entities = [
  { type: 'bold', offset: text.indexOf(heading), length: heading.length },
  {
    type: 'bold',
    offset: text.indexOf(senderLabel),
    length: senderLabel.length,
  },
  { type: 'blockquote', offset: text.indexOf(body), length: body.length },
];
const update = {
  callback_query: {
    id: 'query-test',
    data: 'alert-language:km',
    message: {
      message_id: 7,
      chat: { id: -456 },
      from: { id: 123, is_bot: true },
      text,
      entities,
    },
  },
};

test('translates only labels and preserves escaped visitor text and Unicode offsets', () => {
  const km = translateAlert(text, entities, 'km');
  const en = translateAlert(text, entities, 'en');
  assert.ok(km.includes('<b>TosDevelop · សារថ្មី</b>'));
  assert.ok(en.includes('<b>TosDevelop · New inquiry</b>'));
  assert.ok(km.includes('<b>អ្នកផ្ញើ</b>'));
  assert.ok(en.includes('<b>Sender</b>'));
  for (const html of [km, en]) {
    assert.ok(
      html.includes('អ្នកផ្ញើ / Sender &lt;b&gt;ឈ្មោះ&lt;/b&gt; &amp; Name'),
    );
    assert.ok(
      html.includes(
        '<blockquote>Message &lt;script&gt;\nសួស្តី &amp; hello</blockquote>',
      ),
    );
  }
  const english = '📩 TosDevelop · New inquiry\nSender';
  assert.ok(
    translateAlert(
      english,
      [
        { type: 'bold', offset: 3, length: 'TosDevelop · New inquiry'.length },
        { type: 'bold', offset: english.indexOf('Sender'), length: 6 },
      ],
      'km',
    ).includes('<b>អ្នកផ្ញើ</b>'),
  );
});

test('acknowledges group button clicks and edits the existing alert', async () => {
  const methods: string[] = [];
  await processLanguageUpdate(update, env, async (url, options) => {
    const method = String(url).split('/').at(-1)!;
    methods.push(method);
    const data = JSON.parse(options?.body as string);
    if (method === 'editMessageText') {
      assert.equal(data.chat_id, '-456');
      assert.equal(data.message_id, 7);
      assert.ok(data.text.includes('<b>អ្នកផ្ញើ</b>'));
      assert.deepEqual(data.reply_markup, languageButtons('km'));
    }
    return Response.json({ ok: true });
  });
  assert.deepEqual(methods, ['answerCallbackQuery', 'editMessageText']);
});

test('ignores other groups and messages not created by this bot', async () => {
  const noSend: typeof fetch = async () => {
    assert.fail('Must not edit');
  };
  await processLanguageUpdate(
    update,
    { ...env, TELEGRAM_CHAT_ID: '-999' },
    noSend,
  );
  await processLanguageUpdate(
    update,
    { ...env, TELEGRAM_BOT_TOKEN: '999:another-token' },
    noSend,
  );
});

test('webhook requires a matching secret before handling callbacks', async () => {
  const noSend: typeof fetch = async () => {
    assert.fail('Unauthorized');
  };
  for (const secret of ['', 'incorrect']) {
    const response = await handleTelegramWebhook(
      new Request('https://example.com/api/telegram-webhook', {
        method: 'POST',
        headers: { 'x-telegram-bot-api-secret-token': secret },
        body: JSON.stringify(update),
      }),
      env,
      noSend,
    );
    assert.equal(response.status, 403);
  }
  const response = await handleTelegramWebhook(
    new Request('https://example.com/api/telegram-webhook', {
      method: 'POST',
      headers: {
        'x-telegram-bot-api-secret-token': env.TELEGRAM_WEBHOOK_SECRET,
      },
      body: JSON.stringify(update),
    }),
    env,
    async () => Response.json({ ok: true }),
  );
  assert.equal(response.status, 200);
});

test('repeated clicks are harmless when Telegram says the message is unchanged', async () => {
  await processLanguageUpdate(update, env, async (url) =>
    String(url).endsWith('/editMessageText')
      ? Response.json(
          { ok: false, description: 'Bad Request: message is not modified' },
          { status: 400 },
        )
      : Response.json({ ok: true }),
  );
});
