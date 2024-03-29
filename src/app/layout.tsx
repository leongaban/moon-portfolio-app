import '@/src/css/globals.css'
import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
// import { Analytics } from '@vercel/analytics/react';
import { MOON_PORTFOLIO, TAG_LINE } from '@/src/common/constants/copy'
import { ReduxProvider } from '@/src/common/redux/provider'

const space_grotesk = Space_Grotesk({ weight: '700', subsets: ['latin'] })

export const metadata: Metadata = {
  authors: [
    {
      name: 'Leon Gaban',
      url: ' leongaban.dev',
    },
  ],
  title: MOON_PORTFOLIO,
  description: TAG_LINE,
  keywords: ['crypto', 'portfolio', 'Bitcoin', 'Ethereum', 'Solana', 'wealth'],
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-gradient ${space_grotesk.className}`}>
        <ReduxProvider>{children}</ReduxProvider>
        {/* <Analytics /> */}
      </body>
    </html>
  )
}
