import { MdOutlineFilterList } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";



const Topbar = () => {
  return (
    <div>
        <main className="flex">
            <div className="menu flex flex-row items-center gap-3 rounded-md cursor-pointer hover:bg-blue-500  hover:text-white hover:font-bold">
                <span className="text-xl"><MdOutlineFilterList /></span>
            </div>
            <div className="menu flex flex-row items-center gap-3 rounded-md cursor-pointer hover:bg-blue-500 hover:font-bold hover:text-white">
                <span className="text-xl font-bold"><IoMdAdd /></span>
            </div>
        </main>
    </div>
  )
}

export default Topbar