# 龍門應用程式網站

這是龍門應用程式的登陸頁面專案。原始設計可在此查看：https://www.figma.com/design/BMJPYdHb8DnmNzV5Pdv1XX/Landing-Page-Design

## 專案簡介

本專案為龍門應用程式的官方網站，提供應用程式的功能介紹、使用者評價、以及下載連結等資訊。網站採用現代化的響應式設計，支援多語言切換（繁體中文/英文）。

## 技術架構

- **框架**: React + TypeScript
- **建置工具**: Vite
- **UI 元件**: shadcn/ui
- **樣式**: Tailwind CSS
- **國際化**: 內建多語言支援

## 安裝與執行

### 安裝相依套件

```bash
npm i
```

### 啟動開發伺服器

```bash
npm run dev
```

開發伺服器將會在 `http://localhost:5173` 啟動。

### 建置正式版本

```bash
npm run build
```

建置完成的檔案將會輸出至 `dist` 資料夾。

### 預覽正式版本

```bash
npm run preview
```

## 專案結構

```
src/
├── components/          # React 元件
│   ├── ui/             # 基礎 UI 元件（shadcn/ui）
│   ├── CTASection.tsx   # 行動呼籲區塊
│   ├── ExperienceSection.tsx  # 體驗介紹區塊
│   ├── FeaturesSection.tsx    # 功能特色區塊
│   ├── Footer.tsx       # 頁尾
│   ├── HeroSection.tsx  # 首頁主視覺
│   ├── LanguageSwitcher.tsx  # 語言切換器
│   └── ReviewsSection.tsx    # 使用者評價區塊
├── i18n/               # 國際化翻譯檔
├── styles/             # 全域樣式
└── App.tsx             # 主要應用程式元件
```

## 授權條款

本專案採用開源授權，詳細資訊請參閱 LICENSE 檔案。

## 貢獻指南

歡迎提交 Issue 或 Pull Request 來協助改善本專案。

## 聯絡資訊

如有任何問題或建議，請透過 GitHub Issues 與我們聯繫。
