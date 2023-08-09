import React, { useState, useRef } from 'react';
import CheckBoxChatSetting from '../CheckBoxChatSetting';
import InputSlider from '../InputSlider';
import InpuSliderTextStep from '../InpuSliderTextStep';
import { UilComment } from '@iconscout/react-unicons';
import Radioinput from '../Radioinput';
import RadioinputTimeFormat from '../RadioinputTimeFormat';

export default function ChatSetting() {
  const [open, setopen] = useState(false);
  const inputslider = useRef(null);
  return (
    <div className="flex flex-col w-[100%] p-3 px-5">
      <button
        onClick={() => setopen((prevestate) => !prevestate)}
        className={'flex w-full h-10 items-center justify-between  p-2 '}>
        <div className="flex items-center gap-2">
          <UilComment className="text-text1 w-8 h-8 mx-1 " />
          <span className="text-[12px] font-extrabold text-text1 "> تنظیمات گفتگو</span>
        </div>
        <svg
          className={`w-2.5 h-2.5 ml-2.5 text-text1 ${open ? 'transform rotate-180' : ''}`}
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
          open ? 'h-[280px]' : 'h-[0px]'
        }`}>
        <div className={'notifsdiv pt-3'}>
          <p className="text-gray-500">تنظیمات</p>
          {<InputSlider title={'اندازه متن پیام'} />}
          <button className={'pricaybutton'}>
            <img src="images/person.png" alt="" />
            <p>پس زمینه گفتگو</p>
          </button>
        </div>

        <div className="notifsdiv border-t-2 pt-3">
          <p className="text-gray-500">فرمت زمان</p>
          {/* 
        //   TODO
        //! NEED TO CREATE A TIME PICKER 
           */}
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
            <p className="text-gray-500 ">میزان انیمیشن</p>
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

        <div className="notifsdiv border-t-2 pt-3">
          <p className="text-gray-500">ایموجی</p>
          {<CheckBoxChatSetting title={'گیف ها'} />}
          {<CheckBoxChatSetting title={'ویدیو ها '} />}
          {/* 
        //   TODO
        //! NEED TO CREATE A TIME PICKER 
           */}
        </div>
      </div>
    </div>
  );
}
