import React, { useState } from 'react';
import { TEAM_MEMBERS } from '../../data/teamData';
import { useLanguage } from '../../context/LanguageContext';
import { Avatar } from '../common/Avatar';
import { Mail, MapPin, Send, CheckCircle2, Users } from 'lucide-react';

interface ContactPageProps {
  onSelectMember: (memberId: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onSelectMember }) => {
  const { language, t } = useLanguage();

  const [selectedRecipient, setSelectedRecipient] = useState<string>('team');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Determine target recipient email
    let targetEmail = 'phornya26@gmail.com';
    if (selectedRecipient !== 'team') {
      const member = TEAM_MEMBERS.find(m => m.id === selectedRecipient);
      if (member?.contact.email) {
        targetEmail = member.contact.email;
      }
    }

    const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(
      subject || 'Inquiry from KromDev Portfolio'
    )}&body=${encodeURIComponent(
      `From: ${fullName} (${email})\n\n${message}`
    )}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
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
                  href="mailto:phornya26@gmail.com"
                  className="font-medium text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>phornya26@gmail.com</span>
                </a>
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
              {TEAM_MEMBERS.map(member => (
                <div
                  key={member.id}
                  onClick={() => {
                    setSelectedRecipient(member.id);
                    setSubject(`Inquiry for ${member.name}`);
                  }}
                  className={`flex items-center justify-between p-2.5 rounded-xl border transition-all cursor-pointer ${
                    selectedRecipient === member.id
                      ? 'border-blue-500 bg-blue-50/60 dark:bg-blue-950/40 ring-1 ring-blue-500'
                      : 'border-slate-100 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50/50 dark:bg-slate-800/30'
                  }`}
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
                        {member.contact.email}
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] text-blue-600 dark:text-blue-400 font-semibold flex-shrink-0 ml-2">
                    {selectedRecipient === member.id ? 'Selected' : 'Direct'}
                  </span>
                </div>
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

            {submitted && (
              <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>Default mail client opened. Thank you for connecting!</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {t.contact.fullName}
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={e => setFullName(e.target.value)}
                  placeholder="e.g. Sok Piseth"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {t.contact.email}
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {t.contact.subject}
                </label>
                <input
                  type="text"
                  required
                  value={subject}
                  onChange={e => setSubject(e.target.value)}
                  placeholder="Internship / Project Collaboration / Inquiry"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {t.contact.message}
                </label>
                <textarea
                  rows={5}
                  required
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder={t.contact.promptText}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-lg bg-blue-600 hover:bg-blue-700 active:scale-98 text-white text-xs font-semibold shadow-md shadow-blue-500/20 transition-all cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{t.contact.openEmailBtn}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
