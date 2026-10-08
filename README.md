# TosDevelop — PNC Student Team Portfolio

A React + TypeScript portfolio for the TosDevelop team at Passerelles Numériques Cambodia, with English/Khmer content and light/dark themes. Built with Vite, Tailwind CSS, and Lucide icons.

## Getting started

Use Node.js 22.12+ (or Node.js 20.19+ within the 20.x release line) and npm.

```bash
npm ci
npm run dev
```

The development server runs at http://localhost:3000. Copy `.env.example` to `.env` and fill in the EmailJS public configuration to enable contact email sending. Restart the development server after changing these values.

### Telegram contact alerts

Visitors can email the team inbox (`tosdevelop2026@gmail.com`) or any individual member using the recipient selector. Set the EmailJS template's **To Email** field to `{{to_email}}` and **Reply-To** to `{{email}}`. Only team-inbox submissions trigger a Telegram group notification through `/api/telegram-alert`, after EmailJS accepts the email. Individual member messages are not forwarded to Telegram. Alerts include the sender name and email, subject, and a message preview. Telegram failures do not change email success or cause automatic email retries.

1. Create a bot with [BotFather](https://t.me/BotFather) using `/newbot`.
2. Add the bot to your team group and send a command addressed to it, or open the bot privately and press Start.
3. Obtain that chat's ID from the Telegram Bot API `getUpdates` result (`message.chat.id`). Do not share the bot token or commit it.
4. Fill in `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` in `.env`. Add the same server-only variables to the Vercel project and redeploy. Never use a `VITE_` prefix for these settings.
5. Invite all team members to the Telegram group. All alerts use the one `TELEGRAM_CHAT_ID`; no per-member bots or chat IDs are needed. The bot needs permission to send messages in that group.

`npm run dev` serves the Telegram endpoint through a development middleware using the same handler as Vercel. Keep the server-only Telegram settings in `.env` and restart the dev server after changes. On Vercel, configure the variables in the project settings and deploy the `api/` and `server/` files. Missing Telegram configuration disables alerts without disabling email.

This is a public contact-notification endpoint. It validates fields and rejects cross-origin browser requests; an Origin header is not authentication, and the endpoint cannot independently verify EmailJS delivery. Enable a Vercel Firewall rate-limit rule for `/api/telegram-alert` before exposing alerts publicly. Automated tests mock Telegram and do not send messages.

References: [Telegram Bot API](https://core.telegram.org/bots/api#sendmessage), [Vercel Node.js Functions](https://vercel.com/docs/functions/runtimes/node-js).

### Choose an alert's language in the group

New alerts include **🇰🇭 ភាសាខ្មែរ** and **🇬🇧 English** buttons. Any group member can switch that alert's labels for everyone. Sender names, subjects and message text stay in their original language. This does not set a default for future alerts. Old alerts without buttons are unchanged.

For local development, leave `npm run dev` running and open a second terminal:

```bash
npm run telegram:poll
```

Keep that terminal running to handle button clicks. Run only one poller for the bot. It refuses to start if a deployed webhook is already active and never removes an existing webhook automatically.

For Vercel, set `TELEGRAM_WEBHOOK_SECRET` to a random secret in both `.env` and Vercel (alongside the bot token and group ID), deploy the updated code, stop any local poller, then run:

```bash
npm run telegram:webhook -- https://tos-develop-portfolio.vercel.app/api/telegram-webhook
```

This registers the deployed endpoint with Telegram. The server authenticates Telegram callbacks using the secret header and only edits alerts from this bot in the configured group. No database is needed: Telegram includes the existing message in each button callback. See [Telegram webhooks](https://core.telegram.org/bots/api#setwebhook).

## Structure

```text
src/
├── App.tsx                 # Application composition and page rendering
├── components/
│   ├── layout/             # AppLayout, Navbar, Footer
│   ├── sections/           # Sections reused across pages
│   └── ui/                 # Avatar, BrandLogo, TechIcon, CategoryFilter
├── config/                 # Site branding and shared navigation definitions
├── data/                   # Team, projects, expertise, translations
├── hooks/                  # Reusable hooks, including navigation state
├── pages/
│   ├── about/
│   ├── contact/
│   ├── expertise/
│   ├── home/
│   ├── projects/
│   └── team/
├── providers/              # Provider composition and language/theme contexts
├── styles/                 # Global styles
├── types/                  # Shared content models
└── main.tsx                # React entry point
```

## Where to make changes

- Set the brand and public URL in `config/site.ts`. Edit page titles and descriptions in `config/seo.ts`; the build generates HTML metadata from this configuration.
- Keep page-specific components alongside their page in `pages/<page>/`.
- Put reusable UI in `components/ui/`, shared page sections in `components/sections/`, and the site shell in `components/layout/`.
- Edit portfolio content and translations in `data/`; content contracts live in `types/`.
- Team profiles live in `data/team/<member-name>/` (for example, `data/team/reaksmey-san/`). Edit `en.ts` for English profile text, `km.ts` for Khmer text, and `shared.ts` for photos, contact details, and technical skills. Each member's `index.ts` combines these files. Add or reorder members in `data/team/index.ts`; keep existing IDs stable so profile links continue to work.
- Each member's projects live in `data/team/<member-name>/projects/en.ts` and `projects/km.ts`. Edit project descriptions, technologies, repository URLs, and live demo URLs there; keep the same project order in both languages.
- Website case studies and expertise content live in `data/projects/` and `data/expertise/`, with `en.ts`, `km.ts`, and `shared.ts` in each folder. Each folder's `index.ts` combines the content for the UI and SEO.
- Technology icon mappings live in `data/technologies/index.ts`; SVG assets live in `assets/technologies/`. Shared locale helpers live in `data/localization.ts`.
- Locale files use matching field names (such as `title` in both languages). The adapters restore the existing `title`/`titleKm` format. Optional Khmer translations remain optional so the existing English fallbacks continue to work; untranslated resume sections remain in the English content file.
- Edit English UI text in `data/translations/en.ts` and Khmer UI text in `data/translations/km.ts`. The shared `index.ts` combines them for the language provider, and TypeScript checks that Khmer has the same translation keys as English. `km` is the language code used by the app for Khmer.
- Use `@/` for imports across folders; it resolves to `src/` in TypeScript and Vite. Relative imports are fine within one page folder.
- Add destinations in `config/navigation.ts`, then render the new page in `App.tsx`. Header/footer links derive from the shared definitions.
- Keep navigation state in `hooks/useNavigation.ts` and provider composition in `providers/AppProviders.tsx`.
- Reuse `CategoryFilter` for typed category selection.

Navigation uses real page URLs and browser history. Refresh, direct links, and back/forward navigation preserve the selected page or profile. Use `PageLink` for internal navigation so links are crawlable and support opening in a new tab. Theme and language preferences persist in local storage. Contact submissions use EmailJS with optional server-side Telegram alerts; direct email links still use `mailto:`.

## SEO and hosting

The public URL is `https://tos-develop-portfolio.vercel.app/`. The build generates an HTML entry for each page, team profile, and project with its own title, description, canonical URL, Open Graph/Twitter metadata, and organization structured data. It also generates `robots.txt`, `sitemap.xml`, and a `404.html` marked `noindex`.

`vercel.json` serves this static Vite output with consistent trailing-slash URLs. Keep the generated route directories when deploying; do not rewrite all URLs to the home page, because that would discard their individual metadata. If the domain changes, update `SITE_URL` and rebuild.

Page bodies still render with React in the browser; the HTML metadata is generated at build time. English and Khmer currently share URLs, so no separate language alternates are advertised. After deployment, submit `/sitemap.xml` in Google Search Console and check representative URLs for indexing. SEO changes do not guarantee rankings.

Run `npm run build` followed by `npm run test:seo` to verify routes, metadata, sitemap coverage, and unknown-page handling.

## Commands

| Command                | Purpose                                                     |
| ---------------------- | ----------------------------------------------------------- |
| `npm run dev`          | Start the development server on port 3000                   |
| `npm run typecheck`    | Check TypeScript without emitting files                     |
| `npm run format`       | Format source and project files with Prettier               |
| `npm run format:check` | Check formatting without changing files                     |
| `npm run lint`         | Alias for type checking; no separate linter is configured   |
| `npm run build`        | Create the production site in `dist/`                       |
| `npm run preview`      | Preview the production build                                |
| `npm run clean`        | Remove generated `dist/` output on Windows, macOS, or Linux |

Run type checking and a production build before submitting changes. Deploy the generated `dist/` directory to a static hosting service.
