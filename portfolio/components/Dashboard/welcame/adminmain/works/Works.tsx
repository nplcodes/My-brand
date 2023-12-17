import {motion} from 'framer-motion'

const Works = () => {
  return (
<motion.div
 initial={{opacity: 0, y:-100}}
 animate={{opacity: 1, y:0}}
 transition={{duration:1}}
 className='px-5 z-0'>
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
{/* Works cards ........... */}
{/* grid grid-cols-4 gap-2 */}
<div className="all-blogs space-y-3">
    <div className="card card-compact bg-base-100 shadow-xl xl:grid xl:grid-cols-3">
      <div className="card-body">
        <figure><img src="https://designers.hubspot.com/hubfs/Inspire/Uploads/HubSpot-CMS-Website-Example.jpg" alt="Shoes" className='h-48 w-full'/></figure>
        <h2 className="card-title">Online issue dispatch (NPC)</h2>
        <div className="lk-comm flex flex-row gap-2 items-center justify-between">
          <div className="comments"> <button className='bg-blue-900 text-white px-1 py-1 rounded-sm'>Manage</button></div>
        </div>
    </div>
    <div className="card-body">
        <figure><img src="https://cdn.sisense.com/wp-content/uploads/dashboard-4-300-1-1024x581.png" alt="Shoes" className='h-48 w-full' /></figure>
        <h2 className="card-title">Book hot DJ online</h2>
        <div className="lk-comm flex flex-row gap-2 items-center justify-between">
          <div className="comments"> <button className='bg-blue-900 text-white px-1 py-1 rounded-sm'>Manage</button></div>
        </div>
    </div>
    <div className="card-body">
        <figure><img src="https://149842033.v2.pressablecdn.com/wp-content/uploads/2019/11/bootstrap-login-form-1000x750.jpg" alt="Shoes" className='h-48 w-full' /></figure>
        <h2 className="card-title">NPL shopping mall</h2>
        <div className="lk-comm flex flex-row gap-2 items-center justify-between">
          <div className="comments"> <button className='bg-blue-900 text-white px-1 py-1 rounded-sm'>Manage</button></div>
        </div>
    </div>
    <div className="card-body">
        <figure><img src="https://getshogun.com/wp-content/uploads/2022/04/leesa-social-impact-1024x563.jpg" alt="Shoes" className='h-48 w-full '/></figure>
        <h2 className="card-title">work with us</h2>
        <div className="lk-comm flex flex-row gap-2 items-center justify-between">
          <button className='bg-blue-900 text-white px-1 py-1 rounded-sm'>Manage</button>
        </div>
    </div>
    </div>
</div>
</motion.div>
  )
}

export default Works