"use client"
import { useState } from "react"
import All from "./subcomponents/All"
import Designs from "./subcomponents/Designs"
import Web from "./subcomponents/Web"
import Mob from "./subcomponents/Mob"

const Portfolio = () => {
  let [category, setCategory] = useState<string>('web')

  const handleCategoryChange = (categ: string)=>{
    setCategory(categ)
  }

  const renderingSelectedMenu = ()=>{
    switch (category) {
     case category='all':
         return <All />
       break;
     case category='web':
         return <Web />
       break;
     case category='mob':
         return <Mob />
       break;
     case category='designs':
         return <Designs />
       break;
 
     default:
       break;
   }
 }

  
    return (
      <div id="work" className="pt-24">
          <div className="category-header bg-slate-300 flex gap-3 flex-col items-center justify-center py-10 mb-5 bg-transparent">
              <div className='flex items-center justify-center gap-2'>
                  <div className='w-4 h-4 bg-blue-400'></div>
                    <p className='text-blue-400'>My works</p>
                  <div className='w-4 h-4 bg-blue-400'></div>
              </div>
              <h1 className='font-bold'>Portfolio</h1>
          </div>
          {/* Navigations */}
          <div className="py-10">
              <div className='flex items-center justify-center gap-2'>
                   <span className={`text-blue-400' ${category ==='all'? 'text-blue-800 border-b-4 cursor-pointer border-blue-500':''}`} onClick={ () => handleCategoryChange('all')}>All</span>
                    <span className={`text-blue-400' ${category ==='web'? 'cursor-pointer text-blue-800 border-b-4 border-blue-500':''}`} onClick={ () => handleCategoryChange('web')}>Web</span>
                    <span className={`text-blue-400' ${category ==='mob'? 'cursor-pointer text-blue-800 border-b-4 border-blue-500':''}`} onClick={ () => handleCategoryChange('mob')}>Mob</span>
                    <span className={`text-blue-400' ${category ==='designs'? 'cursor-pointer text-blue-800 border-b-4 border-blue-500':''}`} onClick={ () => handleCategoryChange('designs')}>Ui/Ux</span>
              </div>
          </div>
           {renderingSelectedMenu()}
      </div>
    )
  }
  
  export default Portfolio