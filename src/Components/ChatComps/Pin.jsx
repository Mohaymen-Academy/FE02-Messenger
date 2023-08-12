import React from 'react';
import { UilTimes } from '@iconscout/react-unicons';
export default function Pin() {
  return (
    <div className=" w-full pr-3 py-3 bg-color1 flex flex-row items-center">
      <div className=" w-[95%] rounded-lg h-fit cursor-pointer hover:bg-color2 ">
        <div className=" pr-2 border-r-2  border-color3">
          <p className="text-color3 font-iRANSans text-sm">پیام سنجاق شده</p>
          <div>
            {/* Message */}
            سلام از پین
          </div>
        </div>
      </div>
      <div>
        <button
        className='rounded-full hover:bg-color2'>
          <UilTimes />
        </button>
      </div>
    </div>
  );
}
