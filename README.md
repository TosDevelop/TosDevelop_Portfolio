# TosDevelop

A bilingual portfolio for the student technology team at **Passerelles Numériques Cambodia (PNC)**, based in Phnom Penh.

[Live website](https://tos-develop-portfolio.vercel.app/) · [GitHub organization](https://github.com/TosDevelop)

## Contents

- [Overview](#overview)
- [Quick start](#quick-start)
- [Configuration](#configuration)
- [Project structure](#project-structure)
- [Updating content](#updating-content)
- [Development commands](#development-commands)
- [Telegram integration](#telegram-integration)
- [Deployment and SEO](#deployment-and-seo)

## Overview

- English and Khmer content, with saved language and theme preferences.
- Member profiles with skills, experience, education, projects, and contact links.
- Dedicated pages for the team, expertise, shared projects, about, and contact.
- EmailJS contact forms with optional Telegram notifications for the team inbox.
- Direct page URLs, browser history navigation, and generated metadata for each route.

**Stack:** React, TypeScript, Vite, Tailwind CSS, and Lucide icons. Vercel hosts the static site and Telegram API functions.

## Quick start

**Requirements:** Node.js 22.12+ (or 20.19+ within the 20.x release line) and npm.

```bash
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000).

The portfolio runs without external service credentials. To enable contact email and optional Telegram features, copy [.env.example](.env.example) to `.env`, fill in the relevant values, and restart the development server.

## Configuration

| Variable                  | Used for                               | Visibility           |
| ------------------------- | -------------------------------------- | -------------------- |
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service                        | Public browser value |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public key                     | Public browser value |
| `VITE_EMAILJS_TEMPLATE`   | EmailJS template ID                    | Public browser value |
| `TELEGRAM_BOT_TOKEN`      | Optional Telegram alerts and callbacks | Server only          |
| `TELEGRAM_CHAT_ID`        | Destination team group                 | Server only          |
| `TELEGRAM_WEBHOOK_SECRET` | Deployed language-button callbacks     | Server only          |

Keep private credentials out of version control. Never prefix Telegram settings with `VITE_`: Vite exposes those variables to the browser. Add the same required values in Vercel and redeploy for production.

### Contact email

1. Configure an EmailJS service and template. The [email template](templates/emailjs-contact.html) is available as a starting point.
2. Set the template's **To Email** field to `{{to_email}}` and **Reply-To** to `{{email}}`.
3. Fill in the three `VITE_EMAILJS_*` variables.

The form lets visitors choose the team inbox or an individual member. Missing EmailJS configuration disables form sending; direct `mailto:` links remain available.

## Project structure

```text
TosDevelop_Portfolio/
├── api/                    # Vercel entry points for Telegram endpoints
├── server/                 # Server-only Telegram handlers
├── scripts/                # SEO generation, dev middleware, bot CLI
├── src/
│   ├── assets/             # Photos, CVs, logos, flags, technology icons
│   ├── components/         # Shared layout, sections, UI, and SEO
│   ├── config/             # Site identity, navigation, and SEO settings
│   ├── data/               # Team, projects, expertise, and translations
│   ├── hooks/              # Navigation and other reusable hooks
│   ├── pages/              # Home, about, team, expertise, projects, contact
│   ├── providers/          # Language and theme contexts
│   ├── services/           # Browser-side email and Telegram requests
│   ├── styles/             # Global styles
│   ├── types/              # Shared TypeScript content models
│   ├── App.tsx             # Application composition and page rendering
│   └── main.tsx            # React entry point
├── templates/              # Email template
├── tests/                  # Contact, Telegram, and SEO tests
├── .env.example            # Environment variable reference
├── vercel.json             # Hosting configuration
└── vite.config.ts          # Build and development configuration
```

Keep `api/` at the project root for Vercel function discovery. The `server/` handlers are shared by production functions, development middleware, and bot tooling.

## Updating content

All paths below are relative to the repository root.

| Change                              | Location                                                         |
| ----------------------------------- | ---------------------------------------------------------------- |
| Site name, public URL, team contact | [src/config/site.ts](src/config/site.ts)                         |
| Page titles and descriptions        | [src/config/seo.ts](src/config/seo.ts)                           |
| Navigation destinations             | [src/config/navigation.ts](src/config/navigation.ts)             |
| Member order and registration       | [src/data/team/index.ts](src/data/team/index.ts)                 |
| Individual member profiles          | `src/data/team/<member-id>/`                                     |
| Shared team projects                | [src/data/projects/index.ts](src/data/projects/index.ts)         |
| Expertise content                   | `src/data/expertise/`                                            |
| English and Khmer UI text           | `src/data/translations/en.ts`, `km.ts`                           |
| Technology icon mappings            | [src/data/technologies/index.ts](src/data/technologies/index.ts) |
| Shared content types                | [src/types/index.ts](src/types/index.ts)                         |

### Member profiles

Each member has a dedicated folder:

```text
src/data/team/<member-id>/
├── en.ts                   # English profile and resume content
├── km.ts                   # Khmer profile and resume content
├── shared.ts               # Photo, contact details, skills, categories
├── index.ts                # Combines shared and localized content
└── projects/
    ├── en.ts               # English project summaries and links
    └── km.ts               # Khmer project summaries and links
```

Keep member IDs stable so existing profile links continue to work. Maintain the same project order in both languages. Individual projects belong in member profiles; the Projects page is reserved for work completed together as TosDevelop and currently shows an empty state.

Locale files use matching field names, such as `title` in both languages. Adapters produce the `title` / `titleKm` fields used by the UI. Optional Khmer resume fields fall back to English. UI translation keys are checked by TypeScript; the app uses `km` for Khmer.

### UI and application code

- Keep page-specific components in `src/pages/<page>/` and reusable components in `src/components/`.
- Use `PageLink` for internal navigation to preserve crawlable URLs and new-tab support. Register destinations in `src/config/navigation.ts` and render pages in `src/App.tsx`.
- Edit contact form behavior in `src/pages/contact/useContactForm.ts`, layout in `ContactPage.tsx`, and browser requests in `src/services/`.
- Edit the animated background in `src/components/layout/WaterBackground.tsx` and its drawing logic in `waterRenderer.ts`.
- Use `@/` for browser imports across folders. Keep relative `.ts` imports in configuration and data consumed by Node build scripts.

## Development commands

| Command                                   | Purpose                                               |
| ----------------------------------------- | ----------------------------------------------------- |
| `npm run dev`                             | Start development server on port 3000                 |
| `npm run build`                           | Generate production output in `dist/`                 |
| `npm run preview`                         | Preview the production build locally                  |
| `npm run typecheck`                       | Check TypeScript without emitting files               |
| `npm run lint`                            | Alias for type checking; no separate linter           |
| `npm run format`                          | Format project files with Prettier                    |
| `npm run format:check`                    | Check formatting without changing files               |
| `npm test`                                | Run all tests; build first for generated SEO pages    |
| `npm run test:seo`                        | Test generated routes and metadata; build first       |
| `npm run check`                           | Check formatting and types, build, then run all tests |
| `npm run clean`                           | Remove generated `dist/` output                       |
| `npm run telegram:poll`                   | Handle Telegram language buttons locally              |
| `npm run telegram:webhook -- <https-url>` | Register the deployed Telegram webhook                |

Run `npm run check` before submitting code changes. TypeScript uses strict checking and rejects unused locals and parameters. Tests cover contact email, Telegram alerts and callbacks, and generated SEO pages; external requests are mocked.

## Telegram integration

Telegram is optional. Only messages sent to the **team inbox** trigger a group alert, after EmailJS accepts the email. Individual member messages are not forwarded.

Alerts include the sender's name and email, subject, and a message preview. Telegram failures do not change email success or trigger automatic email retries.

### Set up group alerts

1. Create a bot with [BotFather](https://t.me/BotFather) using `/newbot`.
2. Add it to the team group and send a command addressed to it.
3. Obtain the group's ID from the Telegram Bot API `getUpdates` response: `message.chat.id`.
4. Set `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` in `.env` and Vercel.
5. Invite team members and ensure the bot can send messages in the group.

All alerts use one group ID. During development, `npm run dev` serves `/api/telegram-alert` through middleware using the same handler as Vercel. Missing Telegram configuration disables alerts without disabling email.

The alert endpoint validates fields and rejects cross-origin browser requests, but an Origin header is not authentication and it cannot independently verify EmailJS delivery. Configure a Vercel Firewall rate-limit rule for `/api/telegram-alert` before exposing alerts publicly.

### Language buttons

New alerts include **🇰🇭 ភាសាខ្មែរ** and **🇬🇧 English** buttons. Any group member can change an alert's labels for everyone; names, subjects, and message text retain their original language. This does not change future alerts or older messages without buttons.

**Local development:** keep `npm run dev` running and start a second terminal:

```bash
npm run telegram:poll
```

Run only one poller per bot. It refuses to start while a deployed webhook is active and never removes a webhook automatically.

**Production:** set the same `TELEGRAM_WEBHOOK_SECRET` in `.env` and Vercel, deploy, stop any local poller, then register the endpoint:

```bash
npm run telegram:webhook -- https://tos-develop-portfolio.vercel.app/api/telegram-webhook
```

Use a random secret containing only letters, digits, underscores, or hyphens (1–256 characters). The server checks Telegram's secret header and only edits this bot's alerts in the configured group. Callbacks include the existing message, so no database is required.

References: [Telegram Bot API](https://core.telegram.org/bots/api#sendmessage) · [Telegram webhooks](https://core.telegram.org/bots/api#setwebhook)

## Deployment and SEO

### Vercel

The repository's [vercel.json](vercel.json) configures:

| Setting          | Value            |
| ---------------- | ---------------- |
| Framework        | Vite             |
| Build command    | `npm run build`  |
| Output directory | `dist`           |
| URL style        | Trailing slashes |

Deploy the repository with its root `api/` entry points and `server/` handlers to retain Telegram functionality. Configure environment variables in the Vercel project before deploying. A static-only upload of `dist/` serves the portfolio but does not deploy those API functions.

### Generated pages and metadata

The build generates HTML for each page, member profile, and registered project, plus `robots.txt`, `sitemap.xml`, and a `noindex` 404 page. Each route has its own title, description, canonical URL, social metadata, and structured data.

Keep the generated route directories when deploying. Do not rewrite every URL to the homepage: that discards route-specific metadata. If the domain changes, update `SITE_URL` in `src/config/site.ts` and rebuild.

Each generated page includes an English content summary and crawlable navigation before React starts, so content remains readable without JavaScript. Structured data updates during client navigation. English and Khmer share URLs, so no separate language alternates are advertised.

To validate the generated output:

```bash
npm run build
npm run test:seo
```

After deployment, verify the site in Google Search Console, submit `/sitemap.xml`, and inspect the homepage and a member page. Local checks validate output; they do not confirm search indexing or rankings.
