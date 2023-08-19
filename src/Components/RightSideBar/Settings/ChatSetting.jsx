import React, { useState, useRef } from 'react';
// import CheckBoxChatSetting from '../CheckBoxChatSetting';
import InputSlider from '../../../utility/InputSlider';
import InpuSliderTextStep from '../../../utility/InpuSliderTextStep';
import { UilImage } from '@iconscout/react-unicons'
import Radioinput from '../../../utility/Radioinput';
import RadioinputTimeFormat from '../../../utility/RadioinputTimeFormat';

export default function ChatSetting() {
  const [open, setopen] = useState(false);
  const inputslider = useRef(null);
  return (
    <div className="flex flex-col w-[100%] justify-center items-center overflow-y-hidden opacity-90">
      <span className="text-[17px] font-extrabold text-text1 p-5 text-center pt-0 border-b-2 border-bghovor w-[100%] mt-2">
        تنظیمات گفتگو
      </span>
      <div
        className={`transition-all ease-in-out duration-300 flex flex-wrap gap-[20px] overflow-x-hidden overflow-y-auto pr-2 w-[100%]`}>
        <div className={'notifsdiv pt-3'}>
          <p className="text-gray-500 py-3 text-[17px]">تنظیمات</p>
          {<InputSlider title={'اندازه متن پیام'} />}
          <button className={'pricaybutton'}>
            <UilImage className="text-text1 w-8 h-8 mx-1" />
            <p className='text-text1'>پس زمینه گفتگو</p>
          </button>
        </div>

        <div className="notifsdiv border-t-2 pt-3">
          <p className="text-gray-500">فرمت زمان</p>
          <div className="flex flex-col">
            {
              <RadioinputTimeFormat
                headers={['12-hour', '24-hour']}
                subtitles={['05:35pM', '17:35']}
                setters={[]}
              />
            }
          </div>
        </div>
        <div className="notifsdiv border-t-2 pt-3">
          <div className={'flex flex-col gap-3'}>
            <p className="text-gray-400 py-3 text-[17px]">میزان انیمیشن</p>
            <p className="text-gray-500 text-xs">مقدار انیمیشن خود را انتخاب کنید</p>
          </div>
        </div>
        {/* <div className="notifsdiv border-t-2 pt-3">
          <p className="text-gray-500">پخش خودکار رسانه ها</p>
        </div> */}
        <InpuSliderTextStep />
        <div className="notifsdiv border-t-2 pt-3">
          <p className="text-gray-500">صفحه کلید</p>
          {
            <Radioinput
              headers={['ارسال با کلید Enter', 'ارسال با کلید Ctrl + Enter']}
              subtitles={['خط جدید با Enter + Shift', 'خط جدید با Enter']}
              setters={[]}
            />
          }
        </div>

        {/* <div className="notifsdiv border-t-2 pt-3">
          <p className="text-gray-500">ایموجی</p>
          {<CheckBoxChatSetting title={'گیف ها'} />}
          {<CheckBoxChatSetting title={'ویدیو ها '} />} */}
          {/* 
        //   TODO
        //! NEED TO CREATE A TIME PICKER 
           */}
        {/* </div> */}
      </div>
    </div>
  );
}
