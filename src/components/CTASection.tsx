import { Apple, Download } from 'lucide-react';
import { Button } from './ui/button';
import { translations } from '../i18n/translations';

interface CTASectionProps {
  backgroundImage: string;
  translations: typeof translations.zh;
}

export function CTASection({ backgroundImage, translations: t }: CTASectionProps) {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="龍門閉鎖陣地"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3A4A2A]/95 to-[#5C6F3E]/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl text-white mb-6">
          {t.ctaTitle.split('<br />').map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </h2>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
          {t.ctaDescription.split('<br />').map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </p>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-6 gap-3 shadow-xl"
            asChild
          >
            <a href={t.appStoreLink} target="_blank" rel="noopener noreferrer">
              <Apple className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs opacity-70">{t.downloadOnAppStore}</div>
                <div>{t.appStore}</div>
              </div>
            </a>
          </Button>
          <Button 
            size="lg" 
            className="bg-black hover:bg-gray-900 text-white px-8 py-6 gap-3 shadow-xl"
            asChild
          >
            <a href={t.googlePlayLink} target="_blank" rel="noopener noreferrer">
              <Download className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs opacity-90">{t.downloadOnAppStore}</div>
                <div>{t.googlePlay}</div>
              </div>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
