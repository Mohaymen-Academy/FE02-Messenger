import React, { useState } from 'react';
import { UilSmile, UilMessage, UilPaperclip } from '@iconscout/react-unicons';
import { UilCommentAltChartLines } from '@iconscout/react-unicons';
import { UilFile } from '@iconscout/react-unicons';
import { UilImagePlus } from '@iconscout/react-unicons';
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
      className="mx-1 h-8 w-8 text-text1 hover-trigger">
      <UilPaperclip hover-trigger />

      <div
        onMouseLeave={closediv}
        className={`${
          open ? 'block' : 'hidden'
        } relative  top-[-145px]  shadow-2xl w-[250px] bg-color1 text-color4 rounded-lg`}>
        <button
          className="flex flex-row items-center gap-2 px-4 my-1 w-full hover:bg-gray-200 rounded-lg"
          onClick={(e) => setsection(menuId)}>
          <div className="flex items-center gap-2 my-1">
            {/* <UilVolumeMute /> */}
            <UilImagePlus />
          </div>
          <p className=" text-xs">انتخاب عکس یا ویدیو</p>
        </button>
        <button
          className=" flex flex-row items-center gap-2 px-4 my-1 w-full hover:bg-gray-200 rounded-lg"
          onClick={(e) => setsection(menuId)}>
          <div className="flex items-center gap-2 my-1">
            <UilFile />
          </div>
          <p className=" text-xs">فایل</p>
        </button>
        <button
          className=" flex flex-row items-center gap-2 px-4 my-1 w-full hover:bg-gray-200 rounded-lg"
          onClick={(e) => setsection(menuId)}>
          <div className="flex items-center gap-2 my-1">
            <UilCommentAltChartLines />
          </div>
          <p className=" text-xs">نظرسنجی</p>
        </button>
      </div>
    </button>
  );
}
