import React, { useState, useRef } from 'react';
import { UilBell } from '@iconscout/react-unicons';
import CheckBoxParag from '../../../ui/CheckBoxParag';
import InputSlider from '../../../ui/InputSlider';

export default function Notifs() {
  const [open, setopen] = useState(false);
  const inputslider = useRef(null);
  return (
    <div className="flex w-[100%] flex-col items-center justify-center overflow-y-hidden opacity-90">
      <span className="mt-2 w-[100%] border-b-2 border-bghovor p-5 pt-0 text-center text-[17px] font-extrabold text-text1">
        اعلان‌ها و صداها
      </span>

      <div
        className={
          'flex w-[100%] flex-wrap gap-[10px] overflow-x-hidden pr-2 transition-all duration-300 ease-in-out '
        }>
        <div className={'notifsdiv pt-3'}>
          <p htmlFor="" className="py-3 text-[17px] text-gray-500">
            اعلان ها و صدا ها
          </p>
          {<CheckBoxParag title={'اعلان ها و صداها'} />}
          {<InputSlider title={'بلندی صدا'} />}
        </div>
        <div className="notifsdiv border-t-2 pt-3">
          <p className="py-3 text-[17px] text-gray-500">گفت و گوهای اختصاصی</p>
          {<CheckBoxParag title={'اعلان گفتگوهای اختصاصی'} />}
          {<CheckBoxParag title={'پیش نمایش پیام'} />}
        </div>
        <div className="notifsdiv border-t-2 pt-3">
          <p className="py-3 text-[17px] text-gray-500">گروه ها</p>
          {<CheckBoxParag title={'اعلان های گروه'} />}
          {<CheckBoxParag title={'پیش نمایش پیام'} />}
        </div>

        {/* <div className="notifsdiv border-t-2 pt-3">
          <p className="text-gray-500 py-3 text-[17px]">سایر</p>
          {<CheckBoxParag title={'مخاطب به مسجر پیوست'} />}
        </div> */}
      </div>
    </div>
  );
}
