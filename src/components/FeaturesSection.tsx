import { Headphones, MapPin, BookOpen } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: Headphones,
      title: '① 行動更自由，沉浸感大幅提升',
      subtitle: '從「看文字」轉為「聽故事」的體驗轉換',
      description: '龍門閉鎖陣地坑道狹窄、光線昏暗，寬度僅約 80–140 公分，並不適合大量停留閱讀說明牌。語音導覽讓遊客不需低頭閱讀、也不必聚集等待解說，只要配戴耳機即可邊走邊聽，在安全與流暢動線下，完整感受地下要塞的壓迫感與戰地氛圍。',
      highlight: '解放雙手、專注場域、強化臨場感',
      color: 'bg-[#5C6F3E]',
    },
    {
      icon: MapPin,
      title: '② 內容「剛剛好出現」，探索更直覺',
      subtitle: '位置觸發，讓故事與空間同步發生',
      description: '本案導入 App 語音導覽與固定式智慧音響系統，能依據遊客所在位置，自動播放對應的歷史內容（如總機室、彈藥庫、57 砲堡等）。遊客不必思考「現在該聽哪一段」，而是走到哪、聽到哪，內容自然接續實際空間，避免漏聽或重複。',
      highlight: '減少操作負擔、提升探索流暢度',
      color: 'bg-[#8B7355]',
    },
    {
      icon: BookOpen,
      title: '③ 從「設施介紹」走向「完整歷史理解」',
      subtitle: '把軍事遺址，說成一段有脈絡的故事',
      description: '語音導覽內容並非僅描述單一設施，而是整合清代、日治、二戰末期到戰後國軍駐防的歷史脈絡，結合軍事戰略、建築工法與士兵生活細節。透過多語言、口語化、敘事式腳本，讓遊客理解：「為什麼要在這裡建陣地？」「這些空間在戰時如何運作？」「這座地下要塞在台灣防衛史中的意義是什麼？」',
      highlight: '由看見遺跡，進階到理解歷史',
      color: 'bg-[#6B7C5A]',
    },
  ];

  return (
    <section className="py-20 bg-[#F5F1E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-[#3A4A2A] mb-4">
            三大核心使用體驗增強效果
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
                  → 體驗升級重點：{feature.highlight}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
