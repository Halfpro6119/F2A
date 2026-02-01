import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Footprints 2 Africa - Restoring Dignity, Delivering Hope',
    template: '%s | Footprints 2 Africa',
  },
  description: 'UK registered charity restoring dignity and hope to people living with ostomies across Africa by collecting, redistributing, and delivering essential medical supplies.',
  keywords: ['charity', 'ostomy', 'Africa', 'medical supplies', 'dignity', 'healthcare'],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://footprints2africa.org.uk',
    siteName: 'Footprints 2 Africa',
    title: 'Footprints 2 Africa - Restoring Dignity, Delivering Hope',
    description: 'UK registered charity restoring dignity and hope to people living with ostomies across Africa.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Footprints 2 Africa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Footprints 2 Africa - Restoring Dignity, Delivering Hope',
    description: 'UK registered charity restoring dignity and hope to people living with ostomies across Africa.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
