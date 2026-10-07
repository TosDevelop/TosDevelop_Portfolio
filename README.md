# TosDevelop - PNC Student Team Portfolio

A modern React + Vite portfolio website for the KromDev team at Passerelles Numériques Cambodia (PNC). This project showcases the team's profile, expertise, projects, and contact information in a clean, responsive experience with English and Khmer language support.

## Overview

TosDevelop is a student technology team portfolio designed to present:

- team members and their backgrounds
- technical specialties and service areas
- featured projects and achievements
- company-style portfolio storytelling
- contact and collaboration opportunities

The site is built as a single-page application with smooth navigation, theme switching, and multilingual interface support.

## Features

- Responsive portfolio layout for desktop and mobile
- Multi-page style navigation within a single React app
- Dark/light theme support
- English and Khmer language toggle
- Team member profile cards and detailed bio pages
- Expertise and project showcase sections
- Contact section for collaboration and inquiries
- Modern visual design using Tailwind CSS and motion effects

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion / motion
- Lucide React icons
- Google GenAI integration support
- Express and dotenv support for server-side utilities

## Project Structure

```text
Frontend/
├── public/                 # Static assets and images
├── src/
│   ├── components/        # UI sections and page components
│   ├── context/            # Theme and language providers
│   ├── data/               # Team, projects, and content data
│   ├── types/              # Shared TypeScript definitions
│   ├── App.tsx             # Main app wrapper
│   ├── index.css           # Global styling
│   └── main.tsx            # App entry point
├── .env.example            # Environment variable template
├── index.html              # Vite HTML entry
├── metadata.json           # App metadata used by the platform
├── package.json            # Scripts and dependencies
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite config
├── README.md               # Project documentation
└── package-lock.json       # Lockfile
```

## Prerequisites

Make sure you have the following installed:

- Node.js 18+ or newer
- npm (or pnpm/yarn if preferred)

## Getting Started

1. Clone the repository

```bash
git clone <your-repository-url>
cd Frontend
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

The app runs on:

- http://localhost:3000

## Available Scripts

```bash
npm run dev
```
Starts the Vite development server with the app exposed on port 3000.

```bash
npm run build
```
Builds the application for production.

```bash
npm run preview
```
Serves the production build locally for preview.

```bash
npm run lint
```
Runs TypeScript checks without emitting files.

## Environment Variables

The app includes a sample environment file at `.env.example`.

Notes:

- `APP_URL` is used for app-level links and runtime configuration.
- Copy `.env.example` to `.env` and replace the placeholder values as needed.

## Development Notes

This project uses a component-based architecture with content separated into data files. This makes it easy to update:

- team member information
- project details
- expertise categories
- language labels and translations

The content is centralized in `src/data/`, which is ideal for future reuse or CMS integration.

## Production Build

To create an optimized production build:

```bash
npm run build
```

Then preview it locally:

```bash
npm run preview
```

## Deployment

This project is suitable for deployment on static hosting platforms such as:

- Vercel
- Netlify
- Cloudflare Pages
- any Node-based hosting environment with static asset support

Ensure that your environment variables are configured correctly in your deployment platform.

## Contributing

If you want to improve the portfolio:

1. Create a feature branch
2. Make changes with clean, maintainable component structure
3. Run the lint/build checks
4. Submit a pull request with a clear summary of changes

## Contact

For questions or collaboration opportunities, use the contact section in the application or reach out through the project maintainers.

## License

This project does not appear to include a specific license file. Please check with the repository owner before reusing or redistributing the code in a production environment.
