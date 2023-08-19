import React, { useState, useRef } from 'react';
import CheckBoxData from '../../../utility/CheckBoxData';
// import InputSlider from '../InputSlider';
import { UilCloudCheck } from '@iconscout/react-unicons'
export default function DataStorage() {
  const [open, setopen] = useState(false);
  const inputslider = useRef(null);
  return (
    <div className="flex flex-col w-[100%] justify-center items-center overflow-y-hidden opacity-90">
      <span className="text-[17px] font-extrabold text-text1 p-5 text-center pt-0 border-b-2 border-bghovor w-[100%] mt-2">
       داده‌ها و ذخیره‌سازی
      </span>
      <div className={`transition-all ease-in-out duration-300 flex flex-wrap gap-[25px] overflow-x-hidden pr-2 w-[100%] `}>
        <div className={'notifsdiv '}>
          <p className="text-gray-500  py-3 text-[17px]">دانلود خودکار عکس ها</p>
          <div className='px-5'>
            <CheckBoxData title={'مخاطبین'} />
            <CheckBoxData title={'گفتگوهای اختصاصی'} />
            <CheckBoxData title={'گفتگوهای گروهی'} />
            <CheckBoxData title={'کانال ها'} />
          </div>
        </div>
        <div className="notifsdiv border-t-2 ">
          <p className="text-gray-500 py-3 text-[17px]">دانلود خودکار ویدیو ها و گیف ها </p>
          <div className='px-5'>
            {<CheckBoxData title={'مخاطبین'} />}
            {<CheckBoxData title={'گفتگوهای اختصاصی'} />}
            {<CheckBoxData title={'گفتگوهای گروهی'} />}
            {<CheckBoxData title={'کانال ها'} />}
          </div>
        </div>
        <div className="notifsdiv border-t-2 ">
          <p className="text-gray-500 py-3 text-[17px]">دانلود خودکار فایل ها و موسیقی </p>
          <div className='px-5'>
            {<CheckBoxData title={'مخاطبین'} />}
            {<CheckBoxData title={'گفتگوهای اختصاصی'} />}
            {<CheckBoxData title={'گفتگوهای گروهی'} />}
            {<CheckBoxData title={'کانال ها'} />}
          </div>
        </div>
        <div className="notifsdiv border-t-2 ">
          <p className="text-gray-500 py-3 text-[17px]">پخش خودکار رسانه ها</p>
          <div className='px-5'>
            {<CheckBoxData title={'گیف ها'} />}
            {<CheckBoxData title={'ویدیو ها '} />}
          </div>
        </div>
        </div>
      </div>
  );
}
