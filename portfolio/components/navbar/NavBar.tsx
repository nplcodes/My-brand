import { RiMenu3Fill } from "react-icons/ri";
import Image from "next/image";


const NavBar = () => {
  return (
    <div className='flex justify-between items-center bg-[#f0f4f765]  py-5 px-5'>
        <div  className="logo text-4xl font-bold cursor-pointer"><Image alt="logo" width={60} height={60} src='/images/LOGO.png' /></div>
        <nav className='navbar-menu flex gap-10'>
            <ul className="flex gap-5 items-center">
                <span className="cursor-pointer hover:text-blue-500">Fb.</span>
                <div className="bg-[#C9CCCE] h-5 w-[1px]"></div>
                <span className="cursor-pointer hover:text-blue-500">Inst.</span>
                <div className="bg-[#C9CCCE] h-5 w-[1px]"></div>
                <span className="cursor-pointer hover:text-blue-500">Tw.</span>
                <div className="bg-[#C9CCCE] h-5 w-[1px]"></div>
                <span className="cursor-pointer hover:text-blue-500">Be.</span>
            </ul>
           <span className="text-4xl text-[#65696b] cursor-pointer hover:text-red-500"><RiMenu3Fill /></span> 
        </nav>
    </div>
  )
}

export default NavBar