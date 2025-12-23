import React from 'react';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  currentLanguage: 'zh' | 'en';
  onLanguageChange: (language: 'zh' | 'en') => void;
  isFixed?: boolean;
}

export function LanguageSwitcher({ currentLanguage, onLanguageChange, isFixed = false }: LanguageSwitcherProps) {
  const positionClass = isFixed ? 'fixed top-6 right-6 z-50' : '';
  
  return (
    <div className={positionClass}>
      <div className="flex items-center gap-2 bg-white rounded-full shadow-lg p-1">
        <button
          onClick={() => onLanguageChange('zh')}
          className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
            currentLanguage === 'zh'
              ? 'bg-[#3A4A2A] text-white'
              : 'text-[#3A4A2A] hover:bg-gray-100'
          }`}
        >
          中文
        </button>
        <button
          onClick={() => onLanguageChange('en')}
          className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
            currentLanguage === 'en'
              ? 'bg-[#3A4A2A] text-white'
              : 'text-[#3A4A2A] hover:bg-gray-100'
          }`}
        >
          English
        </button>
      </div>
    </div>
  );
}
