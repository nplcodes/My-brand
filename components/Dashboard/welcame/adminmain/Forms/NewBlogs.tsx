import axios from 'axios';
import { useState } from 'react';
import { AiOutlineFileImage } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface PostInfo {
  title: string;
  description: string;
  category: string;
  priority: string;
  image: string;
}

const CLOUD_NAME = 'dlrivoh1v';
const UPLOAD_PRESET = 'my-brand-images-store';

const NewBlogs = () => {
  const notify = () => toast(' New Post i successfully created!');
  const [photo, setPhoto] = useState<File | null | ''>('');
  const initialPostInfo: PostInfo = {
    title: '',
    description: '',
    category: '',
    priority: '',
    image:  '',
  };
  const [postInfo, setPostInfo] = useState<PostInfo>(initialPostInfo);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setPostInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setPhoto(e.target.files[0]);
    }
  };

  const uploadImage = async () => {
    try {
      if (!photo) return null;

      const formData = new FormData();

      formData.append('file', photo);
      formData.append("upload_preset", UPLOAD_PRESET);

      const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        throw new Error('Image upload failed');
      }

      const data = await res.json();
      const imageUrl = data.secure_url;

      // Clear the photo state after successful upload
      setPhoto(null);

      return imageUrl;
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!photo || !postInfo.title || !postInfo.description || !postInfo.category || !postInfo.priority){
        return toast("Fill all fields!")
    }

    try {
      const imageUrl = await uploadImage();

      const response = await axios.post('/api/blogs', {
        ...postInfo,
        image: imageUrl,
      });

      if (response.status === 200) {
        const data = response.data;
        setPostInfo(initialPostInfo);
        notify();
      } else {
        toast('Failed to create post')
      }
    } catch (error) {
      console.error('Error creating post:', error);
      toast.error('Failed to create post');
    }
  };

  return (
    <div className='px-32'>
      <div className="p-10 form col-span-2 lg:pb-10 lg:px-32 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
        <p className="text-xl mb-10">Create New blog</p>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-fields flex flex-col gap-2 lg:grid lg:grid-cols-2 lg:gap-6 lg:py-3 xl:grid xl:grid-cols-2 xl:gap-6 xl:py-3 ">
            <input
              type="text"
              name='title'
              value={postInfo.title}
              onChange={handleChange}
              placeholder="Title ...."
              className="py-2 px-2 rounded-md focus:outline-none border-b"
            />
            <select
              name="priority"
              value={postInfo.priority}
              onChange={handleChange}
              className='py-2 px-2 rounded-md focus:outline-none border-b'
            >
              <option value="" className='text-gray-300'>Select priority</option>
              <option value="Recent">Recent</option>
              <option value="Latest">Latest</option>
              <option value="Normal">Normal </option>
            </select>
          </div>
          <div className="input-fields py-3 pb-5 flex flex-col gap-2 lg:grid lg:grid-cols-2 lg:gap-6 lg:py-3 xl:grid xl:grid-cols-2 xl:gap-6 xl:py-3">
            <select
              name="category"
              id=""
              value={postInfo.category}
              onChange={handleChange}
              className='py-2 px-2 rounded-md focus:outline-none border-b'
            >
              <option value="">Select category</option>
              <option value="Technology">Technology</option>
              <option value="Web">Web</option>
              <option value="Mobile">Mobile </option>
              <option value="Development">Development</option>
            </select>
            <label htmlFor="image" className='flex gap-2'>
              Blog image <p className='text-2xl'><AiOutlineFileImage /></p>
            </label>
            <input
              onChange={handleFileUpload}
              type="file"
              id='image'
              style={{ display: 'none' }}
              className="py-2 px-2 rounded-md focus:outline-none border-b"
            />
          </div>
          <div className="text-area py-3 flex flex-col gap-3 ">
            <textarea
              name='description'
              value={postInfo.description}
              onChange={handleChange}
              placeholder="Blog description text ...."
              rows={5}
              className="rounded-md focus:outline-none border px-2 py-2"
            />
            <button
              type="submit"
              className="py-2 px-2 rounded-md focus:outline-none border bg-blue-300 text-white hover:bg-blue-500"
            >
              Post
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default NewBlogs;
