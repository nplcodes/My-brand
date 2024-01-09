import { useEffect, useState } from "react";
import { HiOutlineViewfinderCircle } from "react-icons/hi2";
import { MdEditRoad } from "react-icons/md";
import { AiOutlineDeleteRow } from "react-icons/ai";
import ViewSinglePost from "./ViewSinglePost";
import EditSinglePost from "./EditSinglePost";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';



export interface Post {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  priority: string;
}

  const BlogsList = () => {
    const [data, setdata] = useState<Post[]>([]);
    
    // selected action edit or read
    const [selectAction, setSelectedAction] = useState<string>()
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);

    const handleOnclick = (selected: string, post: Post) => {
      setSelectedAction(selected);
      if (selected === 'edit' || selected === 'view' ) {
        setSelectedPost(post);
      }
    };
  const RenderSelectedAction = () =>{
    switch (selectAction) {
      case 'edit':
        return selectedPost ? <EditSinglePost post={selectedPost} /> : null;
        break;
      case 'view':
        return selectedPost ? <ViewSinglePost post={selectedPost} /> : null;
        break;

      default:
        return ""
        break;
    }
  }

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


  const deletePost = async (e:React.MouseEvent<HTMLButtonElement>, postId: number) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/blogs/${postId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          // You might need to include additional headers, such as authorization headers.
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete post');
      }

      // Update the state by removing the deleted post
      setdata((prevData) => prevData.filter((post) => post.id !== postId));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };



  return (
        <div id="fuck-2">
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
                            <div className="flex gap-2">
                              <ScrollLink to="fuck-1" smooth={true} duration={800}>
                                <button onClick={()=> handleOnclick('view', post)} className='bg-blue-900 text-white px-1 py-1 rounded-sm'><HiOutlineViewfinderCircle /></button>
                              </ScrollLink>
                              <ScrollLink to="fuck-1" smooth={true} duration={800}>
                                <button onClick={()=> handleOnclick('edit', post)} className='bg-green-900 text-white px-1 py-1 rounded-sm'><MdEditRoad /></button>
                              </ScrollLink>
                              <button onClick={(e) =>deletePost(e,post.id)} className='bg-red-900 text-white px-1 py-1 rounded-sm'><AiOutlineDeleteRow /></button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <div className="h-screen py-64 " id="fuck-1">
                  {RenderSelectedAction()}
                </div>
        </div>
  )
}

export default BlogsList