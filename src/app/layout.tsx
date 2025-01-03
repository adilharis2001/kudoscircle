import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KudosCircle - AI Product Feedback Community',
  description: 'A collaborative feedback marketplace connecting AI founders with contributors to exchange actionable insights and improve their products.',
  icons: {
    icon: [
      {
        url: '/kudos-circle-logo.png',
        href: '/kudos-circle-logo.png',
      },
    ],
    apple: [
      {
        url: '/kudos-circle-logo.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/kudos-circle-logo.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
} 