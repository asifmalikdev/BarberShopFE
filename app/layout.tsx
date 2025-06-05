import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'New Style Barber Shop - Modern Cuts in Milton',
  description: 'Experience premium haircuts and grooming services at New Style Barber Shop. Two convenient locations in Milton. Book your appointment online.',
  keywords: 'barber shop milton, haircut milton, mens grooming, beard trim, new style barber',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}