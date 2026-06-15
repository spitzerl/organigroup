import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";
import { KillSW } from "@/components/KillSW";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Organigroup - Planifiez simplement vos événements",
  description: "Fini les messages perdus. Une alternative Discord claire et conviviale pour organiser vos événements de groupe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${outfit.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{__html: `
          (function() {
            const theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
            if (theme === 'dark') {
              document.documentElement.classList.add('dark');
            } else {
              document.documentElement.classList.remove('dark');
            }
          })()
        `}} />
      </head>
      <body className="min-h-full flex flex-col relative">
        {/* Arrière-plan organique fixe avec effet glassmorphism profond */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none">
          {/* Blob jaune/miel en haut à gauche */}
          <div className="absolute top-[-15%] left-[-15%] h-[50vw] w-[50vw] min-h-[450px] min-w-[450px] max-h-[700px] max-w-[700px] rounded-full bg-[rgba(255,216,128,0.28)] dark:bg-[rgba(255,216,128,0.08)] blur-[80px] sm:blur-[130px]" />
          {/* Blob vert sauge en bas à droite */}
          <div className="absolute bottom-[-15%] right-[-15%] h-[55vw] w-[55vw] min-h-[500px] min-w-[500px] max-h-[800px] max-w-[800px] rounded-full bg-[rgba(94,186,125,0.22)] dark:bg-[rgba(94,186,125,0.15)] blur-[90px] sm:blur-[140px]" />
          {/* Blob terracotta léger à droite */}
          <div className="absolute top-[30%] right-[5%] h-[35vw] w-[35vw] min-h-[300px] min-w-[300px] max-h-[500px] max-w-[500px] rounded-full bg-[rgba(217,83,79,0.08)] dark:bg-[rgba(217,83,79,0.04)] blur-[80px] sm:blur-[110px]" />
        </div>
        <KillSW />
        {children}
      </body>
    </html>
  );
}
