import { handleTelegramWebhook } from '../server/telegramLanguage.ts';

export default {
  fetch(request: Request) {
    return handleTelegramWebhook(request, process.env);
  },
};
