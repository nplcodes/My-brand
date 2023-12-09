// components/layouts/AdminLayout.tsx
import React, { ReactNode } from 'react';
import NavBar from '../Dashboard/navbar/NavBar';

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div  className='min-h-screen relative'>
        <NavBar />
        <main>{children}</main>
    </div>
  );
};

export default AdminLayout;
