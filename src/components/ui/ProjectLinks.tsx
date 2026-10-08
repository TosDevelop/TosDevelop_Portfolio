import { ExternalLink, FolderGit2 } from 'lucide-react';
import { useLanguage } from '@/providers/LanguageContext';

interface ProjectLinksProps {
  title: string;
  repoUrl?: string;
  repositories?: { label: string; url: string }[];
  liveUrl?: string;
  caseStudyUrl?: string;
  showCaseStudy?: boolean;
  className?: string;
}

export function ProjectLinks({
  title,
  repoUrl,
  repositories,
  liveUrl,
  caseStudyUrl,
  showCaseStudy = false,
  className = '',
}: ProjectLinksProps) {
  const { t } = useLanguage();
  const links = [
    ...(repositories?.length
      ? repositories.map(({ label, url }) => ({ label, url, Icon: FolderGit2 }))
      : [{ label: t.team.repository, url: repoUrl, Icon: FolderGit2 }]),
    { label: t.team.liveDemo, url: liveUrl, Icon: ExternalLink },
    ...(showCaseStudy || caseStudyUrl
      ? [
          {
            label: t.projects.viewCaseStudy,
            url: caseStudyUrl,
            Icon: ExternalLink,
          },
        ]
      : []),
  ];

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {links.map(({ label, url, Icon }) => {
        const content = (
          <>
            <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
            {label}
          </>
        );
        const base =
          'inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-medium';
        return url ? (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${label}: ${title}`}
            className={`${base} border-slate-200 text-slate-700 transition-colors hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-blue-950 dark:hover:text-blue-300`}
          >
            {content}
          </a>
        ) : (
          <button
            key={label}
            type="button"
            disabled
            title={t.team.linkUnavailable}
            aria-label={`${label}: ${title} — ${t.team.linkUnavailable}`}
            className={`${base} cursor-not-allowed border-slate-200 bg-slate-50 text-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-500`}
          >
            {content}
          </button>
        );
      })}
    </div>
  );
}
