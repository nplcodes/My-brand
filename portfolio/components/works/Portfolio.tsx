"use client"


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import All from "./subcomponents/All";
import Designs from "./subcomponents/Designs";
import Web from "./subcomponents/Web";
import Mob from "./subcomponents/Mob";

const Portfolio = () => {
  const [category, setCategory] = useState<string>('mob');

  const handleCategoryChange = (categ: string) => {
    setCategory(categ);
  };

  const renderSelectedMenu = () => {
    switch (category) {
      case 'all':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <All />
          </motion.div>
        );
      case 'web':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Web />
          </motion.div>
        );
      case 'mob':
        return (
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -200 }}
            transition={{ duration: 0.8 }}
          >
            <Mob />
          </motion.div>
        );
      case 'designs':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Designs />
          </motion.div>
        );
      default:
        return null;
    }
  };

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
          <span className={`text-blue-400' ${category === 'all' ? 'text-blue-800 border-b-4 cursor-pointer border-blue-500' : ''}`} onClick={() => handleCategoryChange('all')}>All</span>
          <span className={`text-blue-400' ${category === 'web' ? 'cursor-pointer text-blue-800 border-b-4 border-blue-500' : ''}`} onClick={() => handleCategoryChange('web')}>Web</span>
          <span className={`text-blue-400' ${category === 'mob' ? 'cursor-pointer text-blue-800 border-b-4 border-blue-500' : ''}`} onClick={() => handleCategoryChange('mob')}>Mobile</span>
          <span className={`text-blue-400' ${category === 'designs' ? 'cursor-pointer text-blue-800 border-b-4 border-blue-500' : ''}`} onClick={() => handleCategoryChange('designs')}>Ui/Ux</span>
        </div>
      </div>
      {renderSelectedMenu()}
    </div>
  );
};

export default Portfolio;
