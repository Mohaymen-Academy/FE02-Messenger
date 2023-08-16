import React, { useState, useRef } from 'react';
import CheckBoxParag from '../CheckBoxParag';
import InputSlider from '../InputSlider';
import { UilBell } from '@iconscout/react-unicons'

export default function Notifs() {
  const [open, setopen] = useState(false);
  const inputslider = useRef(null);
  return (
    <div className="flex flex-col w-[100%] justify-center items-center  px-10 p-3">
      <span className="text-[17px] font-extrabold text-text1 p-5 text-center pt-0 border-b-2 w-[130%] ">  اعلان‌ها و صداها  </span>

      <div
        className={`transition-all ease-in-out duration-300 flex flex-wrap gap-[35px] overflow-x-hidden overflow-y-auto pr-2 w-[100%] `}>
        <div className={'notifsdiv pt-3'}>
          <p htmlFor="" className="text-gray-500 py-5 text-[17px]">
            اعلان ها و صدا ها
          </p>
          {<CheckBoxParag title={'اعلان ها و صداها'} />}
          {<InputSlider title={'بلندی صدا'} />}
        </div>
        <div className="notifsdiv border-t-2 pt-3">
          <p className="text-gray-500">گفت و گوهای اختصاصی</p>
          {<CheckBoxParag title={'اعلان گفتگوهای اختصاصی'} />}
          {<CheckBoxParag title={'پیش نمایش پیام'} />}
        </div>
        <div className="notifsdiv border-t-2 pt-3">
          <p className="text-gray-500">گروه ها</p>
          {<CheckBoxParag title={'اعلان های گروه'} />}
          {<CheckBoxParag title={'پیش نمایش پیام'} />}
        </div>

        <div className="notifsdiv border-t-2 pt-3">
          <p className="text-gray-500">سایر</p>
          {<CheckBoxParag title={'مخاطب به مسجر پیوست'} />}
        </div>
      </div>
    </div>
  );
}
