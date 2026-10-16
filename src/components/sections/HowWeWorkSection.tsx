import { PageLink } from '@/components/ui/PageLink';
import type { Navigate } from '@/config/navigation';
import React, { useRef, useState } from 'react';
import { useLanguage } from '@/providers/LanguageContext';
import {
  ArrowRight,
  MessageCircle,
  Clock3,
  Settings2,
  Handshake,
  Rocket,
  X,
  MousePointer2,
} from 'lucide-react';

const stepStyles = [
  {
    Icon: MessageCircle,
    color: '#ed6545',
    text: 'text-orange-700 dark:text-orange-300',
  },
  {
    Icon: Clock3,
    color: '#efb63e',
    text: 'text-amber-800 dark:text-amber-300',
  },
  {
    Icon: Settings2,
    color: '#8bb74b',
    text: 'text-lime-800 dark:text-lime-300',
  },
  {
    Icon: Handshake,
    color: '#56b3a1',
    text: 'text-teal-700 dark:text-teal-300',
  },
  { Icon: Rocket, color: '#3486ab', text: 'text-sky-700 dark:text-sky-300' },
];

interface HowWeWorkSectionProps {
  onNavigate: Navigate;
}

export const HowWeWorkSection: React.FC<HowWeWorkSectionProps> = ({
  onNavigate,
}) => {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const stepButtons = useRef<(HTMLButtonElement | null)[]>([]);
  const selectedStep =
    activeStep === null ? null : t.howWeWork.steps[activeStep];
  const selectedStyle = activeStep === null ? null : stepStyles[activeStep];
  const closeDetails = () => {
    if (activeStep !== null) stepButtons.current[activeStep]?.focus();
    setActiveStep(null);
  };

  return (
    <section
      data-reveal
      aria-labelledby="how-we-work-heading"
      className="py-16 md:py-20 border-b border-slate-200/60 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                {t.howWeWork.kicker}
              </span>
              <h2
                id="how-we-work-heading"
                className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight"
              >
                {t.howWeWork.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {t.howWeWork.desc}
              </p>
            </div>
            <div className="shrink-0">
              <PageLink
                tab={'about'}
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 rounded-lg py-2 text-sm font-semibold text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 transition-colors"
              >
                <span>{t.howWeWork.learnMore}</span>
                <ArrowRight aria-hidden="true" className="w-4 h-4" />
              </PageLink>
            </div>
          </div>

          {/* Alternating circles meet a shared colored path on desktop. */}
          <p className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <MousePointer2 aria-hidden="true" className="h-3.5 w-3.5" />
            {t.howWeWork.interactionHint}
          </p>
          <ol className="workflow-path isolate grid rounded-2xl bg-white px-4 py-6 sm:px-8 xl:px-10 xl:py-8 dark:bg-slate-900">
            {t.howWeWork.steps.map((step, index) => {
              const { Icon, color, text } =
                stepStyles[index % stepStyles.length];
              const isUpper = index % 2 === 0;
              return (
                <li
                  key={step.num}
                  style={
                    {
                      '--step-color': color,
                      '--step-column': index + 1,
                    } as React.CSSProperties
                  }
                  className={`workflow-step relative flex items-start gap-3 pb-8 last:pb-0 sm:gap-5 ${isUpper ? 'workflow-step--upper' : 'workflow-step--lower'}`}
                >
                  <span
                    aria-hidden="true"
                    className="workflow-connector absolute -z-10 bottom-0 left-[42px] top-16 w-1 bg-[var(--step-color)]"
                    style={
                      index === t.howWeWork.steps.length - 1
                        ? { display: 'none' }
                        : undefined
                    }
                  />
                  <button
                    type="button"
                    ref={(element) => {
                      stepButtons.current[index] = element;
                    }}
                    aria-label={`${step.num}: ${step.title}`}
                    aria-expanded={activeStep === index}
                    aria-controls="workflow-step-details"
                    onClick={() =>
                      setActiveStep(activeStep === index ? null : index)
                    }
                    className={`workflow-circle group relative flex h-22 w-22 shrink-0 cursor-pointer items-center justify-center rounded-full border-[6px] border-[var(--step-color)] bg-white p-1.5 transition-[transform,box-shadow] duration-300 hover:shadow-[0_8px_30px_color-mix(in_srgb,var(--step-color)_35%,transparent)] motion-safe:hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--step-color)] motion-reduce:transition-none xl:h-28 xl:w-28 dark:bg-slate-900 ${activeStep === index ? 'ring-4 ring-[var(--step-color)]/20 shadow-lg' : ''}`}
                  >
                    <div className="flex h-full w-full items-center justify-center rounded-full border border-slate-200 bg-slate-50 shadow-inner dark:border-slate-700 dark:bg-slate-800">
                      <Icon
                        aria-hidden="true"
                        className="h-8 w-8 text-[var(--step-color)] transition-transform duration-300 motion-safe:group-hover:-rotate-12 motion-reduce:transition-none xl:h-10 xl:w-10"
                        strokeWidth={1.6}
                      />
                    </div>
                  </button>
                  <div className="workflow-copy min-w-0 space-y-2 xl:px-3 xl:text-center">
                    <h3 className={`text-sm font-bold ${text}`}>
                      <span className="mr-2 text-[10px] tabular-nums opacity-75">
                        {step.num}
                      </span>
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
          <div
            id="workflow-step-details"
            hidden={!selectedStep}
            aria-live="polite"
          >
            {selectedStep && selectedStyle && (
              <div
                onKeyDown={(event) => {
                  if (event.key === 'Escape') closeDetails();
                }}
                style={
                  { '--step-color': selectedStyle.color } as React.CSSProperties
                }
                className="relative overflow-hidden rounded-2xl border border-slate-200 border-l-4 border-l-[var(--step-color)] bg-white p-6 sm:p-8 dark:border-slate-800 dark:border-l-[var(--step-color)] dark:bg-slate-900"
              >
                <button
                  type="button"
                  onClick={closeDetails}
                  aria-label={t.howWeWork.closeDetails}
                  className="absolute right-3 top-3 rounded-full p-2 text-slate-500 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-blue-500 dark:text-slate-400 dark:hover:bg-slate-800"
                >
                  <X aria-hidden="true" className="h-4 w-4" />
                </button>
                <div className="flex flex-col items-start gap-4 sm:flex-row">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-800">
                    <selectedStyle.Icon
                      aria-hidden="true"
                      className="h-6 w-6 text-[var(--step-color)]"
                    />
                  </div>
                  <div className="min-w-0 max-w-3xl space-y-2 sm:pr-7">
                    <p
                      className={`text-xs font-semibold ${selectedStyle.text}`}
                    >
                      {t.howWeWork.detailLabel} · {selectedStep.num}
                    </p>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {selectedStep.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {selectedStep.detail}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
