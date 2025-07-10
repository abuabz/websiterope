import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Squad | Pioneering Rope Access Solutions',
  description: 'Squad is a leading provider of rope access solutions, specializing in high-altitude work across various industries. Our team of certified professionals ensures safety and efficiency in every project.',
  generator: 'Next.js',
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  )
}
