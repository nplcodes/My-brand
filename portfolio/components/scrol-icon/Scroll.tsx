'use client'
import { LuMouse } from "react-icons/lu";
import styles from '../main/Main.module.css'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';


const Scroll = () => {
  return (
    // justify-end
    <div className="flex justify-center pt-10">
      <ScrollLink to="about" duration={500} smooth={true}>
        <span className={`text-4xl text-gray-500 cursor-pointer ${styles.bounce} `}> <LuMouse /> </span>
       </ScrollLink>
    </div>
  )
}

export default Scroll