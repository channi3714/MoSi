import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // MoSi 브랜드 컬러 (에브리타임 스타일 레드 계열)
        primary: "#c62917",
        "primary-dark": "#a82010",
        "primary-light": "#e8453a",
        // 배경 및 텍스트
        "bg-main": "#f2f2f2",
        "bg-white": "#ffffff",
        "text-primary": "#333333",
        "text-secondary": "#666666",
        "text-muted": "#999999",
        // 보더 및 구분선
        "border-light": "#e8e8e8",
        "border-dark": "#d0d0d0",
      },
    },
  },
  plugins: [],
};
export default config;
