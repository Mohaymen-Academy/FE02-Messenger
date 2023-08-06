import { useState } from 'react';

export default function PersonalMenu() {
  const [open, setopen] = useState(false);
  return (
    <div className="flex flex-col gap-[10px] w-[100%] px-0 mt-1">
      <button
        onClick={() => setopen((prevestate) => !prevestate)}
        className={'flex w-full h-10 items-center justify-between  bg-[#1a515c] p-2 '}>
        <div
        className='flex items-center gap-2'>
          <img src="images/person.png" className='rounded-lg' alt="" />
          <span className="text-[12px] font-extrabold text-gray-400 ">اطلاعات شخصی</span>
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
          open ? 'h-[220px]' : 'h-[0px]'
        }`}></div>
    </div>
  );
}
