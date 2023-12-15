'use client'

import { LuMouse } from "react-icons/lu";
import styles from '../main/Main.module.css'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import {motion} from 'framer-motion'


const Scroll = () => {
  return (
    // justify-end
    <div className="flex justify-center pt-0 xl:justify-end">
      <ScrollLink to="about" duration={500} smooth={true}>
        <motion.span
        initial={{opacity:0 , y:-1000}}
        animate={{opacity:1, y:0}}
        transition={{delay:0.1, duration:2, type: "spring"}}
         className={`text-4xl text-gray-500 cursor-pointer ${styles.bounce} `}> <LuMouse /> 
         </motion.span>
       </ScrollLink>
    </div>
  )
}

export default Scroll