import { useState } from 'react';
import { UilUser , UilCameraPlus, UilArrowRight} from '@iconscout/react-unicons';
export default function PersonalMenu({image}) {
  const [open, setopen] = useState(false);
  return (
    <div
      className={`flex flex-col h-screen transition-all  duration-100 ease-in  bg-color2 border-r border-bghovor shadow-md`}>
      <div className="flex flex-row w-full h-[70px] m-5 mb-0 place-items-center justify-center">
        <div className="p-1 cardP">ویرایش پروفایل</div>
      </div>
      <div className="flex flex-col  justify-start items-center gap-3 w-full p-5">
        <div className="w-[250px] h-[250px] my-7 flex justify-center items-center rounded-full cursor-pointer bg-blue-600">
          <UilCameraPlus className={'w-[50%] h-[50%] hover:w-[55%] hover:h-[55%] text-white'} />
        </div>
        <div className='flex flex-col gap-3 w-full '>
        <div className="relative w-full">
          <input
            type="text"
            id="floating_outlined"
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900  rounded-lg border-2  border-blue-500 appearance-none  bg-color2 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label className="absolute text-sm text-gray-500 bg-color2 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]   peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 right-3">
            نام  (الزامی)
          </label>
        </div>
        <div className="relative w-full">
          <input
            type="text"
            id="floating_outlined"
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900  rounded-lg border-2  border-blue-500 appearance-none  bg-color2 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label className="absolute text-sm text-gray-500 bg-color2 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]   peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 right-3">
            نام کاربری 
          </label>
        </div>
        <div className="relative w-full">
          <input
            type="text"
            id="floating_outlined"
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900  rounded-lg border-2  border-blue-500 appearance-none  bg-color2 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label className="absolute text-sm text-gray-500 bg-color2 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]   peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 right-3">
            بیوگرافی 
          </label>
        </div>
        </div>
        <button className="w-[100%] mt-10 h-12 rounded-xl bg-blue-400 text-white text-xl font-semibold">
              ذخیره تغییرات 
          </button>
      </div>
    </div>
  );
}





{/* <div className="flex flex-col w-[100%]  px-5 p-3">
<button
  onClick={() => setopen((prevestate) => !prevestate)}
  className={'flex w-full h-10 items-center justify-between p-2 '}>
  <div className="flex items-center gap-2">
    <UilUser className="text-text1 w-8 h-8 mx-1 " />
    <span className="text-[12px] font-extrabold text-text1 ">اطلاعات شخصی</span>
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
  className={`transition-all ease-in-out duration-300  flex flex-wrap overflow-hidden w-full ${
    open ? 'h-[275px]' : 'h-[0px]'
  }`}>
  <div className={'flex flex-col px-7 w-full'}>
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
</div> */}