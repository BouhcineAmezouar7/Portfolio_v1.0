import Header from "@/components/Header";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import PageTransition from "@/components/PageTransition";
import ThemedGlowCursor from "@/components/ThemedGlowCursor";
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
    icon: "/logo_icon.png",
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
        className={`${jetBrainsMono.className} min-h-screen overflow-x-hidden bg-background`}
      >

        {/* Website content */}
        <div className="relative z-10">
          <Header />
          <PageTransition>{children}</PageTransition>
        </div>

        {/* Cursor layer */}
        <div className="pointer-events-none fixed inset-0 z-50">
          <ThemedGlowCursor />
        </div>
      </body>
    </html>
  );
}
