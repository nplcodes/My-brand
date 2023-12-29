"use client"

import Image from "next/image"
import { motion } from 'framer-motion';
import { useEffect, useState } from "react";


interface photosprops{
  image: string,
  id: number
}

const Gallery = () => {
  const [data, setdata] = useState<photosprops[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/gallery');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const photos: photosprops[] = await response.json();
        setdata(photos);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
              <div className="all-skillls-container flex flex-col gap-6 items-center lg:grid lg:grid-cols-2 lg:gap-2 lg:py-10 xl:grid-cols-3  ">
                {data?.map(post => (
                    <motion.div 
                    whileHover={{scale:1.1}}
                    transition={{duration:0.5}}
                    className="single-image cursor-pointer">
                    <img alt="gallery"  src={post.image} width={600} height={600} className="rounded-md"/>
                    </motion.div>
                ))}
          </div>
    </div>
  )
}

export default Gallery