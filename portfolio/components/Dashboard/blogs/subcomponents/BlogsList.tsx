import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  priority: string;
}

  const BlogsList = () => {
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
<div>
  {data?.length === 0 ? (
          <p>No data found</p>
        ) : (
          <div className="all-blogs space-y-3">
            <div className="card card-compact bg-base-100 shadow-xl xl:grid xl:grid-cols-3">
              {data?.map(post => (
                <div key={post.id} className="card-body w-72 h-full">
                  <figure><img src={post.image} alt={post.title} /></figure>
                  <h2 className="card-title">{post.title}</h2>
                  <p>{post.description}</p>
                  <div className="lk-comm flex flex-row gap-2 items-center justify-between">
                    <div className="comments">
                      <button className='bg-blue-900 text-white px-1 py-1 rounded-sm'>Manage</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
    </div>
  )
}

export default BlogsList