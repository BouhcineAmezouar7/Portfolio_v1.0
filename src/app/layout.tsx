import Header from "@/components/Header";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import PageTransition from "@/components/PageTransition";
import type { Metadata } from "next";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bouhcine Amezouar — Full-Stack Developer",
  description:
    "Portfolio of Bouhcine Amezouar, a Full-Stack Developer and 1337 Coding School student in Casablanca, Morocco.",
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes, viewport-fit=cover" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d)}catch(e){}})()`,
          }}
        />
      </head>
      <body className={`${jetBrainsMono.className} overflow-x-hidden`}>
        <Header />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
