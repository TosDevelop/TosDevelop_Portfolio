import React, { useId } from 'react';
import { SITE_NAME } from '@/config/site';
import logoUrl from '@/assets/logo/tosdevelop-logo.png';
import darkLogoUrl from '@/assets/logo/tosdevelop-logo-dark.png';

interface BrandLogoProps {
  className?: string;
  compact?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  compact = false,
}) => {
  const filterId = useId();
  return (
    <div
      className={`inline-flex shrink-0 items-center px-2 py-1.5 ${className}`}
    >
      {/* Frame the supplied artwork without changing the source images. */}
      <svg
        viewBox="152 152 1936 416"
        width="1936"
        height="416"
        role="img"
        aria-label={SITE_NAME}
        focusable="false"
        className={`block h-auto overflow-hidden ${compact ? 'w-28 min-[375px]:w-36 sm:w-44' : 'w-56 sm:w-72'}`}
      >
        <defs>
          {/* Make each solid backdrop transparent while retaining the artwork's RGB colors. */}
          <filter id={`${filterId}-light`} colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  -1 -1 -1 0 3"
            />
          </filter>
          <filter id={`${filterId}-dark`} colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  1 1 1 0 -0.290197"
            />
          </filter>
        </defs>
        <image
          href={logoUrl}
          width="2240"
          height="720"
          className="dark:hidden"
          filter={`url(#${filterId}-light)`}
        />
        <image
          href={darkLogoUrl}
          width="2240"
          height="720"
          className="hidden dark:block"
          filter={`url(#${filterId}-dark)`}
        />
      </svg>
    </div>
  );
};
