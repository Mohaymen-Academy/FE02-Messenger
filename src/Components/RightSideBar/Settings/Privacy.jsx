import React, { useState, useRef } from 'react';
import CheckBoxParag from '../../../utility/CheckBoxParag';
import InputSlider from '../../../utility/InputSlider';
import { UilLock, UilBan ,UilDesktop   } from '@iconscout/react-unicons'

export default function Privacy() {
  const [open, setopen] = useState(false);
  const inputslider = useRef(null);
  return (
    <div className="flex flex-col w-[100%] justify-center items-center overflow-y-hidden opacity-90">
      <span className="text-[17px] font-extrabold text-text1 p-5 text-center pt-0 border-b-2 border-bghovor w-[100%] mt-2">
        حریم خصوصی و امنیت
      </span>
      <div
        className={`transition-all ease-in-out duration-300 flex flex-wrap gap-[10px] overflow-x-hidden pr-2 w-[100%] `}>
        <div className=" p-1 gap-2 w-[100%] justify-center flex flex-col">
          <button className={'pricaybutton py-5 gap-4'}>
          <UilBan className="text-text1 w-5 h-5 mx-1  " />
            <p className='text-sm text-text1'>کاربران مسدود</p>
          </button>
          <button className={'pricaybutton py-5 gap-4'}>
          <UilDesktop className="text-text1 w-5 h-5 mx-1 " />
            <p className='text-sm text-text1'>نشست های فعال</p>
          </button>
        </div>
        <div className="notifsdiv border-t-2 p-3 mb-0 m-2 pb-0 nb-0">
          <p className="text-gray-500 py-3 text-[17px]"> حریم خصوصی  </p>
        </div>
        <button className={'pricaybutton flex flex-col items-start p-5 gap-4'}>
            <p className='text-sm text-text1'>چه کسی می‌تواند مرا به گفتگوهای گروهی اضافه کند؟ </p>
            <p className='text-text1 opacity-50'>همه</p>
          </button>
      </div>
    </div>
  );
}
