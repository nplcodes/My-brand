"use client"


import React, { useState } from 'react';
import Designs from "./subcomponents/Designs";
import Web from "./subcomponents/Web";
import Mob from "./subcomponents/Mob";

const Portfolio = () => {
  const [category, setCategory] = useState<string>('web');

  const handleCategoryChange = (categ: string) => {
    setCategory(categ);
  };

  const renderSelectedMenu = () => {
    switch (category) {
      case 'web':
        return (
          <div
          >
            <Web />
          </div>
        );
      case 'mob':
        return (
          <div
          >
            <Mob />
          </div>
        );
      case 'designs':
        return (
          <div
          >
            <Designs />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div id="work" className="pt-24">
      <div className="category-header bg-slate-300 flex gap-3 flex-col items-center justify-center py-10 mb-5 bg-transparent">
        <div className='flex items-center justify-center gap-2'>
          <div className='w-4 h-4 bg-gray-400'></div>
          <p className='text-gray-400'>My works</p>
          <div className='w-4 h-4 bg-gray-400'></div>
        </div>
        <h1 className='font-bold'>Portfolio</h1>
      </div>
      {/* Navigations */}
      <div className="py-10">
        <div className='flex items-center justify-center gap-2'>
          <span className={`text-blue-400' ${category === 'web' ? 'cursor-pointer text-gray-800 border-b-4 border-black' : ''}`} onClick={() => handleCategoryChange('web')}>Web</span>
          <span className={`text-blue-400' ${category === 'mob' ? 'cursor-pointer text-gray-800 border-b-4 border-black' : ''}`} onClick={() => handleCategoryChange('mob')}>Mobile</span>
          <span className={`text-blue-400' ${category === 'designs' ? 'cursor-pointer text-gray-800 border-b-4 border-black' : ''}`} onClick={() => handleCategoryChange('designs')}>Ui/Ux</span>
        </div>
      </div>
      {renderSelectedMenu()}
    </div>
  );
};

export default Portfolio;
