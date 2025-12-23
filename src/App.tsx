import { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { translations } from './i18n/translations';

export default function App() {
  const [language, setLanguage] = useState<'zh' | 'en'>('zh');
  const t = translations[language];

  // Background images from Unsplash
  const heroBackground = 'assets/images/heroBackground.jpeg';
  const experienceImage = 'assets/images/experienceImage.jpeg';
  const ctaBackground = 'assets/images/ctaBackground.jpg';

  return (
    <div className="min-h-screen bg-white">
      <HeroSection 
        backgroundImage={heroBackground} 
        translations={t} 
        currentLanguage={language}
        onLanguageChange={setLanguage}
      />
      <FeaturesSection translations={t} />
      <ExperienceSection experienceImage={experienceImage} translations={t} />
      <CTASection backgroundImage={ctaBackground} translations={t} />
      <Footer translations={t} />
    </div>
  );
}
