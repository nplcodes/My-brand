"use client"

import Image from 'next/image';
import styles from './Main.module.css';
import { Typing } from './TypeAnimation';



const Main = () => {

  return (
    <div className={`pt-6 lg:pt-32 xl:pt-24 xl:pb-32 lg:flex lg:justify-between h-full lg:gap-4 lg:px-32`} style={{backgroundImage: 'url("/images/back.jp")'}} id="home">
      <div className="absolute inset-0 z-[-1]"></div>
      <div className={`hero-section py-4 flex justify-center xl:rounded-full xl:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] `} style={{}}
      >
        <Image 
          src="/images/mee_1.png"
          alt="Description of your image"
          width={500} 
          height={300}
          priority
        />
      </div>
      <div
      className="name-section flex flex-col gap-5 justify-center items-center">
        <div className="name flex flex-col items-center">
          <p className='font-bold italic'>Hey, I'm</p>
          <Typing  />
        </div>
        <div className="hero-text">
          <ul className="flex gap-2 items-center">
            <span className='text-xs text-gray-500 '>UI/Ux Design</span>
            <div className="bg-[#C9CCCE] h-5 w-[1px]"></div>
            <span className='text-xs text-gray-500'>Mob App Developer</span>
            <div className="bg-[#C9CCCE] h-5 w-[1px]"></div>
            <span className={` ${styles.bounce} text-xs text-gray-500`}>Web Developer</span>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Main;
