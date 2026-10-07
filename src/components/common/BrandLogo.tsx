import React from 'react';

interface BrandLogoProps {
  className?: string;
  compact?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', compact = false }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative flex items-center justify-center shrink-0 rounded-2xl bg-gradient-to-br from-[#1d7ef8] via-[#3f64f5] to-[#5a38f6] shadow-[0_0_18px_rgba(70,104,255,0.35)]">
        <span
          className={`relative font-black tracking-[-0.1em] text-white ${
            compact ? 'text-[1.15rem] leading-none h-8 w-8' : 'text-[1.75rem] leading-none h-11 w-11'
          } flex items-center justify-center`}
        >
          TD
        </span>
      </div>

      <span
        className={
          compact
            ? 'ml-2 text-lg font-black tracking-[-0.08em] bg-gradient-to-r from-[#2a83ff] via-[#4d72f5] to-[#5f39ff] bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(79,106,255,0.25)]'
            : 'ml-3 text-[2rem] sm:text-[2.4rem] font-black tracking-[-0.08em] bg-gradient-to-r from-[#2a83ff] via-[#4d72f5] to-[#5f39ff] bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(79,106,255,0.25)]'
        }
      >
        TosDevelop
      </span>
    </div>
  );
};
