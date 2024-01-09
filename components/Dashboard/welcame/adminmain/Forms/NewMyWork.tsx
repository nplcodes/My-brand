import axios from 'axios';
import React, { useState } from 'react'
import { AiOutlineFileImage } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface WorkInfo {
    title: string;
    description: string;
    category: string;
    colaborated: string;
    image: string;
  }

const CLOUD_NAME = 'dlrivoh1v';
const UPLOAD_PRESET = 'my-brand-images-store';

const NewWork = () => {
    const notify = () => toast(' New Post i successfully created!');
    const [photo, setPhoto] = useState<File | null | ''>('');
    const initialWorkInfo: WorkInfo = {
      title: '',
      description: '',
      category: '',
      colaborated: '',
      image:  '',
    };

    const [WorkInfo, setWorkInfo] = useState<WorkInfo>(initialWorkInfo);
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
      ) => {
        const { name, value } = e.target;
        setWorkInfo((prevInfo) => ({
          ...prevInfo,
          [name]: value,
        }));
      };
    //   image set up
      const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
          setPhoto(e.target.files[0]);
        }
      };
    //   cloudinary
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

    //   save data to dabase
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        if(!photo || !WorkInfo.title || !WorkInfo.description || !WorkInfo.category || !WorkInfo.colaborated){
            return toast("Fill all fields!")
        }
    
        try {
          const imageUrl = await uploadImage();
    
          const response = await axios.post('/api/works', {
            ...WorkInfo,
            image: imageUrl,
          });
    
          if (response.status === 200) {
            const data = response.data;
            console.log("Work is successfully added", data)
            setWorkInfo(initialWorkInfo);
            notify();
          } else {
            toast('Failed to add work')
          }
        } catch (error) {
          console.error('Error in adding work:', error);
          toast.error('Failed to add work');
        }
      };
  return (
    <div className='px-32'>
          <div className="p-10 form col-span-2 lg:pb-10 lg:px-32 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                <p className="text-xl mb-10">Add New Project</p>
                <form className="form" onSubmit={handleSubmit}>
                    {/* grid grid-cols-2 gap-6 py-3 */}
                    <div className="input-fields flex flex-col gap-2 lg:grid lg:grid-cols-2 lg:gap-6 lg:py-3 xl:grid xl:grid-cols-2 xl:gap-6 xl:py-3 ">
                        <input value={WorkInfo.title} onChange={handleChange} name='title' type="text" placeholder="Title ...." className="py-2 px-2 rounded-md focus:outline-none border-b"/>
                        <select value={WorkInfo.colaborated} onChange={handleChange} name="colaborated" id="" className='py-2 px-2 rounded-md focus:outline-none border-b'>
                            <option value="" className='text-gray-300'>Collaborated?</option>
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                        </select>
                    </div>
                    {/*  grid grid-cols-2 gap-6 */}
                    <div className="input-fields py-3 pb-5 flex flex-col gap-2 lg:grid lg:grid-cols-2 lg:gap-6 lg:py-3 xl:grid xl:grid-cols-2 xl:gap-6 xl:py-3">
                        <select value={WorkInfo.category} onChange={handleChange} name="category" id="" className='py-2 px-2 rounded-md focus:outline-none border-b'>
                            <option value="">Select category</option>
                            <option value="Web">Web</option>
                            <option value="Mobile">Mobile</option>
                            <option value="Ui/Ux">Ui/Ux </option>
                            <option value="Ai">Ai</option>
                        </select>
                        <label htmlFor="screenshot" className='flex gap-2'>
                         Project screenshot <p className='text-2xl'><AiOutlineFileImage /></p>
                        </label>
                        <input  id='screenshot' style={{ display: 'none' }}  onChange={handleFileUpload} type="file" className="py-2 px-2 rounded-md focus:outline-none border-b"/>
                    </div>
                    {/* text area */}
                    <div className="text-area py-3 flex flex-col gap-3 ">
                        <textarea value={WorkInfo.description} onChange={handleChange} name='description' placeholder="Project description text ...." rows={5} className="rounded-md focus:outline-none border px-2 py-2"/>
                        <button type="submit" className="py-2 px-2 rounded-md focus:outline-none border bg-blue-300 text-white hover:bg-blue-500">Add new</button>
                    </div>
                </form>
            </div>
    </div>
  )
}

export default NewWork