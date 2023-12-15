"use client"

import { motion } from 'framer-motion';

const Mob = () => {
  return (
    // grid grid-cols-4 gap-2 min-h-[500px] p-5 px-10
    <div className="works grid grid-cols-1 gap-4 min-h-[1000px] p-5 px-10 lg:grid-cols-2 lg:gap-2 lg:px-16 xl:grid-cols-4 xl:min-h-[500px]">
      {/* grid grid-rows-2 gap-1 */}
        <div className="right-small xl:grid xl:grid-cols-1 xl:gap-1">
            <motion.div
              whileHover={{scale:1.1}}
              transition={{duration:0.5}} 
              className="bg-cover bg-no-repeat bg-center rounded-md cursor-pointer" style={{backgroundImage: 'url(/images/w2.jpg)',}}>
            </motion.div>
            <motion.div
              whileHover={{scale:1.1}}
              transition={{duration:0.5}} 
              className="bg-cover bg-no-repeat bg-center rounded-md cursor-pointer" style={{backgroundImage: 'url(/images/w3.jpg)',}}>
            </motion.div>
        </div>
        {/* col-span-2 */}
        <motion.div whileHover={{scale:1.2}} transition={{duration:0.6}}  className="middle-large bg-cover bg-no-repeat bg-center rounded-md xl:col-span-2 cursor-pointer" style={{backgroundImage: 'url(/images/w1.jpg)',}}></motion.div>
          <div className="left-small xl:grid xl:grid-rows-3 xl:gap-1">
          <motion.div 
            whileHover={{scale:1.1}}
            transition={{duration:0.5}} 
          className="bg-cover bg-no-repeat bg-center cursor-pointer rounded-md" style={{backgroundImage: 'url(/images/w1.jpg)',}}>
          </motion.div>
          <motion.div
            whileHover={{scale:1.1}}
            transition={{duration:0.5}} 
          className="bg-cover bg-no-repeat bg-center cursor-pointer" style={{backgroundImage: 'url(/images/porto.png)',}}>
          </motion.div>
        </div>
  </div>
  )
}

export default Mob