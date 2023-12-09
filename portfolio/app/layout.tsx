// app/layout.tsx
"use client"

import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/navbar/NavBar';
import Footer from '@/components/footer/Footer';
import { usePathname } from 'next/navigation';
import Login from '@/components/login/Login';


const inter = Inter({ subsets: ['latin'] });


export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';

  return (
    <html lang="en">
      <body className={inter.className}>
        {isLoginPage ? (
          <div className="container max-w-7xl mx-auto">
            <Login />
          </div>
        ) : (
          <div className="container max-w-7xl mx-auto">
            <NavBar />
            {children}
            <Footer />
          </div>
        )}
      </body>
    </html>
  );
}
