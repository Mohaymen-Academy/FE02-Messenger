import React from 'react';
import { UilArrowRight, UilCameraPlus,UilTrashAlt } from '@iconscout/react-unicons';
// import {Check}
import CheckBoxParag from '../utility/CheckBoxParag';

export default function ProfileEdit({ setlayout }) {
  return (
    <div
      className={`flex flex-col h-screen transition-all  duration-100 ease-in  bg-color2 border-r border-bghovor shadow-md`}>
      <div className="flex flex-row w-fit h-[70px] place-items-center">
        <button
          onClick={(e) => {
            console.log(setlayout);
            setlayout(0);
          }}>
          <UilArrowRight className="w-8 h-8 text-text1 cursor-pointer" />
        </button>
        <div className="p-1 cardP">ویرایش</div>
      </div>
      <div className="flex flex-col  justify-start items-center gap-3 w-full p-5">
        <div className="w-[120px] h-[120px] my-7 flex justify-center items-center rounded-full cursor-pointer bg-blue-600">
          <UilCameraPlus className={'w-[50%] h-[50%] hover:w-[55%] hover:h-[55%] text-white'} />
        </div>
        <div className='flex flex-col gap-3 w-full '>
        <div className="relative w-full">
          <input
            type="text"
            id="floating_outlined"
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900  rounded-lg border-2  border-blue-500 appearance-none  bg-color2 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label className="absolute text-sm text-gray-500 bg-color2 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]   peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 right-3">
            نام  (الزامی)
          </label>
        </div>
        <div className="relative w-full">
          <input
            type="text"
            id="floating_outlined"
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900  rounded-lg border-2  border-blue-500 appearance-none  bg-color2 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label className="absolute text-sm text-gray-500 bg-color2 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]   peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 right-3">
            نام خانوادگی (اختیاری)
          </label>
        </div>
        <div className='p-5'><CheckBoxParag title={'اعلان ها'} /></div>
        <div className='h-0.5 w-full flex bg-bghovor'></div>
        <div className='p-3 flex flex-row text-red-600 place-items-center'>
          <UilTrashAlt className='w-8 h-8 ml-2'/>
          <p>حذف مخاطب</p>
        </div>
        </div>
      </div>
    </div>
  );
}
