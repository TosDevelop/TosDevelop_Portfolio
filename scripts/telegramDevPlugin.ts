import type { Plugin } from 'vite';
import { handleTelegramAlert } from '../server/telegramAlert.ts';

// Run the same handler locally as the Vercel Function. Credentials stay in Node.
export function telegramDevPlugin(
  env: Record<string, string | undefined>,
): Plugin {
  return {
    name: 'telegram-alert-dev-api',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url?.split('?')[0].replace(/\/$/, '') !== '/api/telegram-alert')
          return next();
        try {
          const chunks: Buffer[] = [];
          let size = 0;
          for await (const chunk of req) {
            const bytes = Buffer.from(chunk);
            size += bytes.length;
            if (size > 96000) {
              res.statusCode = 413;
              res.end('Request too large');
              return;
            }
            chunks.push(bytes);
          }
          const headers = new Headers();
          for (const [name, value] of Object.entries(req.headers)) {
            if (value)
              headers.set(
                name,
                Array.isArray(value) ? value.join(', ') : value,
              );
          }
          const protocol = server.config.server.https ? 'https' : 'http';
          const request = new Request(
            `${protocol}://${req.headers.host}${req.url}`,
            {
              method: req.method,
              headers,
              ...(req.method !== 'GET' && req.method !== 'HEAD'
                ? { body: Buffer.concat(chunks).toString('utf8') }
                : {}),
            },
          );
          const response = await handleTelegramAlert(request, env);
          res.statusCode = response.status;
          response.headers.forEach((value, key) => res.setHeader(key, value));
          res.end(Buffer.from(await response.arrayBuffer()));
        } catch {
          res.statusCode = 500;
          res.end('Telegram alert unavailable');
        }
      });
    },
  };
}
