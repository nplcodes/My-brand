import Image from "next/image"
import Link from "next/link";
import { AiTwotoneBank } from "react-icons/ai";


const Login = () => {
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
        {/* xl:grid xl:grid-cols-2 xl:px-32  */}
        <div className="min-h-[500px] py-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] lg:grid :grid-cols-2 lg:px-32">
          {/* centered items-center justify-center */}
          <div className="centered items-center justify-center hidden xl:inline">
             <Image src="/images/ts.png" alt="login" width={200} height={300}/>
          </div>
          <div className="field-input px-10 flex flex-col gap-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"> 
                <div className="each-field py-10">
                   <p className="text-2xl font-bold flex justify-center"> Login page</p>
                </div>
                <div className="each-field">
                   <input type="email" placeholder="Email ....." className="input input-bordered w-full max-w-xs focus:outline-none" />
                </div>
                <div className="each-field">
                   <input type="password" placeholder="Password ....." className="input input-bordered w-full max-w-xs focus:outline-none" />
                </div>
                <div className="each-field flex items-center gap-3">
                  <input type="checkbox" className="checkbox bg-blue-500 text-white" />
                  <p>Remember me</p>
                </div>
                <Link href="/admin">
                  <button className="btn w-full bg-blue-500 text-white">Login</button>
                </Link>
               <Link href='/'> <p>Back Home</p></Link>
             </div>
        </div>
    </div>
  )
}

export default Login