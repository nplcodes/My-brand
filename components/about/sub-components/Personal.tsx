"use client"

import Image from "next/image"
import { HiOutlineFolderDownload } from "react-icons/hi";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";




const Personal = () => {
  return (
    <div>
      <div className="flex justify-center items-center py-5">
        <div className="header-personal font-bold">GENERAL INFORMATION</div>
      </div>
      {/* Info page */}
      <div className="info">
        <p className="font-bold py-3">Personal info</p>
        <div className="profile">
          {/* flex flex-row justify-between items-center gap-3 py-2 px-5  */}
          <div className="image-names flex justify-between xl:flex-row xl:items-center xl:gap-3 xl:py-2 xl:px-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] ">
            <div className="flex items-center gap-3" >
              <Image alt="avatar" src="/images/mee_1.png" height={50} width={50} className="rounded-full"/>
              <div className="flex flex-col gap-1">
                <p className="text-md font-bold">NP Leon</p>
                <p className="text-xs text-blue-500">Web Developer</p>
              </div>
            </div>
            {/*   */}
            <div className="pt-5 px-5 xl:flex xl:justify-between xl:items-center xl:px-1 xl:w-64 xl:rounded-md xl:py-1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <p className="text-slate-400 hidden xl:inline">Download CV</p>
              <p className="text-4xl cursor-pointer text-blue-500 rounded-md"><HiOutlineFolderDownload /></p>
            </div>
          </div>
        </div>
        {/* names */}
        <div className="row-1 pt-8 xl:grid xl:grid-cols-2 xl:gap-3 xl:pt-5">
          <div>
          <p className="pb-2 text-slate-500">First Name</p>
            <div className=" py-2 rounded-sm px-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">Leon Pierre</div>
          </div>
          <div>
            <p className="pb-2 text-slate-500">Second Name</p>
            <div className=" py-2 rounded-sm px-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">Ndayishimiye</div>
          </div>
        </div>
        {/* email and phone */}
        <div className="row-1 pt-5 xl:grid xl:grid-cols-2 xl:gap-3">
          <div>
          <p className="pb-2 text-slate-500">Email</p>
            <div className=" py-2 rounded-sm px-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">nplcodes@gmail.com</div>
          </div>
          <div>
            <p className="pb-2 text-slate-500">Phone</p>
            <div className=" py-2 rounded-sm px-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">+250 780 922 562</div>
          </div>
        </div>

        {/* Pysical address */}
        <p className="pt-5 font-bold">Physical address</p>
        <div className="row-1 pt-5 xl:grid xl:grid-cols-2 xl:gap-3">
          <div>
          <p className="pb-2 text-slate-500">Country</p>
            <div className=" py-2 rounded-sm px-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">Rwanda</div>
          </div>
          <div>
            <p className="pb-2 text-slate-500">City</p>
            <div className=" py-2 rounded-sm px-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">Kigali</div>
          </div>
        </div>
        <div className="row-1 pt-5 xl:grid xl:grid-cols-2 xl:gap-3">
          <div>
          <p className="pb-2 text-slate-500">Address</p>
            <div className=" py-2 rounded-sm px-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">K405 Ave, Jari Nyamirambo</div>
          </div>
          <div>
            <p className="pb-2 text-slate-500">Postal Code</p>
            <div className=" py-2 rounded-sm px-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">233 440</div>
          </div>
        </div>
        {/* Interest */}
        <p className="pt-8 font-bold">Interest</p>
        <div className="row-1 pt-5 xl:grid xl:grid-cols-2 xl:gap-3">
          <div>
          <p className="pb-2 text-slate-500">#Social media</p>
            <div className="flex justify-center items-center xl:py-2 xl:rounded-sm xl:px-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <ul className="flex gap-5 items-center pt-5">
                  <span className="cursor-pointer text-blue-500"><FaLinkedinIn /></span>
                  <div className="bg-blue-500 h-3 w-[1px]"></div>
                  <span className="cursor-pointer text-blue-500"><FaInstagram /></span>
                  <div className="bg-blue-500 h-3 w-[1px]"></div>
                  <span className="cursor-pointer text-blue-500"><FaFacebookF /></span>
                  <div className="bg-blue-500 h-3 w-[1px]"></div>
                  <span className="cursor-pointer text-blue-500">Be.</span>
              </ul>
            </div>
          </div>
          <div className="pt-5 flex flex-col">
            <p className="pb-2 text-slate-500"> Hobbies</p>
            <div className="xl:py-2 xl:rounded-sm xl:px-3 xl:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <ul className="flex gap-5 items-center justify-center flex-wrap">
                  <span className="cursor-pointer">Coding</span>
                  <div className="bg-[#C9CCCE] h-5 w-[1px]"></div>
                  <span className="cursor-pointer">Photography</span>
                  <div className="bg-[#C9CCCE] h-5 w-[1px]"></div>
                  <span className="cursor-pointer">FootBal & BasketBal</span>
                  <div className="bg-[#C9CCCE] h-5 w-[1px]"></div>
                  <span className="cursor-pointer">Learning</span>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Personal