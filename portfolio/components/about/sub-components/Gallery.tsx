"use client"

import Image from "next/image"

const Gallery = () => {
  return (
    <div>
      <div className="flex justify-center items-center py-5">
        <div className="header-personal">MY GALLERY </div>
    </div> 
    <div className="all-skillls-container grid grid-cols-3 gap-2 py-10">
      <Image alt="gallery"  src='/images/me.jpg' width={600} height={600} className="rounded-md"/>
      <Image alt="gallery"  src='/images/hero-pic.png' width={600} height={700} className="rounded-md"/>
      <Image alt="gallery"  src='/images/ga1.jpg' width={600} height={600} className="rounded-md"/>
      <Image alt="gallery"  src='/images/ga2.avif' width={600} height={600} className="rounded-md"/>

    </div>
    </div>
 
  )
}

export default Gallery