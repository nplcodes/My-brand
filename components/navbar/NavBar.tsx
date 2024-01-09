"use client"

import { useState } from 'react';
import { RiMenu3Fill } from 'react-icons/ri';
import { FaTimes } from "react-icons/fa";
import Link from 'next/link';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import Image from 'next/image';


const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div 
    className="bg-gray-200 z-50 sticky top-0 right-0 left-0 md:py-3 md:px-3 xl:fixed xl:px-5">
      <div className="max-w-4xl max-h-10  mx-auto flex justify-between items-center">
        <div className="logo text-4xl font-bold cursor-pointer">
        <ScrollLink to="home" smooth={true} duration={800}>
          <img alt="" width={100} height={100} src="/images/LOGO.png" />
        </ScrollLink>
        </div>
        <nav className="navbar-menu flex gap-10">
          <ul className="hidden md:flex md:gap-5 md:items-center xl:flex xl:gap-5 xl:items-center">
            <span className="cursor-pointer hover:text-red-800 "><Link href='https://www.facebook.com/pierre.ndayishimiye.10/'>Fb.</Link></span>
            <div className="bg-[#C9CCCE] h-5 w-[1px]"></div>
            <span className="cursor-pointer hover:text-red-800 "><Link href='https://www.instagram.com/onairtrends/'>Inst.</Link></span>
            <div className="bg-[#C9CCCE] h-5 w-[1px]"></div>
            <span className="cursor-pointer hover:text-red-800 "><Link href='https://twitter.com/'>Tw.</Link></span>
            <div className="bg-[#C9CCCE] h-5 w-[1px]"></div>
            <span className="cursor-pointer hover:text-red-800 "><Link href='https://www.be-link.fr/'>Be.</Link></span>
          </ul>
          <span
            className="text-4xl cursor-pointer  z-50 hover:text-red-800"
            onClick={toggleMenu}
          >
            <RiMenu3Fill />
          </span>
        </nav>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="w-full bg-gray-200 mx-auto flex justify-center items-center py-5 px-5 relative" >
            {/* Add your menu content here */}
            <div className="flex flex-col gap-5 py-5 w-1/2 h-screen justify-center items-center">
              <ScrollLink to="home" smooth={true} duration={800} >
                <span className="text-black px-96 py-5 flex justify-center rounded-md hover:bg-white hover:text-black cursor-pointer" onClick={toggleMenu}>Home</span>
              </ScrollLink>
              <ScrollLink to="about" smooth={true} duration={800} >
                <span className="text-black px-96 py-5 flex justify-center rounded-md hover:bg-white hover:text-black cursor-pointer" onClick={toggleMenu}>About</span>
              </ScrollLink>
              <ScrollLink to="work" smooth={true} duration={800}>
                <span className="text-black px-96 py-5 flex justify-center rounded-md hover:bg-white hover:text-black cursor-pointer" onClick={toggleMenu}>Portfolio</span>
              </ScrollLink>
              <ScrollLink to="blog" smooth={true} duration={800} >
                <span className="text-black px-96 py-5 flex justify-center rounded-md hover:bg-white hover:text-black cursor-pointer" onClick={toggleMenu}>Blogs</span>
              </ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={800}>
                <span className="text-black px-96 py-5 flex justify-center rounded-md hover:bg-white hover:text-black cursor-pointer" onClick={toggleMenu}>Contact</span>
              </ScrollLink>
              <Link href="/login">
                <li className=''> 
                  <span className="text-black px-96 py-5 flex justify-center rounded-md hover:bg-white hover:text-black cursor-pointer">Login</span>
                </li>
              </Link>
            </div>
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