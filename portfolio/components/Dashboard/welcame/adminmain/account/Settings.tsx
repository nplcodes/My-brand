"use client"

import Image from "next/image"
import { HiOutlineFolderDownload } from "react-icons/hi";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import Topbar from "../../admintopbar/Topbar";
import { IoEyeOutline } from "react-icons/io5";
//<IoEyeOutline />




const Account = () => {
  return (
    <div className="px-32">
      <div className="flex justify-center items-center py-5 gap-10">
        <div className="header-Account font-bold">Account information</div>
        <div className="main-content px-1">
          <Topbar />
        </div>
      </div>
      {/* Info page */}
      <div className="info">
        <p className="font-bold py-3">Personal info</p>
        <div className="profile">
          {/* flex flex-row justify-between items-center gap-3 py-2 px-5  */}
          <div className="image-names flex justify-between xl:flex-row xl:items-center xl:gap-3 xl:py-2 xl:px-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] ">
            <div className="flex items-center gap-3" >
              <Image alt="avatar" src="/images/hero-pic.png" height={50} width={50} className="rounded-full"/>
              <div className="flex flex-col gap-1">
                <p className="text-md font-bold">NP Leon</p>
                <p className="text-xs text-blue-500">Web Developer</p>
              </div>
            </div>
            {/*   */}
          </div>
        </div>
        {/* names */}
        <div className="row-1 pt-8 xl:grid xl:grid-cols-2 xl:gap-3 xl:pt-5">
          <div>
          <p className="pb-2 text-slate-500">First Name</p>
            <div className=" py-2 rounded-sm px-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                <input type="text" placeholder="First name" className=""/>
            </div>
          </div>
          <div>
            <p className="pb-2 text-slate-500">Second Name</p>
            <div className=" py-2 rounded-sm px-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <input type="text" placeholder="Second name" className=""/>
            </div>
          </div>
        </div>
        {/* email and phone */}
        <div className="row-1 pt-5 xl:grid xl:grid-cols-2 xl:gap-3">
          <div>
          <p className="pb-2 text-slate-500">Email</p>
            <div className=" py-2 rounded-sm px-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <input type="email" placeholder="Email address" />
            </div>
          </div>
          <div>
            <p className="pb-2 text-slate-500">Phone</p>
            <div className=" py-2 rounded-sm px-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <input type="text" placeholder="Telephone number" className=""/>
            </div>
          </div>
        </div>

        {/* Pysical address */}
        <p className="pt-5 font-bold">Physical address</p>
        <div className="row-1 pt-5 xl:grid xl:grid-cols-2 xl:gap-3">
          <div>
          <p className="pb-2 text-slate-500">Country</p>
            <div className=" py-2 rounded-sm px-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                <select>
                    <option value="">Rwanda</option>
                    <option value="">U.S</option>
                    <option value="">U.K</option>
                    <option value="">Kenya</option>
                    <option value="">Ghana</option>
                </select>
            </div>
          </div>
          <div>
            <p className="pb-2 text-slate-500">City</p>
            <div className=" py-2 rounded-sm px-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                <select>
                        <option value="">Kigali</option>
                        <option value="">Musanze</option>
                        <option value="">Butare</option>
                    </select>
            </div>
          </div>
        </div>
        <div className="row-1 pt-5 xl:grid xl:grid-cols-2 xl:gap-3">
          <div>
          <p className="pb-2 text-slate-500">Address</p>
            <div className=" py-2 rounded-sm px-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                <input type="text" placeholder="Route, address"/>
            </div>
          </div>
          <div>
            <p className="pb-2 text-slate-500">Postal Code</p>
            <div className=" py-2 rounded-sm px-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                <input type="number" placeholder="Post code" />
            </div>
          </div>
        </div>
     {/* save button */}
        <div className="mt-5">
            <button className="bg-blue-500 text-white px-2 py-1 self-center w-[20%] rounded-md">Save</button>
        </div>
      </div>
    </div>
  )
}
export default Account