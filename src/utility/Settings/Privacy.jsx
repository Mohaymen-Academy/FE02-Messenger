import React, { useState, useRef } from 'react';
import CheckBoxParag from '../CheckBoxParag';
import InputSlider from '../InputSlider';
import { UilLock, UilBan ,UilDesktop   } from '@iconscout/react-unicons'

export default function Privacy() {
  const [open, setopen] = useState(false);
  const inputslider = useRef(null);
  return (
    <div className="flex flex-col w-[100%] p-3 px-5">
      <span className="text-[17px] font-extrabold text-text1 m-5 mt-2 ">  حریم خصوصی و امنیت  </span>

      <div
        className={`transition-all ease-in-out duration-300 flex flex-wrap gap-[5px] overflow-x-hidden overflow-y-auto w-[100%] `}>
        <div className=" pb-3 px-5 gap-2 w-[100%] justify-center flex flex-col">
          <button className={'pricaybutton'}>
          <UilBan className="text-text1 w-5 h-5 mx-1 " />
            <p className='text-sm text-text1'>کاربران مسدود</p>
          </button>
          <button className={'pricaybutton'}>
          <UilDesktop className="text-text1 w-5 h-5 mx-1 " />
            <p className='text-sm text-text1'>نشست های فعال</p>
          </button>
        </div>
        <div className="notifsdiv border-t-2 p-3 m-2 pb-0 nb-0">
          <p className="text-gray-500 text-sm">گفت و گوهای اختصاصی</p>
        </div>
      </div>
    </div>
  );
}
