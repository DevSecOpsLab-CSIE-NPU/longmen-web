import { translations } from '../i18n/translations';

interface FooterProps {
  translations: typeof translations.zh;
}

export function Footer({ translations: t }: FooterProps) {
  return (
    <footer className="bg-[#3A4A2A] text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 text-sm text-center">
          {/* Organization Info */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 justify-center">
            <div>
              <span className="text-white font-medium">{t.organizerLabel}</span>
              <span>{t.organizer}</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-500 mx-2">　|　</span>
            </div>
            <div>
              <span className="text-white font-medium">{t.providerLabel}</span>
              <span>{t.provider}</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-500 mx-2">　|　</span>
            </div>
            <div>
              <span className="text-white font-medium">{t.developerLabel}</span>
              <a 
                href="https://devsecopslab-csie-npu.github.io/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors underline"
              >
                {t.developer}
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 justify-center">
            <div>
              <span className="text-white font-medium">{t.phoneLabel}</span>
              <span>{t.phone}</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-500 mx-2">　|　</span>
            </div>
            <div>
              <span className="text-white font-medium">{t.lineLabel}</span>
              <span>{t.line}</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-500 mx-2">　|　</span>
            </div>
            <div>
              <span className="text-white font-medium">{t.hoursLabel}</span>
              <span>{t.hours}</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-gray-600">
            <div className="text-gray-400">
              {t.copyright}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
