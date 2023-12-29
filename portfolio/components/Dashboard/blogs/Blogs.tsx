import {motion} from 'framer-motion'
import BlogsList from './subcomponents/BlogsList'
import CreateNewBlog from './subcomponents/CreateNewBlog'
import { MdOutlineFilterList } from 'react-icons/md'
import { IoMdAdd } from 'react-icons/io'
import { useState } from 'react'

const Blogs = () => {
  const [renderDiv, setenderDiv] = useState<String>('blogs')
  const handleOnclick = (selected: string) =>{
    setenderDiv(selected)
  }
  const RenderSelectedComponent = () =>{
    switch (renderDiv) {
      case 'blogs':
        return <BlogsList />
        break;
      case 'new':
        return <CreateNewBlog />
        break;

      default:
        return "No selected div"
        break;
    }
  }
  return (
<motion.div
 initial={{opacity: 0, y:-100}}
 animate={{opacity: 1, y:0}}
 transition={{duration:1}}
 className='px-5 z-0'>
<div className="navbar bg-base-100 flex flex-row justify-between pb-10">
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 flex flex-row gap-2">
      <div className="search flex flex-row items-center gap-2">
        <input type="text" placeholder='Search ....' className='py-1 px-2 border-b'/>
      </div>
      <li className='bg-blue-500 rounded-sm text-white hover:bg-black hover:text-white hover:rounded-md'><a>Search</a></li>
    </ul>
  </div>
  <div className="main-content px-1">
    {/* top bar */}
    <div>
          <main className="flex">
              <div onClick={()=> handleOnclick('blogs')} className="menu flex flex-row items-center gap-3 rounded-md cursor-pointer hover:bg-blue-500  hover:text-white hover:font-bold">
                  <span className="text-xl"><MdOutlineFilterList /></span>
              </div>
              <div onClick={()=> handleOnclick('new')} className="menu flex flex-row items-center gap-3 rounded-md cursor-pointer hover:bg-blue-500 hover:font-bold hover:text-white">
                  <span className="text-xl font-bold"><IoMdAdd /></span>
              </div>
          </main>
    </div>
  </div>
</div>
<div className="render">
  {RenderSelectedComponent()}
</div>
</motion.div>
  )
}

export default Blogs