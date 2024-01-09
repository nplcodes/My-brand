"use client"

import { useState } from "react";
import Photos from "./subcomponents/Photos";
import NewGallery from "../Forms/NewGallery";
import { MdOutlineFilterList } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";


const Gallery = () => {
  const [renderDiv, setenderDiv] = useState<String>('gallery')
  const handleOnclick = (selected: string) =>{
    setenderDiv(selected)
  }
  const RenderSelectedComponent = () =>{
    switch (renderDiv) {
      case 'gallery':
        return <Photos />
        break;
      case 'new':
        return <NewGallery />
        break;

      default:
        return "No selected div"
        break;
    }
  }
  return (
    <div>
      <div className="flex justify-center items-center gap-10 py-5">
        <div className="header-personal font-bold">MY GALLERY</div>
        <div className="main-content px-1">
          <div>
            <main className="flex">
                <div onClick={()=> handleOnclick('gallery')} className="menu flex flex-row items-center gap-3 rounded-md cursor-pointer hover:bg-blue-500  hover:text-white hover:font-bold">
                    <span className="text-xl"><MdOutlineFilterList /></span>
                </div>
                <div onClick={()=> handleOnclick('new')} className="menu flex flex-row items-center gap-3 rounded-md cursor-pointer hover:bg-blue-500 hover:font-bold hover:text-white">
                    <span className="text-xl font-bold"><IoMdAdd /></span>
                </div>
            </main>
          </div>
        </div>
    </div> 
    {/* grid grid-cols-3 gap-2 py-10 */}
    <div className="render">
      {RenderSelectedComponent()}
    </div>
    </div>
 
  )
}

export default Gallery