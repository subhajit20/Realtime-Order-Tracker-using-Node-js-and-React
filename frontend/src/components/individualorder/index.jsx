import React from 'react';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

function index() {
  return (
    <div className='translate-y-20 grid grid-cols-2 justify-items-center'>
      <div className='left'>
        <LeftSection />
      </div>
      <div className='right'>
        <RightSection />
      </div>
    </div>
  )
}

export default index