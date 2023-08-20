import React, { useState, useRef } from 'react';
// import CheckBoxChatSetting from '../CheckBoxChatSetting';
import { UilImage } from '@iconscout/react-unicons';
import InputSlider from '../../../ui/InputSlider';
import InpuSliderTextStep from '../../../ui/InpuSliderTextStep';
import Radioinput from '../../../ui/Radioinput';
import RadioinputTimeFormat from '../../../ui/RadioinputTimeFormat';

export default function ChatSetting() {
  const [open, setopen] = useState(false);
  const inputslider = useRef(null);
  return (
    <div className="flex w-[100%] flex-col items-center justify-center overflow-y-hidden opacity-90">
      <span className="mt-2 w-[100%] border-b-2 border-bghovor p-5 pt-0 text-center text-[17px] font-extrabold text-text1">
        تنظیمات گفتگو
      </span>
      <div
        className={
          'flex w-[100%] flex-wrap gap-[20px] overflow-y-auto overflow-x-hidden pr-2 transition-all duration-300 ease-in-out'
        }>
        <div className={'notifsdiv pt-3'}>
          <p className="py-3 text-[17px] text-gray-500">تنظیمات</p>
          {<InputSlider title={'اندازه متن پیام'} />}
          <button className={'pricaybutton'}>
            <UilImage className="mx-1 h-8 w-8 text-text1" />
            <p className="text-text1">پس زمینه گفتگو</p>
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
            <p className="py-3 text-[17px] text-gray-400">میزان انیمیشن</p>
            <p className="text-xs text-gray-500">مقدار انیمیشن خود را انتخاب کنید</p>
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
