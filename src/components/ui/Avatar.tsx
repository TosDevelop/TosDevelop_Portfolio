import React, { useState } from 'react';

interface AvatarProps {
  src: string;
  alt: string;
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  className?: string;
  genderHint?: 'male' | 'female';
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  name,
  size = 'md',
  className = '',
}) => {
  const [imageError, setImageError] = useState(false);

  const getInitials = (fullName: string) => {
    return fullName
      .split(' ')
      .map((part) => part[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();
  };

  const sizeClasses = {
    sm: 'w-10 h-10 text-xs',
    md: 'w-16 h-16 text-sm',
    lg: 'w-24 h-24 text-lg',
    xl: 'w-36 h-44 text-2xl', // Portrait aspect ratio standard for student team cards
    hero: 'w-full h-full text-xl',
  };

  // Color gradient based on name hash for consistent pleasing fallback
  const getGradientByName = (str: string) => {
    const gradients = [
      'from-blue-600 to-indigo-800',
      'from-sky-600 to-blue-800',
      'from-indigo-600 to-violet-800',
      'from-cyan-600 to-blue-700',
      'from-slate-700 to-slate-900',
      'from-blue-500 to-slate-800',
      'from-teal-600 to-cyan-800',
    ];
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % gradients.length;
    return gradients[index];
  };

  return (
    <div
      className={`relative overflow-hidden bg-slate-200 dark:bg-slate-800 flex items-center justify-center select-none ${
        sizeClasses[size]
      } ${className}`}
    >
      {!imageError && src ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
          onError={() => setImageError(true)}
        />
      ) : (
        <div
          className={`w-full h-full bg-gradient-to-br ${getGradientByName(
            name,
          )} flex flex-col items-center justify-center text-white relative p-2 text-center`}
        >
          {/* Subtle passport badge / collar silhouette overlay */}
          <svg
            className="w-12 h-12 text-white/30 mb-1"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
          <span className="font-bold tracking-wider">{getInitials(name)}</span>
          <span className="text-[10px] text-white/70 line-clamp-1 truncate max-w-full">
            {name.split(' ')[0]}
          </span>
        </div>
      )}
    </div>
  );
};
