import React from 'react';
import { UilArrowRight, UilCameraPlus } from '@iconscout/react-unicons';
// import {Check}
import CheckBoxParag from '../utility/CheckBoxParag';

export default function ProfileEdit() {
  return (
    <div
      className={`flex flex-col h-screen transition-all duration-200 ease-in w-[500px] bg-color2 shadow-md`}>
      <div className="flex flex-row w-full h-[8.1%] p-2.5">
        <UilArrowRight className="w-8 h-8 text-text1 cursor-pointer" />
        <div className="p-1 cardP">ویرایش</div>
      </div>
      <div className="flex flex-col  justify-center items-center gap-3 w-[100%]">
        <div className="w-[105px] h-[110px] flex justify-center items-center rounded-full cursor-pointer bg-blue-600">
          <UilCameraPlus className={'w-[45%] h-[45%] hover:w-[55%] hover:h-[55%] text-white'} />
        </div>
        <div className="relative">
          <input
            type="text"
            id="floating_outlined"
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900  rounded-lg border-2  border-blue-500 appearance-none  bg-color2 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label className="absolute text-sm text-gray-500 bg-color2 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]   peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
            نام الزامی
          </label>
        </div>
        <div className="relative">
          <input
            type="text"
            id="floating_outlined"
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900  rounded-lg border-2  border-blue-500 appearance-none  bg-color2 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label className="absolute text-sm text-gray-500 bg-color2 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]   peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
            نام خانوادگی
          </label>
          <div>{<CheckBoxParag title={'اعلان ها'} />}</div>
        </div>
      </div>
    </div>
  );
}
