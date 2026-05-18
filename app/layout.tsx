import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ayomikun Adaramola | Data Engineer',
  description: 'Data Engineer with 5+ years of experience building scalable cloud data pipelines, ETL workflows, and analytics solutions using Python, SQL, AWS, GCP, BigQuery, and Snowflake.',
  keywords: ['Data Engineer', 'ETL', 'BigQuery', 'Snowflake', 'AWS', 'GCP', 'Python', 'Apache Spark', 'Airflow', 'Data Pipeline'],
  authors: [{ name: 'Ayomikun Adaramola' }],
  creator: 'Ayomikun Adaramola',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ayomikun.dev',
    title: 'Ayomikun Adaramola | Data Engineer',
    description: 'Turning raw data into reliable business intelligence. Building the pipelines behind smarter decisions.',
    siteName: 'Ayomikun Adaramola Portfolio',
    images: [
      {
        url: '/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Ayomikun Adaramola - Data Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ayomikun Adaramola | Data Engineer',
    description: 'Turning raw data into reliable business intelligence.',
    images: ['/profile.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
