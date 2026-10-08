import assert from 'node:assert/strict';
import test from 'node:test';
import { notifyTelegram } from '../src/services/contactTelegram.ts';
import { handleTelegramAlert } from '../server/telegramAlert.ts';

const message = {
  fullName: 'Visitor',
  email: 'visitor@example.com',
  subject: 'Inquiry',
  message: 'Hello',
};

test('all individual member messages skip Telegram entirely', async () => {
  for (const recipientId of [
    'ya-phorn',
    'vichet-sat',
    'serey-phem',
    'reaksmey-san',
    'sokha-rathana',
  ]) {
    await notifyTelegram({ ...message, recipientId }, async () => {
      assert.fail('Private inquiry must not reach Telegram');
    });
    const request = new Request('https://example.com/api/telegram-alert', {
      method: 'POST',
      headers: {
        origin: 'https://example.com',
        'content-type': 'application/json',
      },
      body: JSON.stringify({ ...message, recipientId }),
    });
    const result = await handleTelegramAlert(request, {}, async () => {
      assert.fail('Server must reject private inquiry');
    });
    assert.equal(result.status, 400);
  }
});

test('team inbox messages request one group alert', async () => {
  let calls = 0;
  await notifyTelegram(
    { ...message, recipientId: 'team' },
    async (url, options) => {
      calls++;
      assert.equal(url, '/api/telegram-alert');
      assert.equal(JSON.parse(options?.body as string).recipientId, 'team');
      return Response.json({ status: 'sent' });
    },
  );
  assert.equal(calls, 1);
});
