import React, { useRef, useState } from 'react';
import { SITE_NAME } from '@/config/site';
import { TEAM_MEMBERS } from '@/data/team';
import { useLanguage } from '@/providers/LanguageContext';
import { Avatar } from '@/components/ui/Avatar';
import { PageLink } from '@/components/ui/PageLink';
import { isEmailConfigured, sendContactEmail } from '@/services/contactEmail';
import { notifyTelegram } from '@/services/contactTelegram';
import { Mail, MapPin, Send, Info, Users, CheckCircle2, X } from 'lucide-react';

const generalContactEmail = 'tosdevelop2026@gmail.com';
const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '',
  templateId:
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
    import.meta.env.VITE_EMAILJS_TEMPLATE ||
    '',
};
const emailReady = isEmailConfigured(emailConfig);

interface ContactPageProps {
  onSelectMember: (memberId: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onSelectMember }) => {
  const { language, t } = useLanguage();

  const [selectedRecipient, setSelectedRecipient] = useState('team');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle');
  const sending = useRef(false);
  const recipient = TEAM_MEMBERS.find(
    (member) => member.id === selectedRecipient,
  );
  const targetEmail = recipient?.contact.email || generalContactEmail;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending.current || !emailReady) return;
    sending.current = true;
    setStatus('sending');
    try {
      await sendContactEmail(emailConfig, {
        to_email: targetEmail,
        to_name: recipient?.name ?? SITE_NAME,
        full_name: fullName.trim(),
        email: email.trim(),
        subject: subject.trim(),
        message: message.trim(),
      });
      setStatus('success');
      setSubject('');
      setMessage('');
      await notifyTelegram({
        recipientId: selectedRecipient,
        fullName: fullName.trim(),
        email: email.trim(),
        subject: subject.trim(),
        message: message.trim(),
      });
    } catch {
      setStatus('error');
    } finally {
      sending.current = false;
    }
  };

  return (
    <div className="py-10 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-950/60 border border-blue-200/70 dark:border-blue-800 text-xs font-semibold text-blue-700 dark:text-blue-300">
          <span>{t.contact.kicker}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
          {t.contact.title}
        </h1>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {t.contact.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column (5 cols): General Contact & Direct Member List */}
        <div className="lg:col-span-5 space-y-6">
          {/* General Team Info Card */}
          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-bold text-slate-900 dark:text-white">
                  {t.contact.teamTitle}
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {t.contact.teamDesc}
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-2 text-xs border-t border-slate-100 dark:border-slate-800">
              <div>
                <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400 block mb-0.5">
                  {t.contact.generalContact}
                </span>
                <a
                  href={`mailto:${generalContactEmail}`}
                  className="font-medium text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span className="break-all">{generalContactEmail}</span>
                </a>
                <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                  {t.contact.generalContactNote}
                </p>
              </div>

              <div>
                <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400 block mb-0.5">
                  {t.contact.location}
                </span>
                <div className="font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-red-500" />
                  <span>{t.contact.locationVal}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact a specific member list */}
          <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs space-y-4">
            <h2 className="text-sm font-bold tracking-tight text-slate-900 dark:text-white uppercase">
              {t.contact.contactSpecific}
            </h2>

            <div className="space-y-2 max-h-[360px] overflow-y-auto pr-1">
              {TEAM_MEMBERS.map((member) => (
                <PageLink
                  key={member.id}
                  tab="team"
                  memberId={member.id}
                  onClick={() => onSelectMember(member.id)}
                  className="flex items-center justify-between p-2.5 rounded-xl border transition-all cursor-pointer border-slate-100 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50/50 dark:bg-slate-800/30"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Avatar
                      src={member.image}
                      alt={member.name}
                      name={member.name}
                      size="sm"
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-slate-900 dark:text-white truncate">
                        {language === 'km' ? member.nameKm : member.name}
                      </p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                        {language === 'km' ? member.roleKm : member.role}
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] text-blue-600 dark:text-blue-400 font-semibold flex-shrink-0 ml-2">
                    {t.team.viewProfile}
                  </span>
                </PageLink>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (7 cols): Message Draft Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs space-y-6">
            <div className="space-y-1">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                {t.contact.sendMessage}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {t.contact.formNote}
              </p>
            </div>

            {status === 'success' && (
              <div
                role="status"
                aria-live="polite"
                aria-atomic="true"
                className="relative flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 pr-12 text-emerald-950 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-100"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/60 dark:text-emerald-400">
                  <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0 space-y-1">
                  <h3 className="text-sm font-semibold">
                    {t.contact.sentNotice}
                  </h3>
                  <p className="text-xs leading-relaxed text-emerald-800 dark:text-emerald-200">
                    {t.contact.sentTo}{' '}
                    <strong>
                      {recipient
                        ? language === 'km'
                          ? recipient.nameKm
                          : recipient.name
                        : SITE_NAME}
                    </strong>
                    .
                  </p>
                  <p className="break-words text-xs leading-relaxed text-emerald-800 dark:text-emerald-200">
                    {t.contact.replyNotice}{' '}
                    <span className="font-medium break-all">
                      {email.trim()}
                    </span>
                    .
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  aria-label={t.contact.dismissNotice}
                  className="absolute right-2 top-2 rounded-lg p-2 text-emerald-700 hover:bg-emerald-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:text-emerald-300 dark:hover:bg-emerald-900"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            )}

            {(!emailReady || status === 'error') && (
              <div
                role={status === 'error' ? 'alert' : 'status'}
                className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-300 text-xs flex items-center gap-2"
              >
                <Info className="w-4 h-4 flex-shrink-0" />
                <span>
                  {!emailReady
                    ? t.contact.emailUnavailable
                    : t.contact.sendError}
                </span>
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              aria-busy={status === 'sending'}
              onChange={() => {
                if (status !== 'sending') setStatus('idle');
              }}
            >
              <fieldset
                disabled={status === 'sending'}
                className="space-y-4 disabled:opacity-70"
              >
                <div>
                  <label
                    htmlFor="contact-recipient"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
                  >
                    {t.contact.recipient}
                  </label>
                  <select
                    id="contact-recipient"
                    value={selectedRecipient}
                    onChange={(e) => {
                      setSelectedRecipient(e.target.value);
                      setStatus('idle');
                    }}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="team">
                      {t.contact.teamRecipient} — {SITE_NAME}
                    </option>
                    {TEAM_MEMBERS.map((member) => (
                      <option key={member.id} value={member.id}>
                        {language === 'km' ? member.nameKm : member.name}
                      </option>
                    ))}
                  </select>
                  <a
                    href={`mailto:${targetEmail}`}
                    className="mt-2 inline-block break-all text-xs text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {targetEmail}
                  </a>
                </div>
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
                  >
                    {t.contact.fullName}
                  </label>
                  <input
                    type="text"
                    required
                    autoComplete="name"
                    id="contact-name"
                    maxLength={120}
                    name="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder={t.contact.namePlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
                  >
                    {t.contact.email}
                  </label>
                  <input
                    type="email"
                    required
                    autoComplete="email"
                    id="contact-email"
                    maxLength={254}
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
                  >
                    {t.contact.subject}
                  </label>
                  <input
                    type="text"
                    required
                    id="contact-subject"
                    maxLength={200}
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder={t.contact.subjectPlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
                  >
                    {t.contact.message}
                  </label>
                  <textarea
                    rows={5}
                    required
                    id="contact-message"
                    maxLength={10000}
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t.contact.promptText}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={!emailReady || status === 'sending'}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-lg bg-blue-600 hover:bg-blue-700 active:scale-98 text-white text-xs font-semibold shadow-md shadow-blue-500/20 transition-all cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span aria-live="polite">
                    {status === 'sending'
                      ? t.contact.sending
                      : t.contact.sendEmailBtn}
                  </span>
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
