"use client"

import { useEffect, useState } from "react";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CiHeart } from 'react-icons/ci';
import { GoCommentDiscussion } from 'react-icons/go';



interface Post {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  priority: string;
}

const Blogs = () => {
  const [data, setdata] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/blogs');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const posts: Post[] = await response.json();
        setdata(posts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div id="blog" className="pt-24 z-0">
      <div className="blog-header bg-slate-300 flex gap-3 flex-col items-center justify-center py-10 bg-transparent">
        <div className='flex items-center justify-center gap-2'>
          <div className='w-4 h-4 bg-blue-400'></div>
          <p className='text-blue-400'>News</p>
          <div className='w-4 h-4 bg-blue-400'></div>
        </div>
        <h1 className='font-bold'>Blogs</h1>
      </div>
      <div className="blogs min-h-[550px] px-5 xl:grid xl:grid-cols-5 xl:gap-10">
        {/* Main Part........................................................................ */}
        <div className="main-blog col-span-3 py-5">
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden rounded-md"
          >
            <img
              src={data[0]?.image}
              alt="Main Blog Post"
              className="w-full h-96 object-cover rounded-md"
            />
          </motion.div>
          <div className="p-2">
            <div className="text-xl mb-1 py-5">
              <p className="mb-2 font-bold">{data[0]?.title}</p>
              <p className="text-sm">
                {data[0]?.description}
                <span className="text-blue-500 cursor-pointer text-sm underline">Read</span>
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
        {/* Side bar articles.............................. */}
        <div className="col-span-2 p-2 lg:px-16 xl:px-1">
          <p className="text-lg font-bold mb-2">Recent articles</p>
          <div className="recent-blogs grid grid-rows-4 gap-2 lg:grid-cols-2 xl:grid-cols-1 xl:justify-start">
          {data?.map(post => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="recent-card flex items-center gap-3 w-full cursor-pointer px-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md"
            >
              <img src={post.image} alt="recent" width={80} height={80} className="rounded-md" />
              <div className="recent-card-text flex flex-col gap-1">
                <p className="font-bold">{post.title}</p>
                <p className="text-xs">25 June 2023</p>
              </div>
            </motion.div>
            ))}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
