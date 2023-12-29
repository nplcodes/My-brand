import { useEffect, useState } from "react";
import * as timeago from 'timeago.js';


interface MessageInfo {
    id: number,
    fname: string,
    surname: string,
    email: string,
    telephone: string,
    content_message: string
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
  return (
    <div className='px-8 relative h-screen'>
        <p>Messages  </p>
        {data?.map(message =>(
                 <div className="single-message mt-5 border p-2" key={message.id}>
                 <div className="names-time flex justify-between ">
                     <div className="name font-bold">{message.fname} {message.surname}</div>
                     <div className="time text-gray-400">3 hours ago</div>
                 </div>
                 <div className="message">
                     <p className='text-sm text-gray-400 px-3 py-3'>{message.content_message}</p>
                 </div>
                 <div className="actions flex flex-row gap-2">
                     <button className='px-5 py-1 bg-blue-500 text-white rounded-md cursor-pointer'>Read</button>
                     <button className='px-5 py-1 bg-red-500 text-white rounded-md cursor-pointer'>Delete</button>
                 </div>
             </div>
        ))}
    </div>
  )
}

export default Messages