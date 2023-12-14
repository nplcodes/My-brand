import React from 'react'

const Mob = () => {
  return (
    // grid grid-cols-4 gap-2 min-h-[500px] p-5 px-10
    <div className="works grid grid-cols-1 gap-4 min-h-[1000px] p-5 px-10">
      {/* grid grid-rows-2 gap-1 */}
        {/* <div className="right-small grid grid-cols-1 gap-1"> */}
             <div className="bg-cover bg-no-repeat bg-center rounded-md" style={{backgroundImage: 'url(/images/w1.jpg)',}}></div>
            <div className="bg-cover bg-no-repeat bg-center rounded-md" style={{backgroundImage: 'url(/images/w3.jpg)',}}></div>
        {/* </div> */}
        {/* col-span-2 */}
        {/* <div className="left-small grid grid-rows-3 gap-1"> */}
        <div className="bg-cover bg-no-repeat bg-center rounded-md" style={{backgroundImage: 'url(/images/w2.jpg)',}}></div>

        {/* <div className="bg-cover bg-no-repeat bg-center" style={{backgroundImage: 'url(/images/w1.jpg)',}}></div>
        <div className="bg-cover bg-no-repeat bg-center" style={{backgroundImage: 'url(/images/w1.jpg)',}}></div> */}
        {/* </div> */}
  </div>
  )
}

export default Mob