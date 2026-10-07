import type { PropsWithChildren } from 'react';
import { LanguageProvider } from '@/providers/LanguageContext';
import { ThemeProvider } from '@/providers/ThemeContext';

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <ThemeProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
}
