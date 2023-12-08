import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa"

const Contact = () => {
  return (
    <div id="contact">
        <div className="about-header bg-slate-300 flex gap-3 flex-col items-center justify-center py-10 bg-transparent">
            <div className='flex items-center justify-center gap-2'>
                <div className='w-4 h-4 bg-blue-400'></div>
                  <p className='text-blue-400'>Talk to me</p>
                <div className='w-4 h-4 bg-blue-400'></div>
            </div>
            <h1 className='font-bold'>Contact Me</h1>
        </div>
        <div className="blogs grid grid-cols-3 gap-10 min-h-[550px] py-5">
            <div className="links flex flex-col items-center">
                <div className="social-icons py-4">
                    <p className="pb-8 font-bold">Let's talk</p>
                    <ul className="flex gap-5 items-center">
                        <span className="cursor-pointer text-blue-500"><FaLinkedinIn /></span>
                        <div className="bg-blue-500 h-3 w-[1px]"></div>
                        <span className="cursor-pointer text-blue-500"><FaInstagram /></span>
                        <div className="bg-blue-500 h-3 w-[1px]"></div>
                        <span className="cursor-pointer text-blue-500"><FaFacebook /></span>
                        <div className="bg-blue-500 h-3 w-[1px]"></div>
                        <span className="cursor-pointer text-blue-500">Be.</span>
                    </ul>
                </div>
                <p>@nplcodes</p>
            </div>
            <div className="form col-span-2">
                <p className="text-xl mb-10">Send text message</p>
                <div className="form">
                    <div className="input-fields grid grid-cols-2 gap-6 py-3">
                        <input type="text" placeholder="johnson" className="py-2 px-2 rounded-md focus:outline-none border-b"/>
                        <input type="text" placeholder="Khaled" className="py-2 px-2 rounded-md focus:outline-none border-b"/>
                    </div>
                    <div className="input-fields grid grid-cols-2 gap-6 py-3">
                        <input type="email" placeholder="example@gmail.com" className="py-2 px-2 rounded-md focus:outline-none border-b"/>
                        <input type="text" placeholder="+250 780 922 562" className="py-2 px-2 rounded-md focus:outline-none border-b"/>
                    </div>
                </div>
                <div className="relative">
                    <textarea name="" id="" cols={90} rows={10} className="absolute border rounded-sm right-0 left-0 focus:outline-none px-2" placeholder="Type in message ......."/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact