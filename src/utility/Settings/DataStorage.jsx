import React, { useState, useRef } from 'react';
import CheckBoxData from '../CheckBoxData';
import InputSlider from '../InputSlider';
import { UilCloudCheck } from '@iconscout/react-unicons'
export default function DataStorage() {
  const [open, setopen] = useState(false);
  const inputslider = useRef(null);
  return (
    <div className="flex flex-col w-[100%] p-3 px-5">
      <div
        className={`transition-all ease-in-out duration-300 flex flex-wrap gap-[20px] overflow-x-hidden overflow-y-auto pr-2 w-[100%] `}>
              <span className="text-[17px] font-extrabold text-text1 m-5 mt-2 "> داده‌ها و ذخیره‌سازی </span>

        <div className={'notifsdiv '}>
          <p className="text-gray-500">دانلود خودکار عکس ها</p>
          <div className='px-5'>
            <CheckBoxData title={'مخاطبین'} />
            <CheckBoxData title={'گفتگوهای اختصاصی'} />
            <CheckBoxData title={'گفتگوهای گروهی'} />
            <CheckBoxData title={'کانال ها'} />
          </div>
        </div>
        <div className="notifsdiv border-t-2 ">
          <p className="text-gray-500">دانلود خودکار ویدیو ها و گیف ها </p>
          <div className='px-5'>
            {<CheckBoxData title={'مخاطبین'} />}
            {<CheckBoxData title={'گفتگوهای اختصاصی'} />}
            {<CheckBoxData title={'گفتگوهای گروهی'} />}
            {<CheckBoxData title={'کانال ها'} />}
          </div>
        </div>
        <div className="notifsdiv border-t-2 ">
          <p className="text-gray-500">دانلود خودکار فایل ها و موسیقی </p>
          <div className='px-5'>
            {<CheckBoxData title={'مخاطبین'} />}
            {<CheckBoxData title={'گفتگوهای اختصاصی'} />}
            {<CheckBoxData title={'گفتگوهای گروهی'} />}
            {<CheckBoxData title={'کانال ها'} />}
          </div>
        </div>
        <div className="notifsdiv border-t-2 ">
          <p className="text-gray-500">پخش خودکار رسانه ها</p>
          <div className='px-5'>
            {<CheckBoxData title={'گیف ها'} />}
            {<CheckBoxData title={'ویدیو ها '} />}
          </div>
        </div>
      </div>
    </div>
  );
}
