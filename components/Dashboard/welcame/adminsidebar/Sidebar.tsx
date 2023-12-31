import Image from "next/image"
import { MdOutlineAddHomeWork, MdWorkspacesOutline } from "react-icons/md";
import { LiaBlogSolid } from "react-icons/lia";
import { PiUsersThree } from "react-icons/pi";
import { TfiGallery } from "react-icons/tfi";
import { VscSettings } from "react-icons/vsc";
import { LuMessagesSquare } from "react-icons/lu";
import { SiSkillshare } from "react-icons/si";
import { useDispatch } from "react-redux";
import { setSelectedComponent } from "@/redux/Slice";




const Sidebar = () => {
    const dispatch = useDispatch();

    const handleSetSelectedComponent = (component: string) => {
      dispatch(setSelectedComponent(component));
    };
  return (
    <div className="fixed">
        <div className="profile pb-10 flex items-center">
            <Image src="/images/me.jpg" alt="profile" width={100} height={100} className="rounded-md"/>
        </div>
        <main className="flex flex-col gap-3">
            <div  onClick={() => handleSetSelectedComponent('Home')} className="menu flex flex-row items-center gap-3 rounded-md cursor-pointer hover:bg-blue-500  hover:text-white hover:font-bold">
                <p className="text-lg"><MdOutlineAddHomeWork /></p>
                <span>Home</span>
            </div>
            <div onClick={() => handleSetSelectedComponent('Blogs')} className="menu flex flex-row items-center gap-3 rounded-md cursor-pointer hover:bg-blue-500 hover:font-bold hover:text-white">
                <p className="text-lg"><LiaBlogSolid /></p>
                <span>Blogs</span>
            </div>
            <div onClick={() => handleSetSelectedComponent('Works')} className="menu flex flex-row items-center gap-3 rounded-md cursor-pointer hover:bg-blue-500 hover:font-bold hover:text-white">
                <p className="text-lg"><MdWorkspacesOutline /></p>
                <span>Works</span>
            </div>
            <div onClick={() => handleSetSelectedComponent('Gallery')} className="menu flex flex-row items-center gap-3 rounded-md cursor-pointer hover:bg-blue-500 hover:font-bold hover:text-white">
                <p className="text-lg"><TfiGallery /></p>
                <span>Gallery</span>
            </div>
            <div onClick={() => handleSetSelectedComponent('Messages')} className="menu flex flex-row items-center gap-3 rounded-md cursor-pointer hover:bg-blue-500 hover:font-bold hover:text-white">
                <p className="text-lg"><LuMessagesSquare /></p>
                <span>Messages</span>
            </div>
            <div onClick={() => handleSetSelectedComponent('Skills')} className="menu flex flex-row items-center gap-3 rounded-md cursor-pointer hover:bg-blue-500 hover:font-bold hover:text-white">
                <p className="text-lg"><SiSkillshare /></p>
                <span>Skills</span>
            </div>
            <div onClick={() => handleSetSelectedComponent('Account')} className="menu flex flex-row items-center gap-3 rounded-md cursor-pointer hover:bg-blue-500 hover:font-bold hover:text-white">
                <p className="text-lg"><VscSettings /></p>
                <span>Account</span>
            </div>
        </main>
    </div>
  )
}

export default Sidebar