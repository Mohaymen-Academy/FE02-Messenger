import React, { useState } from 'react';
import SmallAvatar from './SmallAvatar';
import { UilMultiply } from '@iconscout/react-unicons';

export default function ContactSmall({chatid, setselected}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex flex-row items-center h-[40px] w-fit m-3 rounded-full border border-bghovor ${
        isHovered ? 'bg-orange-950' : 'bg-color2'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <button 
          className='w-[40px] h-[40px] bg-red-600 rounded-full flex items-center justify-center'
          onClick={() => setselected((prev)=>prev.filter((x)=>x!=chatid))}
          >
          <UilMultiply className='text-red-200' />
        </button>
      ) : (
        <div id={1} className='rounded-full h-[40px] w-[40px]'>
          <SmallAvatar image={'s'} />
        </div>
      )}
      <div className='flex flex-col m-4'>
        <p className='font-semibold text-text1'>زهرا</p>
      </div>
    </div>
  );
}
