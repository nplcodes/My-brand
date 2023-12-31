"use client"


import { useEffect, useState } from "react";
import { useParams } from 'next/navigation';
import Image from "next/image";

interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
  content: string;
}

const SingleBlog = () => {
  const {id} = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    // Fetch blog data based on the id
    const fetchBlog = async () => {
      try {
        const response = await fetch(`/api/blogs/${id}`,{
            method: "GET"
        });
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const blogData: Blog = await response.json();
        setBlog(blogData);
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };

    if (id) {
      fetchBlog();
    }
  }, [id]);

  console.log("heeeeeeeeeeeeeeeeee", blog)

  if (!blog) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-32">
      {/* Top hero section */}
      <div className="relative h-64 lg:h-auto lg:col-span-2">
        {/* Assuming the blog has an image for the hero section */}
        <img src={blog.image} alt={blog.title} layout="fill" objectFit="cover" />
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <h1 className="text-4xl font-bold">{blog.title}</h1>
        </div>
      </div>

      {/* Main content section */}
      <div>
        {/* Blog image */}
        <div className="mb-8">
          <img src={blog.image} alt={blog.title} width={600} height={400} />
        </div>

        {/* Description */}
        <div>
          <p className="text-gray-700 text-lg">{blog.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
