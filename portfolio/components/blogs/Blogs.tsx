import Image from "next/image"
import { CiHeart } from "react-icons/ci";
import { GoCommentDiscussion } from "react-icons/go";



const Blogs = () => {
  return (
    // hidden
    <div id="blog" className="pt-24">
        <div className="blog-header bg-slate-300 flex gap-3 flex-col items-center justify-center py-10 bg-transparent">
            <div className='flex items-center justify-center gap-2'>
                <div className='w-4 h-4 bg-blue-400'></div>
                  <p className='text-blue-400'>News</p>
                <div className='w-4 h-4 bg-blue-400'></div>
            </div>
            <h1 className='font-bold'>Blogs</h1>
        </div>
          <p className="px-5 font-bold">23 jun, 2023</p>
          {/* grid grid-cols-4 gap-10 */}
        <div className="blogs min-h-[550px] px-5">
        {/* Main part */}
        <div className="main-blog col-span-3 py-5">
          <img
            src="https://source.unsplash.com/800x600/?nature,water"
            alt="Main Blog Post"
            className="w-full h-96 object-cover rounded-md"
          />
          <div className="p-2">
            <div className=" text-xl mb-1 py-5">
              <p className="mb-2 font-bold">Coding stack for 2026</p>
              <p className="text-sm">
                hat is Lorem Ipsum?
                 Letraset sheets containing 
                  Lorem Ipsum passages, and more recently with.... <span className="text-blue-500 cursor-pointer text-sm underline">Read</span>
              </p>
            </div>
            <div className="text-gray-500 text-sm">
              <div className="flex items-center gap-3">
                 <p className="text-xl cursor-pointer"><CiHeart /></p>
                 <p className="cursor-pointer"><GoCommentDiscussion /></p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Articles */}
        <div className="col-span-1 p-2">
          <p className="text-lg font-bold mb-2">Recent articles</p>
          <div className="recent-blogs grid grid-rows-4 gap-2">
            <div className="recent-card flex items-center gap-3 cursor-pointer px-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md">
              <Image src="/images/linux-blog.jpg" alt="recent" width={80} height={80} className="rounded-md"/>
              <div className="recent-card-text flex flex-col gap-1">
                <p className="font-bold">Best linux for devs</p>
                <p className="text-xs">25 june 2023</p>
              </div>
            </div>

            <div className="recent-card flex items-center gap-3 cursor-pointer px-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md">
              <Image src="/images/ngnix-blog.webp" alt="recent" width={80} height={80} className="rounded-md"/>
              <div className="recent-card-text flex flex-col gap-1">
                <p className="font-bold">Why nginx?</p>
                <p className="text-xs">10 May 2023</p>
              </div>
            </div>

            <div className="recent-card flex items-center gap-3 px-5  cursor-pointer shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md">
              <Image src="/images/vercel-blog.webp" alt="recent" width={80} height={80} className="rounded-md"/>
              <div className="recent-card-text flex flex-col gap-1">
                <p className="font-bold">Versel for next 14.0</p>
                <p className="text-xs">10 Aug 2022</p>
              </div>
            </div>

            <div className="recent-card flex items-center gap-3 cursor-pointer px-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md">
              <Image src="/images/hero-pic.png" alt="recent" width={80} height={80} className="rounded-md"/>
              <div className="recent-card-text flex flex-col gap-1">
                <p className="font-bold">Popular stack</p>
                <p className="text-xs">25 june 2023</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
  
    </div>
  )
}

export default Blogs