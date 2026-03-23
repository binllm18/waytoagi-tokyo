import type { Metadata } from 'next'
import { Oswald, Inter } from 'next/font/google'
import './globals.css'
import AmbientNoise from '@/components/AmbientNoise'
import { LanguageProvider } from "@/i18n/LanguageContext"
import LanguageSwitcher from "@/components/LanguageSwitcher"

const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald", weight: ["200", "300", "400", "500", "600", "700"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: 'AGI Horizon 2026 | WaytoAGI',
  description: 'A premium tech landing page replication',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="antialiased bg-black text-white selection:bg-white/30 font-sans min-h-screen flex flex-col">
        <LanguageProvider>
          <LanguageSwitcher />
          <AmbientNoise />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
