export function Footer() {
  return (
    <footer className="bg-[#3A4A2A] text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 text-sm">
          {/* Organization Info */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <div>
              <span className="text-white font-medium">主辦單位：</span>
              <span>澎湖縣政府</span>
            </div>
            <div>
              <span className="text-white font-medium">承辦單位：</span>
              <span>澎湖縣政府旅遊處</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <div>
              <span className="text-white font-medium">諮詢專線：</span>
              <span>0905-676-113、06-9274400#506</span>
            </div>
            <div>
              <span className="text-white font-medium">LINE@：</span>
              <span>@902rgwdi</span>
            </div>
            <div>
              <span className="text-white font-medium">諮詢時間：</span>
              <span>9:00~17:00 (4月-9月)；8:00~12:00 (10月-3月)</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-4 border-t border-gray-600">
            <div className="text-center text-gray-400">
              澎湖縣政府旅遊處 版權所有 © Tourism Department, MOEA 109
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
