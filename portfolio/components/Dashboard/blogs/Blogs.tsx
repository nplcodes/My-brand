import React from 'react'

const Blogs = () => {
  return (
<div className='px-5 mt-20 z-0'>
<div className="navbar bg-base-100 flex flex-col justify-start">
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 flex flex-row gap-2">
      <div className="search flex flex-row items-center gap-2">
        <input type="text" placeholder='Search ....' className='py-1 px-2 border-b'/>
      </div>
      <li className='bg-blue-500 rounded-sm text-white hover:bg-black hover:text-white hover:rounded-md'><a>+ New</a></li>
    </ul>
  </div>
</div>
{/* Blogs cards ........... */}
{/* grid grid-cols-4 gap-2 */}
<div className="all-blogs space-y-3">
    <div className="card card-compact bg-base-100 shadow-xl">
    <figure><img src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure>
    <div className="card-body">
        <h2 className="card-title">Best laptop in kabstore!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="lk-comm flex flex-row gap-2 items-center justify-between">
          <div className="like-commment flex gap-2">
            <div className="likes"><span className='font-bold'><span className='text-red-500 space-x-2'>20</span>likes</span></div>
            <div className="comments"> <span><span className='text-blue-500 space-x-2'>98</span>comment</span></div>
          </div>
          <div className="comments"> <button className='bg-blue-900 text-white px-1 py-1 rounded-sm'>Manage</button></div>
        </div>
    </div>
    </div>
    <div className="card card-compact bg-base-100 shadow-xl">
    <figure><img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure>
    <div className="card-body">
        <h2 className="card-title">Mern stack developer</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="lk-comm flex flex-row gap-2 items-center justify-between">
          <div className="like-commment flex gap-2">
            <div className="likes"><span className='font-bold'><span className='text-red-500 space-x-2'>20</span>likes</span></div>
            <div className="comments"> <span><span className='text-blue-500 space-x-2'>98</span>comment</span></div>
          </div>
          <div className="comments"> <button className='bg-blue-900 text-white px-1 py-1 rounded-sm'>Manage</button></div>
        </div>
    </div>
    </div>
    <div className="card card-compact bg-base-100 shadow-xl">
    <figure><img src="https://images.unsplash.com/1/work-stations-plus-espresso.jpg?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure>
    <div className="card-body">
        <h2 className="card-title">Next Js is gonna change game in 2024</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="lk-comm flex flex-row gap-2 items-center justify-between">
          <div className="like-commment flex gap-2">
            <div className="likes"><span className='font-bold'><span className='text-red-500 space-x-2'>20</span>likes</span></div>
            <div className="comments"> <span><span className='text-blue-500 space-x-2'>98</span>comment</span></div>
          </div>
          <div className="comments"> <button className='bg-blue-900 text-white px-1 py-1 rounded-sm'>Manage</button></div>
        </div>
    </div>
    </div>
    <div className="card card-compact bg-base-100 shadow-xl">
    <figure><img src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=1625&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure>
    <div className="card-body">
        <h2 className="card-title">My Dev roadmap</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="lk-comm flex flex-row gap-2 items-center justify-between">
          <div className="like-commment flex gap-2">
            <div className="likes"><span className='font-bold'><span className='text-red-500 space-x-2'>20</span>likes</span></div>
            <div className="comments"> <span><span className='text-blue-500 space-x-2'>98</span>comment</span></div>
          </div>
          <div className="comments"> <button className='bg-blue-900 text-white px-1 py-1 rounded-sm'>Manage</button></div>
        </div>
    </div>
    </div>
</div>
</div>
  )
}

export default Blogs