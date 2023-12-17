"use client"

import Image from "next/image"
import { motion } from 'framer-motion';
import { FaUsers } from "react-icons/fa6";
import { LiaBlogSolid } from "react-icons/lia";
import { MdWorkspacesOutline } from "react-icons/md";
import { SiSkillshare } from "react-icons/si";
import { TfiGallery } from "react-icons/tfi";



const Home = () => {
  return (
    <div>
        <div className="flex justify-center items-center py-5">
          <div className="header-personal">Dashboard</div>
       </div>
       <div className="wrapper">
        {/* grid grid-cols-3 px-32 py-10 */}
        <div className="all-skillls-container lg:grid lg:grid-cols-2 lg:px-32 lg:gap-2 lg:py-10 xl:grid-cols-2">
        <div className="one-skill grid grid-cols-4 gap-3  py-10 px-5 rounded-tl-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
            <p className="text-4xl"><FaUsers /></p>
            <div className="title-percent-bar col-span-3">
              <div className="title-percent flex flex-col gap-3 pb-2">
                <div className="self-center">Users</div>
                <div className="self-center">95</div>
              </div>
            </div>
          </div>

          <div className="one-skill grid grid-cols-4 gap-3  py-10 px-5 rounded-tl-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
            <p className="text-4xl"><LiaBlogSolid /></p>
            <div className="title-percent-bar col-span-3">
              <div className="title-percent flex flex-col gap-3 pb-2">
                <div className="self-center">Blogs</div>
                <div className="self-center">10</div>
              </div>
            </div>
          </div>


          <div className="one-skill grid grid-cols-4 gap-3  py-10 px-5 rounded-tl-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
            <p className="text-4xl"><MdWorkspacesOutline /></p>
            <div className="title-percent-bar col-span-3">
              <div className="title-percent flex flex-col gap-3 pb-2">
                <div className="self-center">My works</div>
                <div className="self-center">4</div>
              </div>
            </div>
          </div>

          <div className="one-skill grid grid-cols-4 gap-3  py-10 px-5 rounded-tl-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
            <p className="text-4xl"><SiSkillshare /></p>
            <div className="title-percent-bar col-span-3">
              <div className="title-percent flex flex-col gap-3 pb-2">
                <div className="self-center">Skills</div>
                <div className="self-center">10</div>
              </div>
            </div>
          </div>

          <div className="one-skill grid grid-cols-4 gap-3  py-10 px-5 rounded-tl-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
            <p className="text-4xl"><TfiGallery /></p>
            <div className="title-percent-bar col-span-3">
              <div className="title-percent flex flex-col gap-3 pb-2">
                <div className="self-center">Galley</div>
                <div className="self-center">15</div>
              </div>
            </div>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Home