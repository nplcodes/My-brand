// BlogHeroSection.tsx
import Image from 'next/image';
import React from 'react';

interface BlogHeroSectionProps {
  blog: {
    image: string;
    title: string;
    description: string;
  };
}

const BlogHeroSection: React.FC<BlogHeroSectionProps> = ({ blog }) => {
  return (
    <div className="col-span-4 h-auto flex items-center justify-center">
      {blog && (
        <div className="flex flex-col">
          {/* Blog Image */}
          <Image src={blog.image} alt={blog.title} width={100} height={96} className="w-full h-96 object-cover rounded-md mb-4" />

          {/* Description Text */}
          <h1 className="text-2xl text-blue-500 pb-6">{blog.title}</h1>
          <p className="px-4">{blog.description} </p>
        </div>
      )}
    </div>
  );
};

export default BlogHeroSection;
