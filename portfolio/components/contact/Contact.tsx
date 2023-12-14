import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa"

const Contact = () => {
  return (
    <div id="contact" className="pt-24 ">
        <div className="about-header bg-slate-300 flex gap-3 flex-col items-center justify-center py-10 bg-transparent">
            <div className='flex items-center justify-center gap-2'>
                <div className='w-4 h-4 bg-blue-400'></div>
                  <p className='text-blue-400'>Talk to me</p>
                <div className='w-4 h-4 bg-blue-400'></div>
            </div>
            <h1 className='font-bold'>Contact Me</h1>
        </div>
        <div className="blogs min-h-[800px] xl:grid xl:grid-cols-3 xl:gap-10 xl:min-h-[550px] xl:py-5 xl:p-10 ">
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
            <div className="p-10 form col-span-2 lg:pb-10 lg:px-32 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                <p className="text-xl mb-10">Send text message</p>
                <div className="form">
                    {/* grid grid-cols-2 gap-6 py-3 */}
                    <div className="input-fields flex flex-col gap-2 lg:grid lg:grid-cols-2 lg:gap-6 lg:py-3 xl:grid xl:grid-cols-2 xl:gap-6 xl:py-3 ">
                        <input type="text" placeholder="Surname ...." className="py-2 px-2 rounded-md focus:outline-none border-b"/>
                        <input type="text" placeholder="Name ...." className="py-2 px-2 rounded-md focus:outline-none border-b"/>
                    </div>
                    {/*  grid grid-cols-2 gap-6 */}
                    <div className="input-fields py-3 pb-5 flex flex-col gap-2 lg:grid lg:grid-cols-2 lg:gap-6 lg:py-3 xl:grid xl:grid-cols-2 xl:gap-6 xl:py-3">
                        <input type="email" placeholder="Email address" className="py-2 px-2 rounded-md focus:outline-none border-b"/>
                        <input type="text" placeholder="Telephone number" className="py-2 px-2 rounded-md focus:outline-none border-b"/>
                    </div>
                    {/* text area */}
                    <div className="text-area py-3 flex flex-col gap-3 ">
                        <textarea placeholder="Your message ...." rows={5} className="rounded-md focus:outline-none border px-2 py-2"/>
                        <button type="submit" className="py-2 px-2 rounded-md focus:outline-none border bg-blue-300 text-white hover:bg-blue-500">Send</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact