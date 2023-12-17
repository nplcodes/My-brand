import Blogs from '../../blogs/Blogs'
import Topbar from '../admintopbar/Topbar'
import Gallery from './gallery/Gallery'
import Works from './works/Works'
import Home from './home/Home'
import Account from './account/Settings'

const Main = () => {
  return (
    <div className='border h-screen relative'>
        <div className='py-2 border px-1 fixed w-full flex flex-col gap-5 z-100 bg-gray-300'>
          <p className='font-bold'>ADMIN PAGE</p>
          <div className="main-content px-1">
           <Topbar />
        </div>
        </div>
        <div className="content z-0 mt-32">
            <Blogs />
            {/* <Works /> */}
            {/* <Gallery /> */}
            {/* <Home /> */}
            {/* <Account /> */}
        </div>
    </div>
  )
}

export default Main