import { ProjectLinks } from '@/components/ui/ProjectLinks';
import React from 'react';
import { TeamMember } from '@/types/index';
import { useLanguage } from '@/providers/LanguageContext';
import { Avatar } from '@/components/ui/Avatar';
import { TechIcon } from '@/components/ui/TechIcon';
import githubLogo from '@/assets/technologies/github.svg';
import linkedinLogo from '@/assets/technologies/linkedin.svg';
import cambodiaFlag from '@/assets/flags/kh.svg';
import englishFlag from '@/assets/flags/gb.svg';

const languageFlags: Record<string, string> = {
  Khmer: cambodiaFlag,
  English: englishFlag,
  ភាសាខ្មែរ: cambodiaFlag,
  ភាសាអង់គ្លេស: englishFlag,
};
import {
  ArrowLeft,
  Download,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  FolderGit2,
  BookOpen,
  CheckCircle,
  FileText,
  Facebook,
} from 'lucide-react';

interface TeamMemberDetailProps {
  member: TeamMember;
  onBack: () => void;
}

export const TeamMemberDetail: React.FC<TeamMemberDetailProps> = ({
  member,
  onBack,
}) => {
  const { language, t } = useLanguage();
  const details = {
    languages:
      language === 'km'
        ? (member.languagesKm ?? member.languages)
        : member.languages,
    softSkills:
      language === 'km'
        ? (member.softSkillsKm ?? member.softSkills)
        : member.softSkills,
    technicalSkills:
      language === 'km'
        ? (member.technicalSkillsKm ?? member.technicalSkills)
        : member.technicalSkills,
    experience:
      language === 'km'
        ? (member.experienceKm ?? member.experience)
        : member.experience,
    education:
      language === 'km'
        ? (member.educationKm ?? member.education)
        : member.education,
    selectedProjects:
      language === 'km'
        ? (member.selectedProjectsKm ?? member.selectedProjects)
        : member.selectedProjects,
    additionalLearning:
      language === 'km'
        ? (member.additionalLearningKm ?? member.additionalLearning)
        : member.additionalLearning,
  };

  const handleDownloadCv = () => {
    if (member.contact.cvUrl && member.contact.cvUrl !== '#') {
      const link = document.createElement('a');
      link.href = member.contact.cvUrl;
      link.download = `${member.id}-cv.pdf`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      return;
    }
    window.print();
  };

  const handleOpenCv = () => {
    if (member.contact.cvUrl && member.contact.cvUrl !== '#') {
      window.open(member.contact.cvUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="py-8 md:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>{t.team.backToTeam}</span>
      </button>

      {/* Profile Header Banner Card */}
      <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
        {/* Large Portrait Avatar */}
        <div className="flex-shrink-0 w-36 h-48 sm:w-44 sm:h-56 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-sm">
          <Avatar
            src={member.image}
            alt={member.name}
            name={member.name}
            size="xl"
            className="w-full h-full"
          />
        </div>

        {/* Member Info & Action Buttons */}
        <div className="flex-1 space-y-4 text-center md:text-left">
          <div className="space-y-1.5">
            <span className="text-[11px] font-bold tracking-wider uppercase text-blue-600 dark:text-blue-400">
              PNC STUDENT TEAM
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {language === 'km' ? member.nameKm : member.name}
              {language !== 'km' && member.nameKm && (
                <span
                  lang="km"
                  className="ml-3 text-lg font-normal tracking-normal text-slate-400 [word-spacing:0.3em]"
                >
                  ({member.nameKm})
                </span>
              )}
            </h1>
            <p className="text-base sm:text-lg font-semibold text-blue-600 dark:text-blue-400">
              {language === 'km' ? member.roleKm : member.role}
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              {language === 'km' ? member.taglineKm : member.tagline}
            </p>
          </div>

          {/* Action Buttons Row */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 pt-2">
            <button
              onClick={handleDownloadCv}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-xs font-semibold shadow-xs transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{t.team.downloadCv}</span>
            </button>

            {member.contact.cvUrl && member.contact.cvUrl !== '#' && (
              <button
                onClick={handleOpenCv}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-slate-500" />
                <span>{t.team.openCv}</span>
              </button>
            )}

            {member.contact.github && (
              <a
                href={member.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-200 text-xs font-semibold transition-colors"
              >
                <img
                  src={githubLogo}
                  alt=""
                  width={18}
                  height={18}
                  className="h-[18px] w-[18px] shrink-0 dark:invert"
                />
                <span>GitHub</span>
              </a>
            )}

            {member.contact.linkedin && (
              <a
                href={member.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-200 text-xs font-semibold transition-colors"
              >
                <img
                  src={linkedinLogo}
                  alt=""
                  width={18}
                  height={18}
                  className="h-[18px] w-[18px] shrink-0"
                />
                <span>LinkedIn</span>
              </a>
            )}
            {member.contact.facebook && (
              <a
                href={member.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 text-slate-700 dark:text-slate-200 text-xs font-semibold transition-colors"
              >
                <Facebook
                  className="h-[18px] w-[18px] text-blue-600"
                  aria-hidden="true"
                />
                <span>Facebook</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Two-Column Grid: Left (Bio, Contact, Soft Skills) / Right (Technical Skills, Experience, Education, Projects) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          {/* About Bio */}
          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs space-y-3">
            <h2 className="text-sm font-bold tracking-tight text-slate-900 dark:text-white uppercase">
              {t.team.aboutMember}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {language === 'km' ? member.bioKm : member.bio}
            </p>
          </div>

          {/* Contact Details */}
          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs space-y-4">
            <h2 className="text-sm font-bold tracking-tight text-slate-900 dark:text-white uppercase">
              {t.team.contact}
            </h2>

            <div className="space-y-3 text-xs">
              {member.contact.portfolio && (
                <a
                  href={member.contact.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 break-all text-blue-600 hover:underline dark:text-blue-400"
                >
                  <ExternalLink className="h-4 w-4 shrink-0" />
                  <span>{member.contact.portfolio}</span>
                </a>
              )}
              {member.contact.email && (
                <a
                  href={`mailto:${member.contact.email}`}
                  className="flex items-center gap-2.5 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 break-all"
                >
                  <Mail className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>{member.contact.email}</span>
                </a>
              )}

              {member.contact.phone && (
                <a
                  href={`tel:${member.contact.phone}`}
                  className="flex items-center gap-2.5 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Phone className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>{member.contact.phone}</span>
                </a>
              )}

              {member.contact.location && (
                <div className="flex items-center gap-2.5 text-slate-600 dark:text-slate-300">
                  <MapPin className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <span>{member.contact.location}</span>
                </div>
              )}
            </div>
          </div>

          {/* Languages & Soft Skills */}
          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs space-y-4">
            <h2 className="text-sm font-bold tracking-tight text-slate-900 dark:text-white uppercase">
              {t.team.languages}
            </h2>

            {/* Language proficiency */}
            <div className="space-y-2 pb-3 border-b border-slate-100 dark:border-slate-800 text-xs">
              {details.languages.map((lang, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center text-slate-700 dark:text-slate-300"
                >
                  <span className="inline-flex items-center gap-2 font-semibold">
                    {languageFlags[lang.language] && (
                      <img
                        src={languageFlags[lang.language]}
                        alt=""
                        width={24}
                        height={16}
                        className="h-4 w-6 shrink-0 rounded-sm object-cover"
                      />
                    )}
                    {lang.language}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 text-[11px]">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>

            {/* Soft Skills */}
            <div className="space-y-2">
              <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400">
                {t.team.softSkills}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {details.softSkills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (8 cols) */}
        <div className="lg:col-span-8 space-y-8">
          {/* Technical Skills Card */}
          <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <FolderGit2 className="w-4 h-4" />
              </div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                {t.team.techSkills}
              </h2>
            </div>

            <div className="flex flex-col gap-6">
              {details.technicalSkills.map((cat, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                  <h3 className="text-[11px] font-bold tracking-wider uppercase text-slate-400 dark:text-slate-500">
                    {cat.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <TechIcon key={sIdx} name={skill.name} size="sm" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          {details.experience.length > 0 && (
            <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <Briefcase className="w-4 h-4" />
                </div>
                <h2 className="text-base font-bold text-slate-900 dark:text-white">
                  {t.team.experience}
                </h2>
              </div>

              <div className="space-y-6 divide-y divide-slate-100 dark:divide-slate-800">
                {details.experience.map((exp, idx) => (
                  <div
                    key={idx}
                    className={`space-y-2.5 ${idx > 0 ? 'pt-6' : ''}`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                          {exp.role}
                        </h3>
                        <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        {exp.type && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                            {exp.type}
                          </span>
                        )}
                        <span className="text-xs font-mono text-slate-400">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {exp.technologies.map((tItem, tIdx) => (
                        <TechIcon key={tIdx} name={tItem} size="sm" />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education Card */}
          {details.education.length > 0 && (
            <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <h2 className="text-base font-bold text-slate-900 dark:text-white">
                  {t.team.education}
                </h2>
              </div>

              <div className="space-y-4">
                {details.education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-xs text-blue-600 dark:text-blue-400">
                        {edu.institution}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      {edu.period}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Selected Projects */}
          {details.selectedProjects.length > 0 && (
            <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <FolderGit2 className="w-4 h-4" />
                </div>
                <h2 className="text-base font-bold text-slate-900 dark:text-white">
                  {t.team.selectedProjects}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {details.selectedProjects.map((p, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col gap-3 p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/60 shadow-2xs"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                          {p.title}
                        </h3>
                        <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                          {p.role}
                        </p>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400">
                        {p.period}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {p.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {p.technologies.map((tech, tIdx) => (
                        <TechIcon key={tIdx} name={tech} size="sm" />
                      ))}
                    </div>
                    <ProjectLinks
                      title={p.title}
                      repoUrl={p.repoUrl}
                      repositories={p.repositories}
                      liveUrl={p.link}
                      caseStudyUrl={p.caseStudyUrl}
                      showCaseStudy
                      className="mt-auto border-t border-slate-100 pt-3 dark:border-slate-700"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Additional Learning */}
          {details.additionalLearning &&
            details.additionalLearning.length > 0 && (
              <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <h2 className="text-base font-bold text-slate-900 dark:text-white">
                    {t.team.additionalLearning}
                  </h2>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300">
                  {details.additionalLearning.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};
