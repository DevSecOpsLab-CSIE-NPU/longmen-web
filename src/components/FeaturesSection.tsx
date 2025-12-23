import { Headphones, MapPin, BookOpen } from 'lucide-react';
import { translations } from '../i18n/translations';

interface FeaturesSectionProps {
  translations: typeof translations.zh;
}

export function FeaturesSection({ translations: t }: FeaturesSectionProps) {
  const features = [
    {
      icon: Headphones,
      title: t.feature1Title,
      subtitle: t.feature1Subtitle,
      description: t.feature1Description,
      highlight: t.feature1Highlight,
      color: 'bg-[#5C6F3E]',
    },
    {
      icon: MapPin,
      title: t.feature2Title,
      subtitle: t.feature2Subtitle,
      description: t.feature2Description,
      highlight: t.feature2Highlight,
      color: 'bg-[#8B7355]',
    },
    {
      icon: BookOpen,
      title: t.feature3Title,
      subtitle: t.feature3Subtitle,
      description: t.feature3Description,
      highlight: t.feature3Highlight,
      color: 'bg-[#6B7C5A]',
    },
  ];

  return (
    <section className="py-20 bg-[#F5F1E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-[#3A4A2A] mb-4">
            {t.featuresTitle}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
              >
                <div className={`${feature.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl text-[#3A4A2A] mb-3 font-semibold">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#5C6F3E] mb-4 font-medium">
                  {feature.subtitle}
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {feature.description}
                </p>
                <p className="text-sm text-[#5C6F3E] font-medium">
                  → {feature.highlight}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
