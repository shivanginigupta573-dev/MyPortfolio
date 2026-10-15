
import type { Metadata } from "next";
import { Caveat, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PaperTexture } from "@/components/illustrations/PaperTexture";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-site-sans",
  display: "swap",
});

const fontDisplay = Caveat({
  subsets: ["latin"],
  variable: "--font-site-display",
  display: "swap",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-site-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Shivangini | CS Student at NIT Durgapur",
    template: "%s | Shivangini",
  },
  description:
    "Shivangini's portfolio — Computer Science undergraduate at NIT Durgapur, exploring software engineering, open source, and thoughtful ways to build.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontSans.variable} ${fontDisplay.variable} ${fontMono.variable}`}
    >
      <body className="min-h-screen bg-canvas font-sans text-ink transition-colors duration-300 dark:bg-dark-bg dark:text-dark-text">
        <ThemeProvider>
          <PaperTexture />

          <div className="relative z-10 flex min-h-screen flex-col">
            <Navbar />

            <main className="flex-1">{children}</main>

            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
