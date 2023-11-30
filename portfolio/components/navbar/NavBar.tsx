import { RiMenu3Fill } from "react-icons/ri";
import Image from "next/image";


const NavBar = () => {
  return (
    <div className='flex justify-between items-center bg-[#F0F4F7]  py-5 px-5'>
        <div  className="logo text-4xl font-bold cursor-pointer"><Image alt="logo" width={60} height={60} src='/images/LOGO.png' /></div>
        <nav className='navbar-menu flex gap-10'>
            <ul className="flex gap-5 items-center">
                <span className="cursor-pointer">Fb.</span>
                <div className="bg-[#C9CCCE] h-5 w-[1px]"></div>
                <span className="cursor-pointer">Inst.</span>
                <div className="bg-[#C9CCCE] h-5 w-[1px]"></div>
                <span className="cursor-pointer">Tw.</span>
                <div className="bg-[#C9CCCE] h-5 w-[1px]"></div>
                <span className="cursor-pointer">Be.</span>
            </ul>
           <span className="text-4xl text-[#65696b] cursor-pointer"><RiMenu3Fill /></span> 
        </nav>
    </div>
  )
}

export default NavBar