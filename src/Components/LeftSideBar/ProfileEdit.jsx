import React from 'react';
import { UilArrowRight, UilCameraPlus, UilTrashAlt } from '@iconscout/react-unicons';
// import {Check}
import CheckBoxParag from '../../ui/CheckBoxParag';

export default function ProfileEdit({ setlayout }) {
  return (
    <div
      className={
        'flex h-screen flex-col border-r  border-bghovor bg-color2  shadow-md transition-all duration-100 ease-in'
      }>
      <div className="flex h-[70px] w-fit flex-row place-items-center">
        <button
          onClick={(e) => {
            console.log(setlayout);
            setlayout(0);
          }}>
          <UilArrowRight className="h-8 w-8 cursor-pointer text-text1" />
        </button>
        <div className="cardP p-1">ویرایش</div>
      </div>
      <div className="flex w-full  flex-col items-center justify-start gap-3 p-5">
        <div className="my-7 flex h-[120px] w-[120px] cursor-pointer items-center justify-center rounded-full bg-blue-600">
          <UilCameraPlus className={'h-[50%] w-[50%] text-white hover:h-[55%] hover:w-[55%]'} />
        </div>
        <div className="flex w-full flex-col gap-3 ">
          <div className="relative w-full">
            <input
              type="text"
              id="floating_outlined"
              className="peer block w-full appearance-none rounded-lg border-2 border-blue-500  bg-color2 px-2.5  pb-2.5 pt-4  text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" "
            />
            <label className="absolute right-3 top-2 z-10 origin-[0] -translate-y-4 scale-75 bg-color2 text-sm text-gray-500 duration-300   peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
              نام (الزامی)
            </label>
          </div>
          <div className="relative w-full">
            <input
              type="text"
              id="floating_outlined"
              className="peer block w-full appearance-none rounded-lg border-2 border-blue-500  bg-color2 px-2.5  pb-2.5 pt-4  text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" "
            />
            <label className="absolute right-3 top-2 z-10 origin-[0] -translate-y-4 scale-75 bg-color2 text-sm text-gray-500 duration-300   peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
              نام خانوادگی (اختیاری)
            </label>
          </div>
          <div className="p-5">
            <CheckBoxParag title={'اعلان ها'} />
          </div>
          <div className="flex h-0.5 w-full bg-bghovor"></div>
          <div className="flex flex-row place-items-center p-3 text-red-600">
            <UilTrashAlt className="ml-2 h-8 w-8" />
            <p>حذف مخاطب</p>
          </div>
        </div>
      </div>
    </div>
  );
}
