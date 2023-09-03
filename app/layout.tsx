import { ThemeProvider } from '@/contexts/theme-provider'
import './globals.css'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import ProgressBarProvider from '@/contexts/progress-bar-provider'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const urbanist = Urbanist({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <ProgressBarProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </ProgressBarProvider>
      </body>
    </html>
  )
}
