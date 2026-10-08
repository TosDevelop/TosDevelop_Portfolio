import assert from 'node:assert/strict';
import test from 'node:test';
import {
  isEmailConfigured,
  sendContactEmail,
} from '../src/services/contactEmail.ts';

const config = {
  serviceId: 'service_test',
  publicKey: 'public_test',
  templateId: 'template_test',
};
const message = {
  to_email: 'member@example.com',
  to_name: 'Team Member',
  full_name: 'Visitor',
  email: 'visitor@example.com',
  subject: 'Project inquiry',
  message: 'Hello\nLet’s discuss a project.',
};

test('sends the six template variables and selected recipient through EmailJS', async () => {
  let calls = 0;
  const request: typeof fetch = async (url, options) => {
    calls++;
    assert.equal(url, 'https://api.emailjs.com/api/v1.0/email/send');
    assert.equal(options?.method, 'POST');
    assert.deepEqual(JSON.parse(options?.body as string), {
      service_id: config.serviceId,
      template_id: config.templateId,
      user_id: config.publicKey,
      template_params: message,
    });
    assert.ok(options?.signal);
    return new Response('OK', { status: 200 });
  };
  await sendContactEmail(config, message, request);
  assert.equal(calls, 1);
});

test('rejects provider errors and network failures instead of reporting success', async () => {
  for (const status of [400, 403, 429, 500]) {
    await assert.rejects(
      sendContactEmail(
        config,
        message,
        async () => new Response('Failed', { status }),
      ),
    );
  }
  await assert.rejects(
    sendContactEmail(config, message, async () => {
      throw new TypeError('Network unavailable');
    }),
  );
});

test('missing configuration prevents a request', async () => {
  for (const publicKey of ['', '   ', 'YOUR_PUBLIC_KEY']) {
    const missing = { ...config, publicKey };
    assert.equal(isEmailConfigured(missing), false);
    await assert.rejects(
      sendContactEmail(missing, message, async () => {
        assert.fail('Must not send');
      }),
    );
  }
});
