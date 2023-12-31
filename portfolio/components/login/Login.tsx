'use client'

import { error } from "console";
import { signIn } from "next-auth/react";
import Image from "next/image"
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
  const [loading, setLoding]= useState<boolean>(false)
  const router = useRouter()
const [email, setEmail] = useState<string>()
const [password, setPassword] = useState<string>()

const handleEmailOnchange = (e:React.ChangeEvent<HTMLInputElement>) =>{
  e.preventDefault()
  setEmail(e.target.value)
}

const handlePasswordOnchange = (e:React.ChangeEvent<HTMLInputElement>) =>{
  e.preventDefault()
  setPassword(e.target.value)
}


const formSubmit= async(e: React.FormEvent<HTMLFormElement>) =>{
  e.preventDefault()
  setLoding(true)
  const signinData = await signIn('credentials', {
    email: email,
    password: password,
    redirect: false
  });

  if(signinData?.error){
    setTimeout(() => {
      setLoding(true)
    }, 5000);
    setLoding(false)
    toast("Invalid credentials (:)")
  }else{
    setLoding(false)
    router.refresh()
    router.push('/admin')
  }
}


  return (
    <div className="login min-h-[550px] px-5 xl:px-16">
        <div className="about-header bg-slate-300 flex gap-3 flex-col items-center justify-center py-10 bg-transparent">
            <div className='flex items-center justify-center gap-2'>
                <div className='w-4 h-4 bg-blue-400'></div>
                  <p className='text-blue-400'>My Account</p>
                <div className='w-4 h-4 bg-blue-400'></div>
            </div>
            {/* font-bold */}
        <h1 className='font-bold'>Login</h1>
        </div>
        <div className="min-h-[500px] py-5 xl:grid xl:grid-cols-2 xl:px-32 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
          <div className="centered items-center justify-center  hidden xl:flex">
             <Image src="/images/login-svg.svg" alt="login" width={400} height={800}/>
          </div>
          <form onSubmit={formSubmit} className="field-input px-10 flex flex-col gap-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"> 
                <div className="each-field py-10">
                   <p className="text-2xl font-bold flex justify-center"> Login page</p>
                </div>
                <div className="each-field">
                   <input onChange={handleEmailOnchange} value={email} type="email" placeholder="Email ....." className="input input-bordered w-full max-w-xs focus:outline-none" />
                </div>
                <div className="each-field">
                   <input onChange={handlePasswordOnchange} value={password} type="password" placeholder="Password ....." className="input input-bordered w-full max-w-xs focus:outline-none" />
                </div>
                <div className="each-field flex items-center gap-3">
                  <input type="checkbox" className="checkbox bg-blue-500 text-white" />
                  <p>Remember me</p>
                </div>
                {loading ? (
                  <div>
                    <button type="submit" className="btn w-full bg-blue-500 text-white">
                      <span className="loading loading-spinner loading-xs"></span>
                    </button>
                  </div>
                ): (
                  <div>
                    <button type="submit" className="btn w-full bg-blue-500 text-white">Login</button>
                  </div>
                )
                }
               <Link href='/'> <p>Back Home</p></Link>
          </form>
        </div>
        <ToastContainer />
    </div>
  )
}

export default Login



