import React from 'react'

const Messages = () => {
  return (
    <div className='px-8 relative h-screen'>
        <p>Messages  </p>
        <div className="single-message mt-5 border p-2">
            <div className="names-time flex justify-between ">
                <div className="name font-bold">Leon adkins</div>
                <div className="time text-gray-400">3 hours ago</div>
            </div>
            <div className="message">
                <p className='text-sm text-gray-400 px-3 py-3'>Hello, ia want to i've you a job!</p>
            </div>
            <div className="actions flex flex-row gap-2">
                <button className='px-5 py-1 bg-blue-500 text-white rounded-md cursor-pointer'>Read</button>
                <button className='px-5 py-1 bg-red-500 text-white rounded-md cursor-pointer'>Delete</button>
            </div>
        </div>
        <div className="single-message mt-5 border p-2">
            <div className="names-time flex justify-between ">
                <div className="name font-bold">Bareck@250</div>
                <div className="time text-gray-400">yestarday</div>
            </div>
            <div className="message">
                <p className='text-sm text-gray-400 px-3 py-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been t</p>
            </div>
            <div className="actions flex flex-row gap-2">
                <button className='px-5 py-1 bg-blue-500 text-white rounded-md cursor-pointer'>Read</button>
                <button className='px-5 py-1 bg-red-500 text-white rounded-md cursor-pointer'>Delete</button>
            </div>
        </div>
        <div className="single-message mt-5 border p-2">
            <div className="names-time flex justify-between ">
                <div className="name font-bold">Kendric @Official</div>
                <div className="time text-gray-400">3 dec</div>
            </div>
            <div className="message">
                <p className='text-sm text-gray-400 px-3 py-3'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use</p>
            </div>
            <div className="actions flex flex-row gap-2">
                <button className='px-5 py-1 bg-blue-500 text-white rounded-md cursor-pointer'>Read</button>
                <button className='px-5 py-1 bg-red-500 text-white rounded-md cursor-pointer'>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default Messages