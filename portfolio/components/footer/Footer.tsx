import { CiLocationOn } from 'react-icons/ci'
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { BsTelephoneForward } from "react-icons/bs";



const Footer = () => {
  return (
    <div>
       <div className="about-header bg-blue-500 text-white flex gap-3 flex-col py-10">
            <div className='grid grid-cols-4 px-2'>
              {/* Location */}
              <div className="subscribe">
                <p className='pb-3'>SubScribe</p>
                <div className='flex items-center gap-1'>
                  <input type="text" className='text-black py-1 rounded-sm hover:focus:outline-none px-1' placeholder='Subscribe email ...'/>
                  <button className='bg-black px-3 py-1 rounded-sm'>Send</button>
                </div>
              </div>
              <div className="location flex gap-3">
                <p className='text-4xl'><CiLocationOn /></p>
                <div className="location-text">
                  <p className='text-xl font-bold py-3'>Location</p>
                  <div>
                    <p>Kigali, rwanda</p>
                    <p>Makuza peace Plaza</p>
                  </div>
                </div>
              </div>
              {/* Email ...... */}
              <div className="email flex gap-3">
                <p className='text-4xl'><MdOutlineMarkEmailUnread /></p>
                <div className="location-text">
                  <p className='text-xl font-bold py-3'>Email</p>
                  <div>
                    <p>nplcodes@gmail.com</p>
                  </div>
                </div>
              </div>
              {/* Phone ........... */}
              <div className="phone flex gap-3">
                <p className='text-4xl py-2'><BsTelephoneForward /></p>
                <div className="location-text">
                  <p className='text-xl font-bold py-3'>Telephone</p>
                  <div>
                    <p>+250 780 922 562</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex justify-center items-center pt-10'>
              <hr  className='w-32 h-0.5 bg-slate-400 px-64'/>
            </div>
            <div className='text-xs flex items-center justify-center'>All right reserved 2023 <span className='text-blue-500'>@nplcodes</span></div>
        </div>
    </div>
  )
}

export default Footer