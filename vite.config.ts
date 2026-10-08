import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import { seoPlugin } from './scripts/seoPlugin.ts';
import { telegramDevPlugin } from './scripts/telegramDevPlugin.ts';

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      seoPlugin(),
      telegramDevPlugin({
        ...loadEnv(mode, process.cwd(), ''),
        ...process.env,
      }),
    ],
    resolve: {
      alias: {
        '@': `${import.meta.dirname}/src`,
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
