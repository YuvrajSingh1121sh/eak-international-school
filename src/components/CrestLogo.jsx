import React from 'react';
import { Link } from 'react-router-dom';

export default function CrestLogo({ variant = 'dark', showTagline = true, size = 'default' }) {
  // variant: 'dark' (for light backgrounds) | 'light' (for dark/forest backgrounds)
  const isLight = variant === 'light';
  const isLarge = size === 'large';

  return (
    <Link 
      to="/" 
      className="group flex items-center gap-2.5 sm:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A568] rounded-lg p-0.5 sm:p-1 transition-all shrink-0"
      aria-label="EAK International School - Return to Homepage"
    >
      {/* SVG Shield Crest */}
      <div className={`relative shrink-0 flex items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-102 shadow-xs ${
        isLarge ? 'w-12 h-12' : 'w-9 h-9 sm:w-10 sm:h-10'
      } ${isLight ? 'bg-[#173F35] border border-[#C5A568]/50' : 'bg-[#173F35] border border-[#C5A568]/60'}`}>
        <svg viewBox="0 0 100 100" className={isLarge ? "w-7 h-7" : "w-6 h-6 sm:w-7 sm:h-7"} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 8L86 22V52C86 72 70 88 50 94C30 88 14 72 14 52V22L50 8Z" fill="#173F35" stroke="#C5A568" strokeWidth="4" strokeLinejoin="round"/>
          <path d="M50 14L80 26V51C80 67 67 82 50 87C33 82 20 67 20 51V26L50 14Z" fill="#0E2822" stroke="#C5A568" strokeWidth="1.5" strokeOpacity="0.6"/>
          <polygon points="50,22 52.5,28.5 59.5,29 54,33.5 56,40.5 50,36.5 44,40.5 46,33.5 40.5,29 47.5,28.5" fill="#C5A568"/>
          <path d="M30 62C36 59 44 59 50 62C56 59 64 59 70 62V46C64 43 56 43 50 46C44 43 36 43 30 46V62Z" fill="#F7F5EF" stroke="#C5A568" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="50" y1="46" x2="50" y2="62" stroke="#173F35" strokeWidth="2"/>
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col text-left">
        <span className={`font-bold tracking-tight leading-none whitespace-nowrap ${
          isLarge ? 'text-xl' : 'text-[15px] sm:text-[17px]'
        } ${isLight ? 'text-[#FAF9F5]' : 'text-[#173F35]'}`}>
          EAK <span className="text-[#C5A568] font-semibold">International School</span>
        </span>
        <div className="flex items-center gap-1.5 mt-1">
          <span className={`text-[10.5px] sm:text-[11px] font-medium tracking-wide whitespace-nowrap ${
            isLight ? 'text-[#DFC48E]' : 'text-[#5C6761]'
          }`}>
            K–12 World School &bull; Est. 1998
          </span>
          {showTagline && (
            <span className={`hidden ${isLarge ? 'sm:inline' : '2xl:inline'} text-[11px] font-normal whitespace-nowrap ${
              isLight ? 'text-[#FAF9F5]/70' : 'text-[#5C6761]'
            }`}>
              &bull; Where Curiosity Becomes Excellence
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
