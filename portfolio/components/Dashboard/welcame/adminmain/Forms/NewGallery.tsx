import axios from "axios";
import { useState } from "react";
import { AiOutlineFileImage } from "react-icons/ai";

interface PhotoInfo {
  description: string;
  image: File | string | null;
}

const CLOUD_NAME = 'dlrivoh1v';
const UPLOAD_PRESET = 'my-brand-images-store';


const NewGallery = () => {
  const [photo, setPhoto] = useState<File | null | ''>(null);
  const initialPhotoInfo: PhotoInfo = {
    description: '',
    image:  null,
  };
  const [postInfo, setPostInfo] = useState<PhotoInfo>(initialPhotoInfo);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

    if(!photo ||  !postInfo.description){
        return 
    }

    try {
      const imageUrl = await uploadImage();
      const response = await axios.post('/api/gallery', {
        ...postInfo,
        image: imageUrl,
      });

      if (response.status === 200) {
        const data = response.data;
        console.log(data)
        setPostInfo(initialPhotoInfo);
      } else {
        console.log('Failed to add photo')
      }
    } catch (error) {
      console.error('Error in adding photo:', error);
      console.error('Failed to add photo');
    }
  };
  return (
    <div className='px-32'>
          <div className="p-10 form col-span-2 lg:pb-10 lg:px-32 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                <p className="text-xl mb-10">My New Photo</p>
                <form className="form" onSubmit={handleSubmit}>
                    {/* grid grid-cols-2 gap-6 py-3 */}
                    <div className="input-fields flex flex-col gap-2 lg:grid lg:grid-cols-2 lg:gap-6 lg:py-3 xl:grid xl:grid-cols-2 xl:gap-6 xl:py-3 ">
                    <label htmlFor="image" className='flex gap-2'>
                      My Photo <p className='text-2xl'><AiOutlineFileImage /></p>
                    </label>
                        <input type="file" style={{ display: 'none' }} onChange={handleFileUpload} id="image" className="py-2 px-2 rounded-md focus:outline-none border-b"/>
                    </div>
                    {/* text area */}
                    <div className="text-area py-3 flex flex-col gap-3 ">
                        <textarea  value={postInfo.description} name="description" onChange={handleChange} placeholder="short text about Photo ...." rows={5} className="rounded-md focus:outline-none border px-2 py-2"/>
                        <button type="submit" className="py-2 px-2 rounded-md focus:outline-none border bg-blue-300 text-white hover:bg-blue-500">Add</button>
                    </div>
                </form>
            </div>
    </div>
  )
}

export default NewGallery