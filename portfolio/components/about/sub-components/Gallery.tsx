"use client"

import Image from "next/image"

const Gallery = () => {
  return (
    <div>
      <div className="flex justify-center items-center py-5">
        <div className="header-personal font-bold">MY GALLERY </div>
    </div> 
    {/* grid grid-cols-3 gap-2 py-10 */}
    <div className="all-skillls-container flex flex-col gap-6 items-center lg:grid lg:grid-cols-2 lg:gap-2 lg:py-10 xl:grid-cols-3  ">
      <Image alt="gallery"  src='/images/me.jpg' width={600} height={600} className="rounded-md"/>
      <Image alt="gallery"  src='/images/hero-pic.png' width={600} height={700} className="rounded-md"/>
      <Image alt="gallery"  src='/images/ga1.jpg' width={600} height={600} className="rounded-md"/>
      <Image alt="gallery"  src='/images/ga2.avif' width={600} height={600} className="rounded-md"/>
    </div>
    </div>
 
  )
}

export default Gallery