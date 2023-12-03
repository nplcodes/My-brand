import { LuMouse } from "react-icons/lu";
import styles from '../main/Main.module.css'

const Scroll = () => {
  return (
    <div className="flex justify-end">
       <span className={`text-4xl text-gray-500 cursor-pointer ${styles.bounce}`}> <LuMouse /> </span>
    </div>
  )
}

export default Scroll