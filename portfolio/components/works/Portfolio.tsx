
const Portfolio = () => {
    return (
      <div>
          <div className="about-header bg-slate-300 flex gap-3 flex-col items-center justify-center py-10 mb-5">
              <div className='flex items-center justify-center gap-2'>
                  <div className='w-4 h-4 bg-blue-400'></div>
                    <p className='text-blue-400'>My works</p>
                  <div className='w-4 h-4 bg-blue-400'></div>
              </div>
              <h1 className='font-bold'>Portfolio</h1>
          </div>
          {/* Navigations */}
          <div className="py-10">
              <div className='flex items-center justify-center gap-3'>
                   <span className='text-blue-400 cursor-pointer'>All</span>
                    <span className='text-blue-400 cursor-pointer'>Web</span>
                    <span className='text-blue-400 cursor-pointer'>Mob</span>
                    <span className='text-blue-400 cursor-pointer'>Ui/Ux</span>
              </div>
          </div>
          <div className="works grid grid-cols-4 min-h-[500px] p-5 px-10">
            <div className="right-small">Right</div>
            <div className="middle-large col-span-2">Large</div>
            <div className="left-small">Left small</div>
          </div>
      </div>
    )
  }
  
  export default Portfolio