"use client"

import Image from "next/image"
import { motion } from 'framer-motion';


const Skills = () => {
  return (
    <div>
        <div className="flex justify-center items-center py-5">
          <div className="header-personal">SKILLS + KNOWLDGE</div>
       </div>
       <div className="wrapper">
        {/* grid grid-cols-3 px-32 py-10 */}
        <div className="all-skillls-container lg:grid lg:grid-cols-2 lg:px-32 lg:gap-2 lg:py-10 xl:grid-cols-3">
          <motion.div
            whileHover={{scale:1.1}}
            transition={{duration:0.5}}
           className="one-skill grid grid-cols-4 gap-3  py-10 px-5 rounded-tl-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
            <Image alt=""  src='/images/react.png' width={70} height={70} className="rounded-md"/>
            <div className="title-percent-bar col-span-3">
              <div className="title-percent flex justify-between pb-2">
                <div>React</div>
                <div>95%</div>
              </div>
              <div className="bar bg-gray-500 h-2 relative ">
                <div className="bar-color bg-blue-500 w-[80%] h-2 absolute top-0 left-0"></div>
              </div>
            </div>
          </motion.div>

          <motion.div
           whileHover={{scale:1.1}}
           transition={{duration:0.5}}
           className="one-skill grid grid-cols-4 gap-3  py-10 px-5 rounded-tl-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
            <Image alt=""  src='/images/next.png' width={70} height={70} className="rounded-md"/>
            <div className="title-percent-bar col-span-3">
              <div className="title-percent flex justify-between pb-2">
                <div>Next</div>
                <div>95%</div>
              </div>
              <div className="bar bg-gray-500 h-2 relative ">
                <div className="bar-color bg-blue-500 w-[80%] h-2 absolute top-0 left-0"></div>
              </div>
            </div>
          </motion.div>

          <div className="one-skill grid grid-cols-4 gap-3  py-10 px-5 rounded-tl-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
            <Image alt=""  src='/images/postgres.png' width={70} height={70} className="rounded-md"/>
            <div className="title-percent-bar col-span-3">
              <div className="title-percent flex justify-between pb-2">
                <div>Postgres</div>
                <div>95%</div>
              </div>
              <div className="bar bg-gray-500 h-2 relative ">
                <div className="bar-color bg-blue-500 w-[80%] h-2 absolute top-0 left-0"></div>
              </div>
            </div>
          </div>

          <motion.div 
             whileHover={{scale:1.1}}
             transition={{duration:0.5}}
          className="one-skill grid grid-cols-4 gap-3  py-10 px-5 rounded-tl-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
            <Image alt=""  src='/images/python.png' width={70} height={70} className="rounded-md"/>
            <div className="title-percent-bar col-span-3">
              <div className="title-percent flex justify-between pb-2">
                <div>Node</div>
                <div>95%</div>
              </div>
              <div className="bar bg-gray-500 h-2 relative ">
                <div className="bar-color bg-blue-500 w-[80%] h-2 absolute top-0 left-0"></div>
              </div>
            </div>
          </motion.div>

          <div className="one-skill grid grid-cols-4 gap-3  py-10 px-5 rounded-tl-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
            <Image alt=""  src='/images/react.png' width={70} height={70} className="rounded-md"/>
            <div className="title-percent-bar col-span-3">
              <div className="title-percent flex justify-between pb-2">
                <div>React</div>
                <div>95%</div>
              </div>
              <div className="bar bg-gray-500 h-2 relative ">
                <div className="bar-color bg-blue-500 w-[80%] h-2 absolute top-0 left-0"></div>
              </div>
            </div>
          </div>

          <div className="one-skill grid grid-cols-4 gap-3  py-10 px-5 rounded-tl-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
            <Image alt=""  src='/images/docker.png' width={70} height={70} className="rounded-md"/>
            <div className="title-percent-bar col-span-3">
              <div className="title-percent flex justify-between pb-2">
                <div>Docker</div>
                <div>95%</div>
              </div>
              <div className="bar bg-gray-500 h-2 relative ">
                <div className="bar-color bg-blue-500 w-[80%] h-2 absolute top-0 left-0"></div>
              </div>
            </div>
          </div>

          <motion.div
            whileHover={{scale:1.1}}
            transition={{duration:0.5}}
           className="one-skill grid grid-cols-4 gap-3  py-10 px-5 rounded-tl-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
            <Image alt=""  src='/images/ts.png' width={70} height={70} className="rounded-md"/>
            <div className="title-percent-bar col-span-3">
              <div className="title-percent flex justify-between pb-2">
                <div>TypeScript</div>
                <div>95%</div>
              </div>
              <div className="bar bg-gray-500 h-2 relative ">
                <div className="bar-color bg-blue-500 w-[80%] h-2 absolute top-0 left-0"></div>
              </div>
            </div>
          </motion.div>

          <div className="one-skill grid grid-cols-4 gap-3  py-10 px-5 rounded-tl-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
            <Image alt=""  src='/images/django.png' width={70} height={70} className="rounded-md"/>
            <div className="title-percent-bar col-span-3">
              <div className="title-percent flex justify-between pb-2">
                <div>Django</div>
                <div>95%</div>
              </div>
              <div className="bar bg-gray-500 h-2 relative ">
                <div className="bar-color bg-blue-500 w-[80%] h-2 absolute top-0 left-0"></div>
              </div>
            </div>
          </div>

          <div className="one-skill grid grid-cols-4 gap-3  py-10 px-5 rounded-tl-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
            <Image alt=""  src='/images/figma.png' width={70} height={70} className="rounded-md"/>
            <div className="title-percent-bar col-span-3">
              <div className="title-percent flex justify-between pb-2">
              <div>Figma</div>
                <div>95%</div>
              </div>
              <div className="bar bg-gray-500 h-2 relative ">
                <div className="bar-color bg-blue-500 w-[80%] h-2 absolute top-0 left-0"></div>
              </div>
            </div>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Skills