"use client"

import Image from "next/image"
import { motion } from 'framer-motion';


const Gallery = () => {
  return (
    <div>
      <div className="flex justify-center items-center py-5">
        <div className="header-personal font-bold">MY GALLERY </div>
    </div> 
    {/* grid grid-cols-3 gap-2 py-10 */}
    <div className="all-skillls-container flex flex-col gap-6 items-center lg:grid lg:grid-cols-2 lg:gap-2 lg:py-10 xl:grid-cols-3  ">
      <motion.div 
       whileHover={{scale:1.1}}
       transition={{duration:0.5}}
      className="single-image cursor-pointer">
       <Image alt="gallery"  src='/images/me.jpg' width={600} height={600} className="rounded-md"/>
      </motion.div>

      <motion.div 
       whileHover={{scale:1.1}}
       transition={{duration:0.5}}
      className="single-image cursor-pointer">
      <Image alt="gallery"  src='/images/hero-pic.png' width={600} height={700} className="rounded-md"/>
      </motion.div>

      <motion.div 
       whileHover={{scale:1.1}}
       transition={{duration:0.5}}
      className="single-image cursor-pointer">
      <Image alt="gallery"  src='/images/ga1.jpg' width={600} height={600} className="rounded-md"/>
      </motion.div>

      <motion.div 
       whileHover={{scale:1.1}}
       transition={{duration:0.5}}
      className="single-image cursor-pointer">
      <Image alt="gallery"  src='/images/ga2.avif' width={600} height={600} className="rounded-md"/>
      </motion.div>
    </div>
    </div>
 
  )
}

export default Gallery