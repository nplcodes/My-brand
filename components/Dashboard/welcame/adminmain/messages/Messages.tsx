import { useEffect, useState } from "react";
import * as timeago from 'timeago.js';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface MessageInfo {
  id: number,
  fname: string,
  surname: string,
  email: string,
  telephone: string,
  content_message: string,
  createdAt: Date
}

const Messages = () => {
  const [data, setdata] = useState<MessageInfo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/messeges');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const messages: MessageInfo[] = await response.json();
        setdata(messages);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (idToDelete: number) => {
    try {
      const response = await axios.delete(`/api/messeges/${idToDelete}`);

      if (response.status === 200) {
        setdata((prevData) => prevData.filter((message) => message.id !== idToDelete));
        toast.success('Message deleted successfully');
      } else {
        console.error('Failed to delete');
        toast.error('Failed to delete message');
      }
    } catch (error) {
      console.error('Error deleting:', error);
      toast.error('Error deleting message');
    }
  };
  
  const [read, setRead] = useState<boolean>(false)
  const ReadMore = ()=>{
    setRead(!read)
  }

  return (
    <div className='px-8 relative h-screen'>
      <p>Messages</p>
      {data?.map(message => (
        <div className="single-message mt-5 border p-2" key={message.id}>
          <div className="names-time flex justify-between">
            <div className="name font-bold">{message.fname} {message.surname}</div>
            <div className="time text-gray-400">{timeago.format(message.createdAt)}</div>
          </div>
          <div className="message">
            <p className='text-sm text-gray-400 px-3 py-3'>{message.content_message}</p>
          </div>
          <div className="actions flex flex-row gap-2">
            <button onClick={ReadMore} className='px-5 py-1 bg-blue-500 text-white rounded-md cursor-pointer'>Read</button>
            <button
              className='px-5 py-1 bg-red-500 text-white rounded-md cursor-pointer'
              onClick={() => handleDelete(message.id)}
            >
              Delete
            </button>
          </div>
          {read ? (
            <div>
                <p>{message.email}</p>
                <p>{message.telephone}</p>
            </div>
          ): (
            <div></div>
          )}
          <div >
          </div>
        </div>
      ))}
      <ToastContainer />
    </div>
  )
}

export default Messages;
