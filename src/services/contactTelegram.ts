export async function notifyTelegram(
  input: {
    recipientId: string;
    fullName: string;
    email: string;
    subject: string;
    message: string;
  },
  request: typeof fetch = fetch,
) {
  // Individual member inquiries must never be shared with the team group.
  if (input.recipientId !== 'team') return;
  // Email success is independent of this optional notification.
  try {
    const response = await request('/api/telegram-alert', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
      signal: AbortSignal.timeout(20000),
    });
    if (!response.ok)
      console.warn('Telegram alert unavailable; email was sent.');
  } catch {
    console.warn('Telegram alert unavailable; email was sent.');
  }
}
