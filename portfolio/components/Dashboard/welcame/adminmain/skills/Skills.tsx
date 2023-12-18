"use client"


import { useState } from "react";
import SkillsList from "./subcomponents/SkillsList";
import NewSkill from "../Forms/NewSkill";
import { MdOutlineFilterList } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";


const Skills = () => {
  const [renderDiv, setenderDiv] = useState<String>('skills')
  const handleOnclick = (selected: string) =>{
    setenderDiv(selected)
  }
  const RenderSelectedComponent = () =>{
    switch (renderDiv) {
      case 'skills':
        return <SkillsList />
        break;
      case 'new':
        return <NewSkill />
        break;

      default:
        return "No selected div"
        break;
    }
  }
  return (
    <div>
        <div className="flex justify-center items-center py-5 gap-10">
          <div className="header-personal">SKILLS + KNOWLDGE</div>
          <div className="main-content px-1">
          <div>
            <main className="flex">
                <div onClick={()=> handleOnclick('skills')} className="menu flex flex-row items-center gap-3 rounded-md cursor-pointer hover:bg-blue-500  hover:text-white hover:font-bold">
                    <span className="text-xl"><MdOutlineFilterList /></span>
                </div>
                <div onClick={()=> handleOnclick('new')} className="menu flex flex-row items-center gap-3 rounded-md cursor-pointer hover:bg-blue-500 hover:font-bold hover:text-white">
                    <span className="text-xl font-bold"><IoMdAdd /></span>
                </div>
            </main>
          </div>
          </div>
       </div>
       <div className="wrapper">
        {RenderSelectedComponent()}
       </div>
    </div>
  )
}

export default Skills