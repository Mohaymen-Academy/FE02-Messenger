import React, { useState, useRef } from 'react';
import { UilBell } from '@iconscout/react-unicons';
import CheckBoxParag from '../../../ui/CheckBoxParag';
import InputSlider from '../../../ui/InputSlider';
import { UilArrowRight } from '@iconscout/react-unicons';
import { useDispatch } from 'react-redux';
import { setChild } from '../../../features/rightSideSlice';
export default function Notifs() {
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
        <span className="text-center text-[17px] font-extrabold text-text1">اعلان‌ها و صداها</span>
      </div>
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
