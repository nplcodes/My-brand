import axios from 'axios';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface photosprops {
  image: string;
  id: number;
}

const Photos = () => {
  const [data, setData] = useState<photosprops[]>([]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/gallery');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const photos: photosprops[] = await response.json();
        setData(photos);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (idToDelete: number) => {
    try {
      // Make a DELETE request to your API
      const response = await axios.delete(`api/gallery/${idToDelete}`);

      if (response.status === 200) {
        setData((prevData) => prevData.filter((post) => post.id !== idToDelete));
        setIsHovered(false); // Hide the delete button
        toast.success('Deleted successfully');
      } else {
        console.error('Failed to delete');
        toast.error('Failed to delete');
      }
    } catch (error) {
      console.error('Error deleting:', error);
      toast.error('Error deleting');
    }
  };

  return (
    <div>
      <div className="all-skillls-container flex flex-col gap-6 items-center lg:grid lg:grid-cols-2 lg:gap-2 lg:py-10 xl:grid-cols-3">
        {data?.map((post) => (
          <motion.div
            key={post.id}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="single-image cursor-pointer relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image alt="gallery" src={post.image} width={600} height={600} className="rounded-md" />
            {isHovered && (
              <button
                className="text-white bg-red-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute"
                onClick={() => handleDelete(post.id)}
              >
                delete
              </button>
            )}
          </motion.div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Photos;
