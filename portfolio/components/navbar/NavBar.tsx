"use client"

import { useState } from 'react';
import { RiMenu3Fill } from 'react-icons/ri';
import Image from 'next/image';
import { FaTimes } from "react-icons/fa";
import Link from 'next/link';


const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="py-5 px-5 fixed top-0 right-0 left-0 bg-blue-500 z-50">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div className="logo text-4xl font-bold cursor-pointer">
          <Image alt="logo" width={60} height={60} src="/images/LOGO.png" />
        </div>
        <nav className="navbar-menu flex gap-10">
          <ul className="flex gap-5 items-center">
            <span className="cursor-pointer hover:text-red-800 text-white"><Link href='https://www.facebook.com/'>Fb.</Link></span>
            <div className="bg-[#C9CCCE] h-5 w-[1px]"></div>
            <span className="cursor-pointer hover:text-red-800 text-white"><Link href='https://www.instagram.com/'>Inst.</Link></span>
            <div className="bg-[#C9CCCE] h-5 w-[1px]"></div>
            <span className="cursor-pointer hover:text-red-800 text-white"><Link href='https://twitter.com/'>Tw.</Link></span>
            <div className="bg-[#C9CCCE] h-5 w-[1px]"></div>
            <span className="cursor-pointer hover:text-red-800 text-white"><Link href='https://www.be-link.fr/'>Be.</Link></span>
          </ul>
          <span
            className="text-4xl cursor-pointer text-white z-50 hover:text-red-800"
            onClick={toggleMenu}
          >
            <RiMenu3Fill />
          </span>
        </nav>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="w-full bg-blue-400 mx-auto flex justify-center items-center py-5 px-5 relative" >
            {/* Add your menu content here */}
            <ul className="flex flex-col gap-5 py-5 w-1/2 h-screen justify-center items-center">
              <li className='w-full py-5 flex justify-center hover:bg-white hover:text-black cursor-pointer' onClick={toggleMenu}>
                <span className="text-black cursor-pointer transition delay-75">Home</span>
              </li>
              <li className='w-full py-5 flex justify-center hover:bg-white hover:text-black cursor-pointer'>
                <span className="text-black cursor-pointer hover:text-red-800" onClick={toggleMenu}>About</span>
              </li>
              <li className='w-full py-5 flex justify-center hover:bg-white hover:text-black' onClick={toggleMenu}>
                <span className="text-black cursor-pointer">Blogs</span>
              </li>
              <li className='w-full py-5 flex justify-center hover:bg-white hover:text-black cursor-pointer' onClick={toggleMenu}>
                <span className="text-black cursor-pointer">Portfolio</span>
              </li>
              <li className='w-full py-5 flex justify-center hover:bg-white hover:text-black cursor-pointer' onClick={toggleMenu}>
                <span className="text-black cursor-pointer">Contact Me</span>
              </li>
              <li className='w-full py-5 flex justify-center hover:bg-white hover:text-black cursor-pointer' onClick={toggleMenu}>
                <span className="text-black cursor-pointer">Login</span>
              </li>
            </ul>
            <div className='absolute top-32 right-10 cursor-pointer text-red-500' onClick={closeMenu}>
               <FaTimes />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
