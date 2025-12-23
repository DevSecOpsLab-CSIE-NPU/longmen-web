import { Apple, Download } from 'lucide-react';
import { Button } from './ui/button';

interface HeroSectionProps {
  backgroundImage: string;
}

export function HeroSection({ backgroundImage }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="龍門閉鎖陣地"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text & CTA */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold">
                沉浸式語音導覽<br />
                探索龍門閉鎖陣地
              </h1>
              <p className="text-lg md:text-xl text-gray-200">
                下載 App，即可邊走邊聽，深入了解歷史故事
              </p>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-black hover:bg-gray-900 text-white px-8 py-6 gap-3"
              >
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs opacity-90">下載於</div>
                  <div>App Store</div>
                </div>
              </Button>
              <Button 
                size="lg" 
                className="bg-[#5C6F3E] hover:bg-[#4A5A32] text-white px-8 py-6 gap-3"
              >
                <Download className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs opacity-90">下載於</div>
                  <div>Google Play</div>
                </div>
              </Button>
            </div>

            {/* App Screenshot */}
            <div className="flex items-center gap-6 pt-4">
              <div className="relative">
                <div className="relative w-20 md:w-24 bg-gray-900 rounded-[1.5rem] md:rounded-[2rem] p-2 shadow-xl">
                  <div className="bg-white rounded-[1rem] md:rounded-[1.5rem] overflow-hidden">
                    <img 
                      src="/assets/images/app_entry.png" 
                      alt="龍門閉鎖陣地語音導覽 App"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Empty now, can be used for other content */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#5C6F3E]/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#8B7355]/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
