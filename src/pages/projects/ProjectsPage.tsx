import { PageLink } from '@/components/ui/PageLink';
import { CategoryFilter } from '@/components/ui/CategoryFilter';
import React, { useState } from 'react';
import { PROJECTS_DATA } from '@/data/projectsData';
import { ProjectCategory } from '@/types/index';
import { useLanguage } from '@/providers/LanguageContext';
import { ProjectDetail } from '@/pages/projects/ProjectDetail';
import { TechIcon } from '@/components/ui/TechIcon';
import { ArrowRight, Calendar, Bookmark } from 'lucide-react';

interface ProjectsPageProps {
  selectedProjectId?: string | null;
  onSelectProject: (projectId: string | null) => void;
  onSelectMember: (memberId: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  selectedProjectId,
  onSelectProject,
  onSelectMember,
}) => {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  // If a project is selected, render the case study detail
  const currentProject = PROJECTS_DATA.find((p) => p.id === selectedProjectId);

  if (currentProject) {
    return (
      <ProjectDetail
        project={currentProject}
        onBack={() => onSelectProject(null)}
        onSelectMember={onSelectMember}
      />
    );
  }

  // Filter projects based on category
  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  const filterTabs: ProjectCategory[] = [
    'All',
    'Web',
    'Software',
    'QA',
    'Data',
    'Telecom',
  ];

  return (
    <div className="py-10 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-950/60 border border-blue-200/70 dark:border-blue-800 text-xs font-semibold text-blue-700 dark:text-blue-300">
          <span>{t.projects.kicker}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
          {t.projects.title}
        </h1>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {t.projects.subtitle}
        </p>
      </div>

      {/* Segmented Filter Buttons */}
      <CategoryFilter
        categories={filterTabs}
        value={activeCategory}
        onChange={setActiveCategory}
        labels={t.projects.filters}
      />

      {/* Projects Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-2xs hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200"
          >
            {/* Top Blue Bar with Category & Period */}
            <div className="bg-blue-600 dark:bg-blue-600 text-white p-4 flex items-center justify-between">
              <span className="text-xs font-mono font-medium tracking-tight">
                {project.period}
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white/20 uppercase tracking-wider">
                {project.category}
              </span>
            </div>

            {/* Card Content Body */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
              <div className="space-y-2">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                  {language === 'km' ? project.titleKm : project.title}
                </h2>
                <span className="inline-block text-[11px] font-medium text-blue-600 dark:text-blue-400">
                  {project.type}
                </span>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                  {language === 'km' ? project.taglineKm : project.tagline}
                </p>
              </div>

              {/* Technologies Row & Action Button */}
              <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <TechIcon key={idx} name={tech} size="sm" />
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[10px] text-slate-400 self-center">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <PageLink
                  tab="projects"
                  projectId={project.id}
                  onClick={() => onSelectProject(project.id)}
                  className="w-full inline-flex items-center justify-between py-2 px-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 text-blue-600 dark:text-blue-400 text-xs font-semibold hover:bg-blue-50/50 dark:hover:bg-blue-950/20 transition-all cursor-pointer"
                >
                  <span>{t.projects.viewCaseStudy}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </PageLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
