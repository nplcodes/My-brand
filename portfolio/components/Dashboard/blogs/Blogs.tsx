import React from 'react'

const Blogs = () => {
  return (
    <div className='px-32 mt-10'>
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="text-xl">Blogs List</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 flex flex-row gap-2">
      <div className="search flex flex-row items-center gap-2">
        <input type="text" placeholder='Search ....' className='py-1 px-2 border-b'/>
      </div>
      <li className='hover:bg-blue-500 hover:text-white hover:rounded-md'><a>+ New blog</a></li>
    </ul>
  </div>
</div>
{/* Blogs cards ........... */}
<div className="all-blogs grid grid-cols-4 gap-2">
    <div className="card card-compact bg-base-100 shadow-xl">
    <figure><img src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure>
    <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
        <button className="btn btn-primary">Manage</button>
        </div>
    </div>
    </div>
    <div className="card card-compact bg-base-100 shadow-xl">
    <figure><img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure>
    <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
        <button className="btn btn-primary">Manage</button>
        </div>
    </div>
    </div>
    <div className="card card-compact bg-base-100 shadow-xl">
    <figure><img src="https://images.unsplash.com/1/work-stations-plus-espresso.jpg?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure>
    <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
        <button className="btn btn-primary">Manage</button>
        </div>
    </div>
    </div>
    <div className="card card-compact bg-base-100 shadow-xl">
    <figure><img src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=1625&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure>
    <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
        <button className="btn btn-primary">Manage</button>
        </div>
    </div>
    </div>
</div>
</div>
  )
}

export default Blogs