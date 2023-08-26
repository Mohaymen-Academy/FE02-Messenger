import React, { useState, useRef } from 'react';
import { UilCloudCheck, UilArrowRight } from '@iconscout/react-unicons';
import CheckBoxData from '../../../ui/CheckBoxData';
import { useDispatch } from 'react-redux';
import { setChild } from '../../../features/rightSideSlice';
// import InputSlider from '../InputSlider';
export default function DataStorage() {
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
        <span className="text-center text-[17px] font-extrabold text-text1">داده‌ها و ذخیره‌سازی</span>
      </div>
      <div
        className={
          'flex w-[100%] flex-wrap gap-[25px] overflow-x-hidden pr-2 transition-all duration-300 ease-in-out '
        }>
        <div className={'notifsdiv '}>
          <p className="py-3  text-[17px] text-gray-500">دانلود خودکار عکس ها</p>
          <div className="px-5">
            <CheckBoxData title={'مخاطبین'} />
            <CheckBoxData title={'گفتگوهای اختصاصی'} />
            <CheckBoxData title={'گفتگوهای گروهی'} />
            <CheckBoxData title={'کانال ها'} />
          </div>
        </div>
        <div className="notifsdiv border-t-2 ">
          <p className="py-3 text-[17px] text-gray-500">دانلود خودکار ویدیو ها و گیف ها </p>
          <div className="px-5">
            {<CheckBoxData title={'مخاطبین'} />}
            {<CheckBoxData title={'گفتگوهای اختصاصی'} />}
            {<CheckBoxData title={'گفتگوهای گروهی'} />}
            {<CheckBoxData title={'کانال ها'} />}
          </div>
        </div>
        <div className="notifsdiv border-t-2 ">
          <p className="py-3 text-[17px] text-gray-500">دانلود خودکار فایل ها و موسیقی </p>
          <div className="px-5">
            {<CheckBoxData title={'مخاطبین'} />}
            {<CheckBoxData title={'گفتگوهای اختصاصی'} />}
            {<CheckBoxData title={'گفتگوهای گروهی'} />}
            {<CheckBoxData title={'کانال ها'} />}
          </div>
        </div>
        <div className="notifsdiv border-t-2 ">
          <p className="py-3 text-[17px] text-gray-500">پخش خودکار رسانه ها</p>
          <div className="px-5">
            {<CheckBoxData title={'گیف ها'} />}
            {<CheckBoxData title={'ویدیو ها '} />}
          </div>
        </div>
      </div>
    </div>
  );
}
