import React from 'react'

const NewBlogs = () => {
  return (
    <div className='px-32'>
          <div className="p-10 form col-span-2 lg:pb-10 lg:px-32 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                <p className="text-xl mb-10">Create New blog</p>
                <div className="form">
                    {/* grid grid-cols-2 gap-6 py-3 */}
                    <div className="input-fields flex flex-col gap-2 lg:grid lg:grid-cols-2 lg:gap-6 lg:py-3 xl:grid xl:grid-cols-2 xl:gap-6 xl:py-3 ">
                        <input type="text" placeholder="Title ...." className="py-2 px-2 rounded-md focus:outline-none border-b"/>
                        <select name="category" id="" className='py-2 px-2 rounded-md focus:outline-none border-b'>
                            <option value="" className='text-gray-300'>Select priority</option>
                            <option value="">Recent</option>
                            <option value="">Latest</option>
                            <option value="">Normal </option>
                        </select>
                    </div>
                    {/*  grid grid-cols-2 gap-6 */}
                    <div className="input-fields py-3 pb-5 flex flex-col gap-2 lg:grid lg:grid-cols-2 lg:gap-6 lg:py-3 xl:grid xl:grid-cols-2 xl:gap-6 xl:py-3">
                        <select name="category" id="" className='py-2 px-2 rounded-md focus:outline-none border-b'>
                            <option value="">Select category</option>
                            <option value="">Technology</option>
                            <option value="">Web</option>
                            <option value="">Mobile </option>
                            <option value="">Development</option>
                        </select>
                        <input type="file" placeholder="Telephone number" className="py-2 px-2 rounded-md focus:outline-none border-b"/>
                    </div>
                    {/* text area */}
                    <div className="text-area py-3 flex flex-col gap-3 ">
                        <textarea placeholder="Blog description text ...." rows={5} className="rounded-md focus:outline-none border px-2 py-2"/>
                        <button type="submit" className="py-2 px-2 rounded-md focus:outline-none border bg-blue-300 text-white hover:bg-blue-500">Post</button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default NewBlogs