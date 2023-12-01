"use client"

import React, {use, useState} from 'react'
import Skills from './sub-components/Skills'
import Personal from './sub-components/Personal'
import Education from './sub-components/Education'
import Experience from './sub-components/Experience'
import Gallery from './sub-components/Gallery'



const About = () => {
   let [about, setAbout] = useState<string>('personal');

  const setMenu = (menu: string) => {
    setAbout(menu);
  };
const renderingSelectedMenu = ()=>{
   switch (about) {
    case about='personal':
        return <Personal />
      break;
    case about='education':
        return <Education />
      break;
    case about='skills':
        return <Skills />
      break;
    case about='gallery':
        return <Gallery />
      break;
    case about='experience':
        return <Experience />
      break;
  
    default:
      break;
  }
}

  return (
    <div className='mt-5'>
        <div className="about-header bg-slate-300 flex gap-3 flex-col items-center justify-center py-10">
            <div className='flex items-center justify-center gap-2'>
                <div className='w-4 h-4 bg-blue-400'></div>
                  <p className='text-blue-400'>Introduction</p>
                <div className='w-4 h-4 bg-blue-400'></div>
            </div>
            <h1 className='font-bold'>About Me</h1>
        </div>
        <div className="about-body grid grid-cols-6">
            <div className="left-nav col-div-1 h-[100px] grid grid-cols-2 gap-2 py-5">
                <div className='cursor-pointer hover:bg-blue-500 hover:text-white flex justify-center items-center py-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]' onClick={() => setMenu('personal')}>Personal</div>
                <div className='cursor-pointer hover:bg-blue-500 hover:text-white flex justify-center items-center py-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]' onClick={() => setMenu('education')}>Education</div>
                <div className='cursor-pointer hover:bg-blue-500 hover:text-white flex justify-center items-center py-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]' onClick={() => setMenu('skills')}>Skills</div>
                <div className='cursor-pointer hover:bg-blue-500 hover:text-white flex justify-center items-center py-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]' onClick={() => setMenu('gallery')}>Gallery</div>
                <div className='cursor-pointer hover:bg-blue-500 hover:text-white flex justify-center items-center py-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]' onClick={() => setMenu('experience')}>Experience</div>
                {/* <div className='cursor-pointer hover:bg-blue-500 hover:text-white flex justify-center items-center py-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]' onClick={() => setMenu('')}>Download Cv</div> */}
            </div>
            <div className="content col-span-5 min-h-screen p-5 px-10">
                {renderingSelectedMenu()}
            </div>
        </div>
    </div>
  )
}

export default About