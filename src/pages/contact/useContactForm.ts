import { useRef, useState, type FormEvent } from 'react';
import { SITE_NAME, TEAM_CONTACT } from '@/config/site';
import { TEAM_MEMBERS } from '@/data/team';
import { isEmailConfigured, sendContactEmail } from '@/services/contactEmail';
import { notifyTelegram } from '@/services/contactTelegram';

const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '',
  templateId:
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
    import.meta.env.VITE_EMAILJS_TEMPLATE ||
    '',
};
const emailReady = isEmailConfigured(emailConfig);

export function useContactForm() {
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
  const targetEmail = recipient?.contact.email || TEAM_CONTACT.email;

  const handleSubmit = async (e: FormEvent) => {
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

  return {
    selectedRecipient,
    setSelectedRecipient,
    fullName,
    setFullName,
    email,
    setEmail,
    subject,
    setSubject,
    message,
    setMessage,
    status,
    setStatus,
    recipient,
    targetEmail,
    emailReady,
    handleSubmit,
  };
}
