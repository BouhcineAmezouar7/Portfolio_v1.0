import Header from "@/components/Header";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import PageTransition from "@/components/PageTransition";
import SiteMotionProvider from "@/components/SiteMotionProvider";
import ThemedGlowCursor from "@/components/ThemedGlowCursor";
import PortfolioCubesBackground from "@/components/PortfolioCubesBackground";
import type { Metadata } from "next";
import { profile } from "@/data/portfolio";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: `Portfolio of ${profile.name}, a ${profile.role} and ${profile.school} student in ${profile.location}.`,
  icons: {
    icon: "/logo/logo_icon_white.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d)}catch(e){}})()`,
          }}
        />
      </head>

      <body
        className={`${jetBrainsMono.className} min-h-screen overflow-x-hidden bg-background/30`}
      >
        {/* Shared background layer for every route */}
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden dark:blur-none blur-[4px]">
          <PortfolioCubesBackground />
        </div>

        {/* Website content */}
        <div className="relative z-10">
          <Header />
          <SiteMotionProvider>
            <PageTransition>{children}</PageTransition>
          </SiteMotionProvider>
        </div>

        {/* Cursor layer */}
        <div className="pointer-events-none fixed inset-0 z-50">
          <ThemedGlowCursor />
        </div>
      </body>
    </html>
  );
}
