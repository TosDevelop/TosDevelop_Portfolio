import type { Language } from '@/types/index';
import { en } from './en';
import { km } from './km';

export type Translations = typeof en;

export const TRANSLATIONS: Record<Language, Translations> = { en, km };
