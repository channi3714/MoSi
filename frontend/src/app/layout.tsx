import type { Metadata } from "next";
import "./globals.css";

// MoSi 앱의 메타데이터 (브라우저 탭 제목, 검색엔진 설명 등)
export const metadata: Metadata = {
  title: "MoSi - 모든 시간",
  description: "한국 내 유학생들을 위한 대학생 커뮤니티 서비스",
};

// 루트 레이아웃: 모든 페이지를 감싸는 최상위 컴포넌트
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
