import React from 'react';
import { SITE_NAME } from '@/config/site';
import logoUrl from '@/assets/logo/tosdevelop-logo.png';

interface BrandLogoProps {
  className?: string;
  compact?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  compact = false,
}) => {
  return (
    <div
      className={`inline-flex shrink-0 items-center px-2 py-1.5 ${className}`}
    >
      {/* Frame the artwork inside the original 1254px square without altering the asset. */}
      <svg
        viewBox="76 493 1087 237"
        width="1087"
        height="237"
        role="img"
        aria-label={SITE_NAME}
        focusable="false"
        className={`block h-auto overflow-hidden dark:brightness-0 dark:invert ${compact ? 'w-28 min-[375px]:w-36 sm:w-44' : 'w-56 sm:w-72'}`}
      >
        <image href={logoUrl} width="1254" height="1254" />
      </svg>
    </div>
  );
};
