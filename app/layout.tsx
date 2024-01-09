"use client"
// app/layout.tsx
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/navbar/NavBar';
import Footer from '@/components/footer/Footer';
import { usePathname } from 'next/navigation';
import Login from '@/components/login/Login';
import AdminLayout from '@/components/layout/AdminLayout';
import Admin from '@/components/Dashboard/Admin';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';
  const isAdminPage = pathname === '/admin';
  const isBlogPage = pathname.includes('/singleblog');

  return (
    <html lang="en">
        <Head>
          <title>Home Page - My Next.js App</title>
      </Head>
      <body className={inter.className}>
        {isLoginPage && (
          <div className="container max-w-7xl mx-auto">
            <Login />
          </div>
        )}
        {isAdminPage && (
          <AdminLayout>
             <Admin />
          </AdminLayout>
        )}
        {!isLoginPage && !isAdminPage && !isBlogPage && (
          <div className="container max-w-7xl mx-auto">
            <NavBar />
            {children}
            <Footer />
          </div>
        )}
        {isBlogPage && (
          <div className="container max-w-8xl mx-auto px-16 py-8">
            {children}
          </div>
        )}
      </body>
    </html>
  );
}
