import { handleTelegramAlert } from '../server/telegramAlert.ts';

export default {
  fetch(request: Request) {
    return handleTelegramAlert(request, process.env);
  },
};
