interface ExperienceSectionProps {
  experienceImage: string;
}

export function ExperienceSection({ experienceImage }: ExperienceSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={experienceImage}
                alt="使用者體驗語音導覽"
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
                    <div className="text-sm text-[#5C6F3E] mb-1">正在播放：57砲堡介紹</div>
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
              沉浸式的探索體驗
            </h2>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#5C6F3E] rounded-full flex items-center justify-center text-white">
                  ✓
                </div>
                <div>
                  <h4 className="text-[#3A4A2A] mb-2">
                    降低閱讀負擔，提升歷史理解效率
                  </h4>
                  <p className="text-gray-600">
                    考量龍門閉鎖陣地坑道空間狹窄、光線昏暗之環境特性，語音導覽系統有效取代傳統說明牌閱讀方式，透過結構化且口語化的專業解說，使參觀者能在不中斷動線的情況下，清楚理解各導覽點之歷史背景與軍事意涵。
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#5C6F3E] rounded-full flex items-center justify-center text-white">
                  ✓
                </div>
                <div>
                  <h4 className="text-[#3A4A2A] mb-2">
                    強化自主性，提升參觀動線與節奏掌控
                  </h4>
                  <p className="text-gray-600">
                    語音導覽支援使用者依自身參觀需求自由操作，可隨時暫停、重播或依位置播放內容，避免團體導覽造成之等待與壅塞情形，提升參觀流程之流暢度與個人化體驗品質。
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#5C6F3E] rounded-full flex items-center justify-center text-white">
                  ✓
                </div>
                <div>
                  <h4 className="text-[#3A4A2A] mb-2">
                    結合場域空間，深化歷史情境體驗
                  </h4>
                  <p className="text-gray-600">
                    透過語音敘事與實際場域同步呈現，使歷史事件、軍事設施功能與駐防生活得以在原有空間中被具體理解，強化參觀者對戰地遺址之臨場感受，促進對龍門閉鎖陣地歷史脈絡與文化價值之整體認識。
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
