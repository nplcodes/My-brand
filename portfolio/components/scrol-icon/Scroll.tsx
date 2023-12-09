'use client'
import { LuMouse } from "react-icons/lu";
import styles from '../main/Main.module.css'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';


const Scroll = () => {
  return (
    <div className="flex justify-end">
      <ScrollLink to="about" duration={500} smooth={true}>
        <span className={`text-4xl text-gray-500 cursor-pointer ${styles.bounce}`}> <LuMouse /> </span>
       </ScrollLink>
    </div>
  )
}

export default Scroll