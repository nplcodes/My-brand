// app/layout.tsx
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

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';
  const isAdminPage = pathname === '/admin';
  const isUserPage = pathname === '/user';

  return (
    <html lang="en">
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
        {!isLoginPage && !isAdminPage && (
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
