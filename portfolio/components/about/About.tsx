"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Skills from './sub-components/Skills';
import Personal from './sub-components/Personal';
import Education from './sub-components/Education';
import Experience from './sub-components/Experience';
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Personal />
          </motion.div>
        );

      case 'education':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Education />
          </motion.div>
        );

      case 'skills':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Skills />
          </motion.div>
        );

      case 'gallery':
        return (
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -200 }}
            transition={{ duration: 1 }}
          >
            <Gallery />
          </motion.div>
        );

      case 'experience':
        return (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
          >
            <Experience />
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.01, duration: 2 }}
      className="pt-16 lg:px-16"
      id="about"
    >
      <div className="about-header bg-slate-300 bg-transparent flex gap-3 flex-col items-center justify-center py-10">
        <div className='flex items-center justify-center gap-2'>
          <div className='w-4 h-4 bg-blue-400'></div>
          <p className='text-blue-400'>Introduction</p>
          <div className='w-4 h-4 bg-blue-400'></div>
        </div>
        <h1 className='font-bold'>About Me</h1>
      </div>

      <div className="about-body flex flex-col gap-24 lg:grid lg:grid-cols-6">
        <div className="left-nav col-div-1 h-[100px] grid grid-cols-2 gap-2 py-5 lg:grid lg:grid-cols-1">
          <div className={`cursor-pointer rounded-sm hover:bg-blue-500 hover:text-white ${about === 'personal' ? 'bg-blue-500 text-white' : ''} flex justify-center items-center py-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]`} onClick={() => setMenu('personal')}>Personal</div>
          <div className={`cursor-pointer rounded-sm hover:bg-blue-500 hover:text-white ${about === 'education' ? 'bg-blue-500 text-white' : ''}  flex justify-center items-center py-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]`} onClick={() => setMenu('education')}>Education</div>
          <div className={`cursor-pointer rounded-sm hover:bg-blue-500 hover:text-white ${about === 'skills' ? 'bg-blue-500 text-white' : ''} flex justify-center items-center py-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]`} onClick={() => setMenu('skills')}>Skills</div>
          <div className={`cursor-pointer rounded-sm hover:bg-blue-500 hover:text-white ${about === 'gallery' ? 'bg-blue-500 text-white' : ''} flex justify-center items-center py-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]`} onClick={() => setMenu('gallery')}>Gallery</div>
          <div className={`cursor-pointer rounded-sm hover:bg-blue-500 hover:text-white ${about === 'experience' ? 'bg-blue-500 text-white' : ''} flex justify-center items-center py-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]`} onClick={() => setMenu('experience')}>Experience</div>
        </div>

        <motion.div
         className="px-5 lg:col-span-5 lg:min-h-screen lg:p-5 lg:px-10">
          {renderingSelectedMenu()}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
