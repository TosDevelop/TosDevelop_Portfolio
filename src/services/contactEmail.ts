export interface EmailConfig {
  serviceId: string;
  publicKey: string;
  templateId: string;
}

export interface ContactMessage {
  to_email: string;
  to_name: string;
  full_name: string;
  email: string;
  subject: string;
  message: string;
}

export function isEmailConfigured(config: EmailConfig) {
  return Object.values(config).every(
    (value) => value.trim() && !value.startsWith('YOUR_'),
  );
}

export async function sendContactEmail(
  config: EmailConfig,
  message: ContactMessage,
  request: typeof fetch = fetch,
) {
  if (!isEmailConfigured(config)) throw new Error('EmailJS is not configured');
  const response = await request(
    'https://api.emailjs.com/api/v1.0/email/send',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: config.serviceId,
        template_id: config.templateId,
        user_id: config.publicKey,
        template_params: message,
      }),
      signal: AbortSignal.timeout(20000),
    },
  );
  if (!response.ok)
    throw new Error(`EmailJS request failed (${response.status})`);
}
