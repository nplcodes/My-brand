'use client'

import React, { ReactNode } from 'react';
import NavBar from '../Dashboard/navbar/NavBar';
import Provider from '../Provider';


interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div  className='min-h-screen relative'>
      <Provider>
        <NavBar />
        <main>{children}</main>
      </Provider>
    </div>
  );
};

export default AdminLayout;
