import React from 'react';
import { ProjectCaseStudy } from '@/types/index';
import { TEAM_MEMBERS } from '@/data/teamData';
import { useLanguage } from '@/providers/LanguageContext';
import { TechIcon } from '@/components/ui/TechIcon';
import { Avatar } from '@/components/ui/Avatar';
import {
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
  Github,
  Award,
  Lightbulb,
  FileCheck,
} from 'lucide-react';

interface ProjectDetailProps {
  project: ProjectCaseStudy;
  onBack: () => void;
  onSelectMember: (memberId: string) => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({
  project,
  onBack,
  onSelectMember,
}) => {
  const { language, t } = useLanguage();

  const relatedMembers = project.relatedMemberIds
    .map((id) => TEAM_MEMBERS.find((m) => m.id === id))
    .filter(Boolean);

  const leadMember = project.leadMemberId
    ? TEAM_MEMBERS.find((m) => m.id === project.leadMemberId)
    : null;

  return (
    <div className="py-8 md:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Back button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>{t.projects.backToProjects}</span>
      </button>

      {/* Hero Header Card */}
      <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-5">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
          <span className="px-2.5 py-1 rounded bg-blue-600 text-white">
            {project.category}
          </span>
          <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200/60 dark:border-slate-700">
            {project.type}
          </span>
          <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono text-[11px]">
            {project.period}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          {language === 'km' ? project.titleKm : project.title}
        </h1>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
          {language === 'km' ? project.taglineKm : project.tagline}
        </p>

        {/* Lead Profile Source Credit */}
        {leadMember && (
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
            <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400">
              PROFILE SOURCE
            </span>
            <div
              onClick={() => onSelectMember(leadMember.id)}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <Avatar
                src={leadMember.image}
                alt={leadMember.name}
                name={leadMember.name}
                size="sm"
                className="w-7 h-7 rounded-full"
              />
              <span className="text-xs font-semibold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.leadMemberName}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Two-Column Structured Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (6 cols): Problem & Solution */}
        <div className="lg:col-span-6 space-y-6">
          {/* Problem / Goal */}
          <div className="p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs space-y-3">
            <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400">
              <span className="text-[10px] font-bold tracking-wider uppercase">
                {t.projects.problemGoal}
              </span>
            </div>
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              {t.projects.whatNeeded}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {language === 'km' && project.problemGoalKm
                ? project.problemGoalKm
                : project.problemGoal}
            </p>
          </div>

          {/* Solution / Approach */}
          <div className="p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs space-y-3">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
              <span className="text-[10px] font-bold tracking-wider uppercase">
                {t.projects.solutionApproach}
              </span>
            </div>
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              {t.projects.howApproached}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {language === 'km' && project.solutionApproachKm
                ? project.solutionApproachKm
                : project.solutionApproach}
            </p>
          </div>

          {/* Repo Link if provided */}
          {project.repoUrl && (
            <div className="pt-2">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors shadow-2xs"
              >
                <Github className="w-3.5 h-3.5" />
                <span>{t.projects.openRepo}</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          )}
        </div>

        {/* Right Column (6 cols): Key Features, Tech Stack, Outcomes, Related Members */}
        <div className="lg:col-span-6 space-y-6">
          {/* Key Features */}
          <div className="p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs space-y-4">
            <div className="flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <h2 className="text-sm font-bold uppercase tracking-tight text-slate-900 dark:text-white">
                {t.projects.keyFeatures}
              </h2>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {(language === 'km' && project.keyFeaturesKm
                ? project.keyFeaturesKm
                : project.keyFeatures
              ).map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Stack */}
          <div className="p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs space-y-3">
            <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400 dark:text-slate-500 block">
              {t.projects.techStack}
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <TechIcon key={idx} name={tech} size="sm" />
              ))}
            </div>
          </div>

          {/* Outcome & Learning */}
          <div className="p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs space-y-3">
            <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
              <Award className="w-4 h-4" />
              <h2 className="text-sm font-bold uppercase tracking-tight text-slate-900 dark:text-white">
                {t.projects.outcomeLearning}
              </h2>
            </div>

            <ul className="space-y-2">
              {(language === 'km' && project.outcomeLearningKm
                ? project.outcomeLearningKm
                : project.outcomeLearning
              ).map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300"
                >
                  <span className="text-blue-500 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Related Team Members */}
          {relatedMembers.length > 0 && (
            <div className="p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs space-y-3">
              <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400 dark:text-slate-500 block">
                {t.projects.relatedMembers}
              </span>

              <div className="flex flex-col sm:flex-row gap-3">
                {relatedMembers.map((member) => (
                  <div
                    key={member!.id}
                    onClick={() => onSelectMember(member!.id)}
                    className="flex items-center gap-3 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:border-blue-400 dark:hover:border-blue-500 cursor-pointer transition-colors group flex-1"
                  >
                    <Avatar
                      src={member!.image}
                      alt={member!.name}
                      name={member!.name}
                      size="sm"
                      className="w-9 h-9 rounded-full"
                    />
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 truncate">
                        {language === 'km' ? member!.nameKm : member!.name}
                      </p>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                        {language === 'km' ? member!.roleKm : member!.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
