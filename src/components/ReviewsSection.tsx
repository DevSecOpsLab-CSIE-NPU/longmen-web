import { Star } from 'lucide-react';

export function ReviewsSection() {
  const reviews = [
    {
      name: '王小明',
      role: '歷史愛好者',
      rating: 5,
      text: '語音導覽做得非常專業！走在坑道裡聽著解說，真的有種穿越時空的感覺。強烈推薦給所有想深入了解龍門閉鎖陣地的朋友。',
      avatar: '👨',
    },
    {
      name: '陳美麗',
      role: '國中老師',
      text: '帶學生來校外教學時使用，學生們都很投入。比起傳統導覽，他們更願意主動聆聽，學習效果非常好！',
      avatar: '👩',
    },
    {
      name: '林大衛',
      role: '攝影師',
      text: '終於可以邊拍照邊了解歷史了！不用一直低頭看說明牌，讓我能專注在取景和拍攝上，同時也學到很多知識。',
      avatar: '👨‍💼',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#F5F1E8] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* App Store Rating */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white rounded-2xl px-8 py-4 shadow-lg mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-left">
              <div className="text-2xl text-[#3A4A2A]">5.0</div>
              <div className="text-xs text-gray-500">App Store 評分</div>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl text-[#3A4A2A] mb-4">
            使用者真實評價
          </h2>
          <p className="text-lg text-gray-600">
            超過 1,000+ 位遊客的五星推薦
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Avatar and Info */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#5C6F3E]/10 rounded-full flex items-center justify-center text-2xl">
                  {review.avatar}
                </div>
                <div>
                  <div className="text-[#3A4A2A]">{review.name}</div>
                  <div className="text-xs text-gray-500">{review.role}</div>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-600 leading-relaxed">
                {review.text}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '1,000+', label: '活躍用戶' },
            { number: '15+', label: '導覽站點' },
            { number: '5.0', label: 'App評分' },
            { number: '98%', label: '推薦率' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl text-[#5C6F3E] mb-2">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
