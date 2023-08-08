import React, { useState, useRef } from 'react';
import CheckBoxParag from '../CheckBoxParag';
import InputSlider from '../InputSlider';
import { UilLock, UilBan ,UilDesktop   } from '@iconscout/react-unicons'

export default function Privacy() {
  const [open, setopen] = useState(false);
  const inputslider = useRef(null);
  return (
    <div className="flex flex-col w-[100%] border-[1px] border-gray-400">
      <button
        onClick={() => setopen((prevestate) => !prevestate)}
        className={'flex w-full h-10 items-center justify-between  bg-color3 p-2 '}>
        <div className="flex items-center gap-2">
        <UilLock className="text-text1 w-8 h-8 mx-1 " />
          <span className="text-[12px] font-extrabold text-text1 ">حریم خصوصی و امنیت</span>
        </div>
        <svg
          className={`w-2.5 h-2.5 ml-2.5 ${open ? 'transform rotate-180' : ''}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      <div
        className={`transition-all ease-in-out duration-300 flex flex-wrap gap-[5px] overflow-x-hidden overflow-y-auto w-[100%] ${
          open ? 'h-[195px]' : 'h-[0px]'
        }`}>
        <div className=" pb-3 px-3 gap-2 w-[87%] justify-center flex flex-col">
          <button className={'pricaybutton'}>
          <UilBan className="text-text1 w-8 h-8 mx-1 " />
            <p>کاربران مسدود</p>
          </button>
          <button className={'pricaybutton'}>
          <UilDesktop className="text-text1 w-8 h-8 mx-1 " />
            <p>نشست های فعال</p>
          </button>
        </div>
        <div className="notifsdiv border-t-2 pt-3">
          <p className="text-gray-500">گفت و گوهای اختصاصی</p>
        </div>
      </div>
    </div>
  );
}
