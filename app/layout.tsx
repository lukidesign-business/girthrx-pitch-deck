import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Oswald } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-oswald',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'GirthRx × Jellybean — CEO Collaboration Proposal',
  description:
    'A premium 40% growth partnership proposal for Jellybean to lead GirthRx as its public-facing female CEO — covering the brand, the opportunity, deliverables, and the TikTok-native growth engine.',
  generator: 'v0.app',
  openGraph: {
    title: 'GirthRx — Premium Performance Honey',
    description:
      'GirthRx is a premium honey-based vitality ritual for modern men. Investor and partner pitch deck covering product, market, traction, and the ask.',
    url: 'https://girthrx.com',
    siteName: 'GirthRx',
    images: [
      {
        url: '/images/hero.png',
        width: 1280,
        height: 640,
        alt: 'GirthRx Premium Performance Honey — American Made Functional Honey Formula',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GirthRx — Premium Performance Honey',
    description:
      'GirthRx is a premium honey-based vitality ritual for modern men. Investor and partner pitch deck.',
    images: ['/images/hero.png'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#050608',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} bg-background`}>
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
