import type { Metadata } from 'next'
import { Inter, Instrument_Serif } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

const instrumentSerif = Instrument_Serif({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-serif',
})

export const metadata: Metadata = {
  title: 'Firaol Merga | Full-Stack Developer',
  description: 'Backend-focused full-stack developer building scalable web applications. Specializing in Django, React, and modern API design.',
  generator: 'v0.app',
  keywords: ['Full-Stack Developer', 'Backend Engineer', 'Django', 'React', 'API Design', 'Ethiopia'],
  authors: [{ name: 'Firaol Merga' }],
  openGraph: {
    title: 'Firaol Merga | Full-Stack Developer',
    description: 'Backend-focused full-stack developer building scalable web applications.',
    type: 'website',
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased grain bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
