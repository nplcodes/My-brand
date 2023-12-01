import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/navbar/NavBar'
import Footer from '@/components/footer/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Brand',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container max-w-7xl mx-auto">
          <NavBar />
            {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}