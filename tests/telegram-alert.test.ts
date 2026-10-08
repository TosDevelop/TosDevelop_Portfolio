import assert from 'node:assert/strict';
import test from 'node:test';
import {
  deliverTelegramAlert,
  handleTelegramAlert,
  parseAlert,
} from '../server/telegramAlert.ts';

const input = {
  recipientId: 'team',
  fullName: 'Visitor',
  email: 'visitor@example.com',
  subject: 'Project',
  message: '<b>Hello</b>',
};
const env = { TELEGRAM_BOT_TOKEN: 'test-token', TELEGRAM_CHAT_ID: '12345' };
const request = (data: unknown, origin = 'https://example.com') =>
  new Request('https://example.com/api/telegram-alert', {
    method: 'POST',
    headers: { origin, 'content-type': 'application/json' },
    body: JSON.stringify(data),
  });

test('sends bilingual formatted alerts to the configured group with escaped input', async () => {
  for (const override of [undefined, '99999']) {
    const response = await handleTelegramAlert(
      request({ ...input, chat_id: 'attacker' }),
      { ...env, TELEGRAM_CHAT_ID_REAKSMEY_SAN: override },
      async (url, options) => {
        assert.equal(url, 'https://api.telegram.org/bottest-token/sendMessage');
        const data = JSON.parse(options?.body as string);
        assert.equal(data.chat_id, '12345');
        assert.match(data.text, /សារថ្មី \/ New inquiry/);
        assert.match(data.text, /tosdevelop2026@gmail.com/);
        assert.match(data.text, /&lt;b&gt;Hello&lt;\/b&gt;/);
        assert.equal(data.parse_mode, 'HTML');
        assert.deepEqual(
          data.reply_markup.inline_keyboard[0].map(
            (button: { callback_data: string }) => button.callback_data,
          ),
          ['alert-language:km', 'alert-language:en'],
        );
        return Response.json({ ok: true });
      },
    );
    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { status: 'sent' });
  }
});

test('preserves Khmer and newlines while escaping sender-controlled formatting', async () => {
  await deliverTelegramAlert(
    {
      ...input,
      fullName: '<b>សុខ & ស្មី</b>',
      subject: 'គម្រោង <ថ្មី>',
      message: 'សួស្តី\nHello & welcome',
    },
    env,
    async (_url, options) => {
      const { text } = JSON.parse(options?.body as string);
      assert.ok(text.includes('&lt;b&gt;សុខ &amp; ស្មី&lt;/b&gt;'));
      assert.ok(text.includes('គម្រោង &lt;ថ្មី&gt;'));
      assert.ok(text.includes('សួស្តី\nHello &amp; welcome'));
      return Response.json({ ok: true });
    },
  );
});

test('missing credentials disable alerts without network traffic', async () => {
  assert.equal(
    await deliverTelegramAlert(input, {}, async () => {
      assert.fail('Must not send');
    }),
    'disabled',
  );
});

test('rejects invalid recipients, invalid payloads and cross-origin requests', async () => {
  const noSend: typeof fetch = async () => {
    assert.fail('Must not send');
  };
  assert.equal(parseAlert({ ...input, recipientId: '__proto__' }), null);
  assert.equal(parseAlert({ ...input, email: 'invalid' }), null);
  assert.equal(
    (await handleTelegramAlert(request({ ...input, message: '' }), env, noSend))
      .status,
    400,
  );
  assert.equal(
    (
      await handleTelegramAlert(
        request(input, 'https://other.example'),
        env,
        noSend,
      )
    ).status,
    403,
  );
  assert.equal(
    (
      await handleTelegramAlert(
        new Request('https://example.com/api/telegram-alert'),
        env,
        noSend,
      )
    ).status,
    405,
  );
});

test('keeps a long Unicode message within Telegram limits', async () => {
  await deliverTelegramAlert(
    { ...input, message: '😀'.repeat(5000) },
    env,
    async (_url, options) => {
      const data = JSON.parse(options?.body as string);
      assert.ok(data.text.length < 4096);
      assert.match(data.text, /Preview shortened/);
      return Response.json({ ok: true });
    },
  );
});

test('Telegram application errors reject delivery even on HTTP 200', async () => {
  await assert.rejects(
    deliverTelegramAlert(input, env, async () => Response.json({ ok: false })),
  );
});

test('reports safe rejection reasons without including provider text or secrets', async () => {
  const cases = [
    [
      400,
      "Bad Request: can't parse entities: <private message>",
      'invalid-formatting',
    ],
    [401, 'Unauthorized', 'invalid-bot-token'],
    [
      403,
      'Forbidden: bot was kicked from the group chat',
      'bot-permission-denied',
    ],
    [429, 'Too Many Requests: retry after 10', 'rate-limited'],
    [400, 'Bad Request: chat not found', 'chat-not-found'],
  ] as const;
  for (const [status, description, reason] of cases) {
    await assert.rejects(
      deliverTelegramAlert(input, env, async () =>
        Response.json({ ok: false, description }, { status }),
      ),
      (error: Error) => {
        assert.equal(error.message, `Telegram delivery failed: ${reason}`);
        assert.ok(!error.message.includes(env.TELEGRAM_BOT_TOKEN));
        assert.ok(!error.message.includes('<private message>'));
        return true;
      },
    );
  }
});

test('distinguishes a timeout from a network failure and does not retry', async () => {
  for (const [error, reason] of [
    [new DOMException('Timeout', 'TimeoutError'), 'request-timed-out'],
    [new TypeError('fetch failed'), 'network-error'],
  ] as const) {
    let calls = 0;
    await assert.rejects(
      deliverTelegramAlert(input, env, async () => {
        calls++;
        throw error;
      }),
      new RegExp(reason),
    );
    assert.equal(calls, 1);
  }
});
