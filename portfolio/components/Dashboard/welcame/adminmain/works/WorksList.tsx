import React from 'react'

const WorksList = () => {
  return (
    <div>
        <div className="all-blogs space-y-3">
    <div className="card card-compact bg-base-100 shadow-xl xl:grid xl:grid-cols-3">
      <div className="card-body cursor-pointer">
        <figure><img src="https://designers.hubspot.com/hubfs/Inspire/Uploads/HubSpot-CMS-Website-Example.jpg" alt="Shoes" className='h-48 w-full'/></figure>
        <h2 className="card-title">Online issue dispatch (NPC)</h2>
        <div className="lk-comm flex flex-row gap-2 items-center justify-between">
          <div className="comments"> <button className='bg-blue-900 text-white px-6 py-1 rounded-sm'>Visit</button></div>
        </div>
    </div>
    <div className="card-body cursor-pointer">
        <figure><img src="https://cdn.sisense.com/wp-content/uploads/dashboard-4-300-1-1024x581.png" alt="Shoes" className='h-48 w-full' /></figure>
        <h2 className="card-title">Book hot DJ online</h2>
        <div className="lk-comm flex flex-row gap-2 items-center justify-between">
          <div className="comments"> <button className='bg-blue-900 text-white px-6 py-1 rounded-sm'>Visit</button></div>
        </div>
    </div>
    <div className="card-body cursor-pointer">
        <figure><img src="https://149842033.v2.pressablecdn.com/wp-content/uploads/2019/11/bootstrap-login-form-1000x750.jpg" alt="Shoes" className='h-48 w-full' /></figure>
        <h2 className="card-title">NPL shopping mall</h2>
        <div className="lk-comm flex flex-row gap-2 items-center justify-between">
          <div className="comments"> <button className='bg-blue-900 text-white px-6 py-1 rounded-sm'>Visit</button></div>
        </div>
    </div>
    <div className="card-body cursor-pointer">
        <figure><img src="https://getshogun.com/wp-content/uploads/2022/04/leesa-social-impact-1024x563.jpg" alt="Shoes" className='h-48 w-full '/></figure>
        <h2 className="card-title">work with us</h2>
        <div className="lk-comm flex flex-row gap-2 items-center justify-between">
          <button className='bg-blue-900 text-white px-6 py-1 rounded-sm'>Visit</button>
        </div>
    </div>
    </div>
</div>
    </div>
  )
}

export default WorksList