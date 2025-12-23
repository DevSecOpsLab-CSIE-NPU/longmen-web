import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

export default function App() {
  // Background images from Unsplash
  const heroBackground = 'assets/images/heroBackground.jpeg';
  const experienceImage = 'assets/images/experienceImage.jpeg';
  const ctaBackground = 'assets/images/ctaBackground.jpg';

  return (
    <div className="min-h-screen bg-white">
      <HeroSection backgroundImage={heroBackground} />
      <FeaturesSection />
      <ExperienceSection experienceImage={experienceImage} />
      <CTASection backgroundImage={ctaBackground} />
      <Footer />
    </div>
  );
}
