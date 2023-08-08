import { useState } from 'react';
import { UilUser } from '@iconscout/react-unicons';
export default function PersonalMenu() {
  const [open, setopen] = useState(false);
  return (
    <div className="flex flex-col w-[100%] border-[1px] border-gray-400">
      <button
        onClick={() => setopen((prevestate) => !prevestate)}
        className={'flex w-full h-10 items-center justify-between  bg-color3 p-2 '}>
        <div className="flex items-center gap-2">
          <UilUser className="text-text1 w-8 h-8 mx-1 " />
          <span className="text-[12px] font-extrabold text-text1 ">اطلاعات شخصی</span>
        </div>
        <svg
          className={`w-2.5 h-2.5 ml-2.5 ${open ? 'transform rotate-180' : ''}`}
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
        className={`transition-all ease-in-out duration-300 flex flex-wrap gap-[20px] overflow-hidden ${
          open ? 'h-[245px]' : 'h-[0px]'
        }`}>
        <div className={'flex flex-col px-3'}>
          <label className={'labeltext'} htmlFor="">
            اسم
          </label>
          <input className={'beautyinput'} type="text" />
          <label className={'labeltext'} htmlFor="">
            ایمیل
          </label>
          <input className={'beautyinput'} type="text" />
          <label className={'labeltext'} htmlFor="">
            شماره تلفن
          </label>
          <input className={'beautyinput'} type="text" />
          <label className={'labeltext'} htmlFor="">
            توضیحات
          </label>
          <input className={'beautyinput'} type="text" />
        </div>
      </div>
    </div>
  );
}
