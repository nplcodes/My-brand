"use client"

import React, { useState } from 'react';
import Skills from './sub-components/Skills';
import Personal from './sub-components/Personal';
import Education from './sub-components/Education';
import Gallery from './sub-components/Gallery';



const About = () => {
  const [about, setAbout] = useState<string>('gallery');

  const setMenu = (menu: string) => {
    setAbout(menu);
  };

  const renderingSelectedMenu = () => {
    switch (about) {
      case 'personal':
        return (
          <div
          key={Date.now()}
          >
            <Personal />
          </div>
        );

      case 'education':
        return (
          <div
          key={Date.now()}
          >
            <Education />
          </div>
        );

      case 'skills':
        return (
          <div
          key={Date.now()}
          >
            <Skills />
          </div>
        );

      case 'gallery':
        return (
          <div
          key={Date.now()}
          >
            <Gallery />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className="pt-16 lg:px-16"
      id="about"
    >
      <div className="about-header bg-slate-300 bg-transparent flex gap-3 flex-col items-center justify-center py-10">
        <div className='flex items-center justify-center gap-2'>
          <div className='w-4 h-4 bg-gray-400'></div>
          <p className='text-gray-400'>Introduction</p>
          <div className='w-4 h-4 bg-gray-400'></div>
        </div>
        <h1 className='font-bold'>About Me</h1>
      </div>

      <div className="about-body flex flex-col gap-24 lg:grid lg:grid-cols-6">
        <div className="left-nav col-div-1 h-[100px] grid grid-cols-2 gap-2 py-5 lg:grid lg:grid-cols-1">
          <div className={`cursor-pointer rounded-sm hover:bg-black hover:text-white ${about === 'personal' ? 'bg-black text-white' : ''} flex justify-center items-center py-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]`} onClick={() => setMenu('personal')}>Personal</div>
          <div className={`cursor-pointer rounded-sm hover:bg-black hover:text-white ${about === 'education' ? 'bg-black text-white' : ''}  flex justify-center items-center py-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]`} onClick={() => setMenu('education')}>Education</div>
          <div className={`cursor-pointer rounded-sm hover:bg-black hover:text-white ${about === 'skills' ? 'bg-black text-white' : ''} flex justify-center items-center py-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]`} onClick={() => setMenu('skills')}>Skills</div>
          <div className={`cursor-pointer rounded-sm hover:bg-black hover:text-white ${about === 'gallery' ? 'bg-black text-white' : ''} flex justify-center items-center py-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]`} onClick={() => setMenu('gallery')}>Gallery</div>
        </div>

        <div
         className="px-5 lg:col-span-5 lg:min-h-screen lg:p-5 lg:px-10">
          {renderingSelectedMenu()}
        </div>
      </div>
    </div>
  );
};

export default About;
