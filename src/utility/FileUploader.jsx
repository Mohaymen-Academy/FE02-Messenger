import React, { useState } from 'react';
import {
  UilSmile,
  UilMessage,
  UilPaperclip,
  UilCommentAltChartLines,
  UilFile,
  UilImagePlus
} from '@iconscout/react-unicons';

export default function FileUploader() {
  const [open, setopen] = useState(false);
  let timer;
  function openthediv() {
    // clearTimeout(timer);
    setopen(true);
    // timer = setTimeout(() => {
    //   closediv();
    // }, 1000);
  }
  function closediv() {
    setopen(false);
  }
  return (
    <button
      onMouseOver={openthediv}
      //   onMouseLeave={closediv}
      className="hover-trigger mx-1 h-8 w-8 text-text1">
      <UilPaperclip hover-trigger />

      <div
        onMouseLeave={closediv}
        className={`${
          open ? 'block' : 'hidden'
        } relative  top-[-145px]  w-[250px] rounded-lg bg-color1 text-color4 shadow-2xl`}>
        <button
          className="my-1 flex w-full flex-row items-center gap-2 rounded-lg px-4 hover:bg-gray-200"
          onClick={(e) => setsection(menuId)}>
          <div className="my-1 flex items-center gap-2">
            {/* <UilVolumeMute /> */}
            <UilImagePlus />
          </div>
          <p className=" text-xs">انتخاب عکس یا ویدیو</p>
        </button>
        <button
          className=" my-1 flex w-full flex-row items-center gap-2 rounded-lg px-4 hover:bg-gray-200"
          onClick={(e) => setsection(menuId)}>
          <div className="my-1 flex items-center gap-2">
            <UilFile />
          </div>
          <p className=" text-xs">فایل</p>
        </button>
        <button
          className=" my-1 flex w-full flex-row items-center gap-2 rounded-lg px-4 hover:bg-gray-200"
          onClick={(e) => setsection(menuId)}>
          <div className="my-1 flex items-center gap-2">
            <UilCommentAltChartLines />
          </div>
          <p className=" text-xs">نظرسنجی</p>
        </button>
      </div>
    </button>
  );
}
