import {
  Github,
  FolderGit2,
  Mail,
  Globe,
  MapPin,
  ArrowUpRight,
} from 'lucide-react';
import { SITE_URL, TEAM_CONTACT } from '@/config/site';
import { useLanguage } from '@/providers/LanguageContext';

export function TeamInfoSection() {
  const { t } = useLanguage();
  const links = [
    {
      label: t.teamInfo.github,
      detail: 'github.com/TosDevelop',
      href: TEAM_CONTACT.github,
      Icon: Github,
    },
    {
      label: t.teamInfo.repository,
      detail: 'TosDevelop_Portfolio',
      href: TEAM_CONTACT.repository,
      Icon: FolderGit2,
    },
    {
      label: t.teamInfo.email,
      detail: TEAM_CONTACT.email,
      href: `mailto:${TEAM_CONTACT.email}`,
      Icon: Mail,
    },
    {
      label: t.teamInfo.website,
      detail: new URL(SITE_URL).hostname,
      href: SITE_URL,
      Icon: Globe,
    },
  ];
  return (
    <section
      data-reveal
      aria-labelledby="team-info-heading"
      className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="max-w-3xl space-y-3">
        <h2
          id="team-info-heading"
          className="text-xl font-bold text-slate-900 sm:text-2xl dark:text-white"
        >
          {t.teamInfo.title}
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {t.teamInfo.description}
        </p>
        <p className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <MapPin aria-hidden="true" className="h-4 w-4 shrink-0" />
          {t.contact.locationVal}
        </p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {links.map(({ label, detail, href, Icon }) => (
          <a
            key={href}
            href={href}
            target={href.startsWith('https:') ? '_blank' : undefined}
            rel={href.startsWith('https:') ? 'noopener noreferrer' : undefined}
            className="group flex min-w-0 items-start gap-3 rounded-xl border border-slate-200 p-4 transition-colors hover:border-blue-400 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:border-slate-700 dark:hover:border-blue-500 dark:hover:bg-blue-950/40"
          >
            <Icon
              aria-hidden="true"
              className="mt-0.5 h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400"
            />
            <div className="min-w-0 flex-1">
              <span className="block text-sm font-semibold text-slate-900 dark:text-white">
                {label}
              </span>
              <span className="mt-1 block break-all text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                {detail}
              </span>
            </div>
            <ArrowUpRight
              aria-hidden="true"
              className="h-4 w-4 shrink-0 text-slate-400 group-hover:text-blue-600"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
