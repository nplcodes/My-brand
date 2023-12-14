
const Mob = () => {
  return (
    // grid grid-cols-4 gap-2 min-h-[500px] p-5 px-10
    <div className="works grid grid-cols-1 gap-4 min-h-[1000px] p-5 px-10 lg:grid-cols-2 lg:gap-2 lg:px-16 xl:grid-cols-4 xl:min-h-[500px]">
      {/* grid grid-rows-2 gap-1 */}
        <div className="right-small xl:grid xl:grid-cols-1 xl:gap-1">
            <div className="bg-cover bg-no-repeat bg-center rounded-md" style={{backgroundImage: 'url(/images/w2.jpg)',}}></div>
            <div className="bg-cover bg-no-repeat bg-center rounded-md" style={{backgroundImage: 'url(/images/w3.jpg)',}}></div>
        </div>
        {/* col-span-2 */}
        <div className="middle-large bg-cover bg-no-repeat bg-center rounded-md xl:col-span-2" style={{backgroundImage: 'url(/images/w1.jpg)',}}></div>
          <div className="left-small xl:grid xl:grid-rows-3 xl:gap-1">
          <div className="bg-cover bg-no-repeat bg-center rounded-md" style={{backgroundImage: 'url(/images/w1.jpg)',}}></div>
          <div className="bg-cover bg-no-repeat bg-center" style={{backgroundImage: 'url(/images/w1.jpg)',}}></div>
        </div>
  </div>
  )
}

export default Mob