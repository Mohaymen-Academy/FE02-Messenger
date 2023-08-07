import React, { useState, useRef } from 'react';
import CheckBoxData from '../CheckBoxData';
import InputSlider from './InputSlider';

export default function DataStorage() {
  const [open, setopen] = useState(false);
  const inputslider = useRef(null);
  return (
    <div className="flex flex-col w-[100%] border-[1px] border-gray-400">
      <button
        onClick={() => setopen((prevestate) => !prevestate)}
        className={'flex w-full h-10 items-center justify-between  bg-color3 p-2 '}>
        <div className="flex items-center gap-2">
          <img src="images/person.png" className="rounded-lg" alt="" />
          <span className="text-[12px] font-extrabold text-text1 "> داده ها و ذخیره سازی </span>
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
        className={`transition-all ease-in-out duration-300 flex flex-wrap gap-[20px] overflow-x-hidden overflow-y-auto pr-2 w-[100%] ${
          open ? 'h-[345px]' : 'h-[0px]'
        }`}>
        <div className={'notifsdiv pt-3'}>
          <p className="text-gray-500">دانلود خودکار عکس ها</p>
          {<CheckBoxData title={'مخاطبین'} />}
          {<CheckBoxData title={'گفتگوهای اختصاصی'} />}
          {<CheckBoxData title={'گفتگوهای گروهی'} />}
          {<CheckBoxData title={'کانال ها'} />}
        </div>
        <div className="notifsdiv border-t-2 pt-3">
          <p className="text-gray-500">دانلود خودکار ویدیو ها و گیف ها </p>
          {<CheckBoxData title={'مخاطبین'} />}
          {<CheckBoxData title={'گفتگوهای اختصاصی'} />}
          {<CheckBoxData title={'گفتگوهای گروهی'} />}
          {<CheckBoxData title={'کانال ها'} />}
        </div>
        <div className="notifsdiv border-t-2 pt-3">
          <p className="text-gray-500">دانلود خودکار فایل ها و موسیقی </p>
          {<CheckBoxData title={'مخاطبین'} />}
          {<CheckBoxData title={'گفتگوهای اختصاصی'} />}
          {<CheckBoxData title={'گفتگوهای گروهی'} />}
          {<CheckBoxData title={'کانال ها'} />}
        </div>
        <div className="notifsdiv border-t-2 pt-3">
          <p className="text-gray-500">پخش خودکار رسانه ها</p>
          {<CheckBoxData title={'گیف ها'} />}
          {<CheckBoxData title={'ویدیو ها '} />}
        </div>
      </div>
    </div>
  );
}
