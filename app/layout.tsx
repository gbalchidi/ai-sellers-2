import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI-агент для селлеров маркетплейсов | Управление маржинальностью рекламы",
  description: "Увеличьте прибыль на 15-25% за счет оптимизации рекламы на маркетплейсах. AI-платформа для расчета реальной маржи по каждой фразе. От 990₽/мес.",
  keywords: "селлер маркетплейс, реклама wildberries, реклама ozon, маржинальность, ДРР, юнит экономика, аналитика маркетплейсов",
  openGraph: {
    title: "Управляйте маржинальностью 500+ SKU из одного окна",
    description: "AI-платформа для селлеров, которые считают деньги, а не надеются на удачу",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
