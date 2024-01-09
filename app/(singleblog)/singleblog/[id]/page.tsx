"use client"


import { useEffect, useState } from "react";
import { useParams } from 'next/navigation';
import { format } from "timeago.js";
import BlogHeroSection from "@/components/blogs/SinglePostChangable";
import Image from "next/image";


interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  priority: string;
  createdAt: Date;
}

const SingleBlog = () => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Blog | null>(null);
  const { id } = useParams();
  const [data, setData] = useState<Blog[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`/api/blogs/${id}`, {
          method: "GET",
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/blogs');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const posts: Blog[] = await response.json();
        setData(posts);
      } catch (error) {
        console.error('Error fetching posts, try again:', error);
      }
    };

    fetchData();
  }, []);

  if (!blog) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  const handleArticleClick = (selectedPost: Blog) => {
    setSelectedArticle(selectedPost);
  };

  const filteredArticles = selectedCategory
    ? data.filter((post) => post.category === selectedCategory)
    : data;

  return (
    <div className="">
      <div className="grid grid-cols-1 xl:grid-cols-6 gap-6">
        <BlogHeroSection blog={selectedArticle || blog} />
        <div className="col-span-2 flex flex-col">
          <div className="h-auto  mb-4 p-4 flex flex-col gap-2 flex-grow">
            <h2 className="text-lg font-bold mb-2">Recent Articles</h2>
            {filteredArticles.map((post) => (
              <div
                key={post.id}
                className="flex gap-4 cursor-pointer"
                onClick={() => handleArticleClick(post)}
              >
                <div className="w-1/3">
                  <img src={post.image} alt="Article"  className="w-full h-16 object-cover rounded-md" />
                </div>
                <div className="w-1/3">
                  <div className="text-sm w-full text-gray-700">{post.title}</div>
                  <p className="text-xs text-gray-500">{format(post.createdAt)}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="h-64 p-4 flex-grow">
            <h2 className="text-lg font-bold mb-2">Categories</h2>
            <div className="flex flex-col gap-2">
              {['Technology', 'Music', 'Web', 'Mobile', 'AI', 'Other'].map((category, index) => (
                <div
                  key={index}
                  className={`flex items-center ${category === selectedCategory ? 'text-blue-500' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4  mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <span className="cursor-pointer">{category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;

