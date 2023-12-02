import Image from "next/image"

const Blogs = () => {
  return (
    <div>
        <div className="about-header bg-slate-300 flex gap-3 flex-col items-center justify-center py-10">
            <div className='flex items-center justify-center gap-2'>
                <div className='w-4 h-4 bg-blue-400'></div>
                  <p className='text-blue-400'>News</p>
                <div className='w-4 h-4 bg-blue-400'></div>
            </div>
            <h1 className='font-bold'>Blogs</h1>
        </div>
        <div className="blogs grid grid-cols-4 min-h-[550px]">
          {/* Main part */}
          <div className="main-blog col-span-3">
            <div className="grid grid-rows-4">
              <p>Hello</p>
              <div>Description</div>
            </div>
          </div>
          <div>
            <p>RECENT ARTICLES</p>
            <div className="recent-blogs grid grid-rows-4">
              <p>Recent</p>
              <p>Recent</p>
              <p>Recent</p>
              <p>Recent</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Blogs