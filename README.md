# TosDevelop — PNC Student Team Portfolio

A React + TypeScript portfolio for the TosDevelop team at Passerelles Numériques Cambodia, with English/Khmer content and light/dark themes. Built with Vite, Tailwind CSS, and Lucide icons.

## Getting started

Use Node.js 22.12+ (or Node.js 20.19+ within the 20.x release line) and npm.

```bash
npm ci
npm run dev
```

The development server runs at http://localhost:3000. No environment variables are required by the current frontend. `.env.example` contains optional platform placeholders; the app does not currently consume them.

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
- Team, project, and expertise content lives in `data/team/`, `data/projects/`, and `data/expertise/`. Each folder has `en.ts` for English content, `km.ts` for existing Khmer translations, and `shared.ts` for shared details such as images, contact information, technologies, and relationships. Entries use the same ID in all three files. The original `teamData.ts`, `projectsData.ts`, and `expertiseData.ts` combine them for the UI and SEO code.
- Locale files use matching field names (such as `title` in both languages). The adapters restore the existing `title`/`titleKm` format. Optional Khmer translations remain optional so the existing English fallbacks continue to work; untranslated resume sections remain in the English content file.
- Edit English UI text in `data/translations/en.ts` and Khmer UI text in `data/translations/km.ts`. The shared `index.ts` combines them for the language provider, and TypeScript checks that Khmer has the same translation keys as English. `km` is the language code used by the app for Khmer.
- Use `@/` for imports across folders; it resolves to `src/` in TypeScript and Vite. Relative imports are fine within one page folder.
- Add destinations in `config/navigation.ts`, then render the new page in `App.tsx`. Header/footer links derive from the shared definitions.
- Keep navigation state in `hooks/useNavigation.ts` and provider composition in `providers/AppProviders.tsx`.
- Reuse `CategoryFilter` for typed category selection.

Navigation uses real page URLs and browser history. Refresh, direct links, and back/forward navigation preserve the selected page or profile. Use `PageLink` for internal navigation so links are crawlable and support opening in a new tab. Theme and language preferences persist in local storage. Contact submissions open the visitor's email client via `mailto:`; there is no backend email service.

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
