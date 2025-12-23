import { translations } from '../i18n/translations';

interface ExperienceSectionProps {
  experienceImage: string;
  translations: typeof translations.zh;
}

export function ExperienceSection({ experienceImage, translations: t }: ExperienceSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={experienceImage}
                alt={t.experienceAlt}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              
              {/* Floating UI Element */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#5C6F3E] rounded-lg flex items-center justify-center">
                    <div className="w-0 h-0 border-l-8 border-l-white border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-[#5C6F3E] mb-1">{t.playingText}</div>
                  </div>
                  <div className="text-xs text-gray-500">03:42</div>
                </div>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-[#5C6F3E]/10 rounded-2xl" />
          </div>

          {/* Content Column */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl text-[#3A4A2A]">
              {t.experienceTitle}
            </h2>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#5C6F3E] rounded-full flex items-center justify-center text-white">
                  ✓
                </div>
                <div>
                  <h4 className="text-[#3A4A2A] mb-2">
                    {t.experiencePoint1Title}
                  </h4>
                  <p className="text-gray-600">
                    {t.experiencePoint1Description}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#5C6F3E] rounded-full flex items-center justify-center text-white">
                  ✓
                </div>
                <div>
                  <h4 className="text-[#3A4A2A] mb-2">
                    {t.experiencePoint2Title}
                  </h4>
                  <p className="text-gray-600">
                    {t.experiencePoint2Description}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#5C6F3E] rounded-full flex items-center justify-center text-white">
                  ✓
                </div>
                <div>
                  <h4 className="text-[#3A4A2A] mb-2">
                    {t.experiencePoint3Title}
                  </h4>
                  <p className="text-gray-600">
                    {t.experiencePoint3Description}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="inline-flex items-center gap-2 bg-[#F5F1E8] px-6 py-3 rounded-full">
                <span className="text-[#5C6F3E]">🎧</span>
                <span className="text-sm text-[#3A4A2A]">建議攜帶耳機以獲得最佳體驗</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
