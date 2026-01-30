import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MicroHabit Stacker - Build Lasting Habits in 2 Minutes',
  description: 'Transform your life with scientifically-backed micro-habits delivered at optimal personal moments. AI-powered habit tracking for busy professionals.',
  keywords: 'habits, productivity, micro-habits, habit tracker, self-improvement',
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