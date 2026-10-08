import { PageLink } from '@/components/ui/PageLink';
import React from 'react';
import { EXPERTISE_DOMAINS } from '@/data/expertise';
import { TEAM_MEMBERS } from '@/data/team';
import { useLanguage } from '@/providers/LanguageContext';
import { TechIcon } from '@/components/ui/TechIcon';
import { Avatar } from '@/components/ui/Avatar';
import {
  Layers,
  ShieldCheck,
  CalendarCheck,
  Layout,
  Server,
  Database,
  Palette,
  Sparkles,
  Cloud,
  Users,
} from 'lucide-react';

interface ExpertisePageProps {
  onSelectMember: (memberId: string) => void;
}

export const ExpertisePage: React.FC<ExpertisePageProps> = ({
  onSelectMember,
}) => {
  const { language, t } = useLanguage();

  const getDomainIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'ShieldCheck':
        return (
          <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
        );
      case 'CalendarCheck':
        return (
          <CalendarCheck className="w-5 h-5 text-amber-600 dark:text-amber-400" />
        );
      case 'Layout':
        return <Layout className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'Server':
        return (
          <Server className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
        );
      case 'Database':
        return (
          <Database className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
        );
      case 'Palette':
        return <Palette className="w-5 h-5 text-rose-600 dark:text-rose-400" />;
      case 'Sparkles':
        return (
          <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
        );
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-sky-600 dark:text-sky-400" />;
      default:
        return <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
    }
  };

  return (
    <div className="py-10 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-950/60 border border-blue-200/70 dark:border-blue-800 text-xs font-semibold text-blue-700 dark:text-blue-300">
          <span>{t.expertise.kicker}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
          {t.expertise.title}
        </h1>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {t.expertise.subtitle}
        </p>
      </div>

      {/* Expertise categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {EXPERTISE_DOMAINS.map((domain) => {
          const linkedMembers = domain.relatedMemberIds
            .map((id) => TEAM_MEMBERS.find((m) => m.id === id))
            .filter((member) => member !== undefined);

          return (
            <div
              key={domain.id}
              className="p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header Icon + Title */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                    {getDomainIcon(domain.iconName)}
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    {language === 'km' ? domain.titleKm : domain.title}
                  </h2>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {language === 'km'
                    ? domain.descriptionKm
                    : domain.description}
                </p>

                {/* Related Technologies */}
                <div className="space-y-2 pt-2">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400 dark:text-slate-500">
                    {t.expertise.relatedTech}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {domain.technologies.map((tech, idx) => (
                      <TechIcon key={idx} name={tech} size="sm" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Related Members */}
              {linkedMembers.length > 0 && (
                <div className="pt-5 border-t border-slate-100 dark:border-slate-800 space-y-3">
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                    <Users className="h-4 w-4" aria-hidden="true" />
                    <h3 className="text-[11px] font-semibold tracking-wide uppercase">
                      {t.expertise.relatedMembers}
                    </h3>
                    <span className="ml-auto rounded-full bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-xs font-medium tabular-nums">
                      {linkedMembers.length.toLocaleString(
                        language === 'km' ? 'km-KH' : 'en-US',
                      )}
                    </span>
                  </div>

                  <ul className="flex flex-wrap gap-3">
                    {linkedMembers.map((member) => {
                      const name =
                        language === 'km' ? member.nameKm : member.name;
                      return (
                        <li key={member.id} className="min-w-0">
                          <PageLink
                            tab="team"
                            memberId={member.id}
                            onClick={() => onSelectMember(member.id)}
                            aria-label={`${t.expertise.viewProfile}: ${name}`}
                            className="group relative block rounded-full ring-2 ring-transparent hover:ring-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 transition-shadow"
                          >
                            <Avatar
                              src={member.image}
                              alt=""
                              name={member.name}
                              size="sm"
                              className="shrink-0 rounded-full ring-1 ring-slate-200 dark:ring-slate-700"
                            />
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute bottom-full left-0 z-20 mb-2 w-max max-w-48 rounded-md bg-slate-900 px-2.5 py-1.5 text-xs font-medium text-white shadow-lg opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 dark:bg-slate-100 dark:text-slate-900"
                            >
                              {name}
                            </span>
                          </PageLink>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Visual Technology Badges System Section */}
      <div className="pt-8 space-y-6">
        <div className="max-w-3xl space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            {t.expertise.techSystemKicker}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {t.expertise.techSystemTitle}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.expertise.techSystemDesc}
          </p>
        </div>

        <div className="space-y-6">
          {EXPERTISE_DOMAINS.map((domain) => (
            <section
              key={domain.id}
              aria-labelledby={`tools-${domain.id}`}
              className="space-y-3"
            >
              <h3
                id={`tools-${domain.id}`}
                className="text-sm font-semibold text-slate-700 dark:text-slate-200"
              >
                {language === 'km' ? domain.titleKm : domain.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {domain.technologies.map((name) => (
                  <div
                    key={name}
                    className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center gap-2.5 shadow-2xs"
                  >
                    <TechIcon name={name} size="sm" showLabel={false} />
                    <span className="min-w-0 text-xs font-bold text-slate-800 dark:text-slate-100 break-words">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};
