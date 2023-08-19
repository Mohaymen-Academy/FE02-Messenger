import React, { useState } from 'react';
// import { UilTrash } from '@iconscout/react-unicons'
import { UilEllipsisV, UilVolumeMute, UilCheckCircle, UilTrash } from '@iconscout/react-unicons';
// import {  } from '@iconscout/react-unicons'
// import { } from '@iconscout/react-unicons'
export default function ChatHeaderSettings({ active, icon, title, setsection, menuId }) {
  const [isopen, setisopen] = useState(false);
  return (
    <>
      <button
        style={{ direction: 'rtl' }}
        className={'text-text1 hover:bg-slate-400 rounded-full relative'}
        onClick={(e) => {
          e.stopPropagation();
          setisopen((prev) => !prev);
        }}>
        <UilEllipsisV className="w-[25px] p-0 m-0" />
      </button>
      {active ? (
        <></>
      ) : (
        <div className="z-10">
          <div className="text-text1 flex flex-row-reverse ">
            {isopen ? (
              <div className="fixed top-[60px]  shadow-2xl w-[150px] bg-color1 text-color4 rounded-lg">
                <button
                  className="flex flex-row items-center gap-2 px-4 my-1 w-full hover:bg-gray-200 rounded-lg"
                  onClick={(e) => setsection(menuId)}>
                  <div className="flex items-center gap-2 my-1">
                    <UilVolumeMute />
                  </div>
                  <p className=" text-xs">بی صدا کردن</p>
                </button>
                <button
                  className=" flex flex-row items-center gap-2 px-4 my-1 w-full hover:bg-gray-200 rounded-lg"
                  onClick={(e) => setsection(menuId)}>
                  <div className="flex items-center gap-2 my-1">
                    <UilCheckCircle />
                  </div>
                  <p className=" text-xs">انتخاب مخاطب</p>
                </button>
                <button
                  className=" flex flex-row items-center gap-2 px-4 my-1 w-full hover:bg-gray-200 rounded-lg text-red-600"
                  onClick={(e) => setsection(menuId)}>
                  <div className="flex items-center gap-2 my-1">
                    <UilTrash />
                  </div>
                  <p className=" text-xs">حذف گفتگو</p>
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      )}{' '}
    </>
  );
}
