import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'GoFLyt - Flyt nemt og sikkert i Danmark',
  description: 'Professionel flytteservice i hele Danmark. Beregn pris online og få tilbud på din flytning. Forsikrede flyttefolk, gennemsigtige priser og hurtig booking.',
  keywords: ['flyttefirma', 'flytning', 'flytteservice', 'Danmark', 'GoFLyt', 'flyttehjælp', 'boligflytning', 'kontorflytning'],
  openGraph: {
    title: 'GoFLyt - Flyt nemt og sikkert i Danmark',
    description: 'Professionel flytteservice i hele Danmark. Beregn pris online og få tilbud på din flytning.',
    url: 'https://go-flyt.dk',
    siteName: 'GoFLyt',
    locale: 'da_DK',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoFLyt - Flyt nemt og sikkert i Danmark',
    description: 'Professionel flytteservice i hele Danmark. Beregn pris online og få tilbud på din flytning.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#FF7A00',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="da" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
