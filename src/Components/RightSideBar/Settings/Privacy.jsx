import React, { useState, useRef } from 'react';
import { UilLock, UilBan, UilDesktop, UilArrowRight } from '@iconscout/react-unicons';
import CheckBoxParag from '../../../ui/CheckBoxParag';
import InputSlider from '../../../ui/InputSlider';
import { useDispatch } from 'react-redux';
import { setChild } from '../../../features/rightSideSlice';
export default function Privacy() {
  const [open, setopen] = useState(false);
  const inputslider = useRef(null);
  const dispatch = useDispatch();

  return (
    <div className="flex w-[100%] flex-col items-center justify-center overflow-y-hidden opacity-90">
      <div className="flex flex-row justify-between px-5 mt-5 w-[100%]">
        <button
          onClick={() => {
            dispatch(setChild({ child: 0 }));
          }}>
          <UilArrowRight className={'text-xl text-text1'} />
        </button>
        <span className="text-center text-[17px] font-extrabold text-text1"> حریم خصوص و امنیت </span>
      </div>
      <div
        className={
          'flex w-[100%] flex-wrap gap-[10px] overflow-x-hidden pr-2 transition-all duration-300 ease-in-out '
        }>
        <div className=" flex w-[100%] flex-col justify-center gap-2 p-1">
          <button className={'pricaybutton gap-4 py-5'}>
            <UilBan className="mx-1 h-5 w-5 text-text1  " />
            <p className="text-sm text-text1">کاربران مسدود</p>
          </button>
          <button className={'pricaybutton gap-4 py-5'}>
            <UilDesktop className="mx-1 h-5 w-5 text-text1 " />
            <p className="text-sm text-text1">نشست های فعال</p>
          </button>
        </div>
        <div className="notifsdiv nb-0 m-2 mb-0 border-t-2 p-3 pb-0">
          <p className="py-3 text-[17px] text-gray-500"> حریم خصوصی </p>
        </div>
        <button className={'pricaybutton flex flex-col items-start gap-4 p-5'}>
          <p className="text-sm text-text1">چه کسی می‌تواند مرا به گفتگوهای گروهی اضافه کند؟ </p>
          <p className="text-text1 opacity-50">همه</p>
        </button>
      </div>
    </div>
  );
}
