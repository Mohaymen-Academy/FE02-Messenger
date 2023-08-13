import React, { useRef, useState } from 'react';
import { UilSmile, UilMessage, UilPaperclip } from '@iconscout/react-unicons';
import { UilCommentAltChartLines } from '@iconscout/react-unicons';
import { UilFile } from '@iconscout/react-unicons';
import { UilImagePlus } from '@iconscout/react-unicons';
export default function FileUploader({setopenPoll}) {
  const [open, setopen] = useState(false);
  const fileinputer = useRef(null);
  const [inputedfile, setinputedfile] = useState(null);
  function handlefileuploader(e) {
    fileinputer.current.click();
  }
  function openthediv() {
    setopen(true);
  }

  function closediv() {
    setopen(false);
  }
  function handlechangefile(e) {
    // console.log(e)
    const file = e.target.files[0];
    console.log(file)
    const formdata = new FormData();
    formdata.append('image', file, file.name);
    console.log(formdata);
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
          onClick={handlefileuploader}>
          <div className="flex items-center gap-2 my-1">
            <input onChange={handlechangefile} type="file" className="hidden" ref={fileinputer} />
            <UilFile />
          </div>
          <p className=" text-xs">فایل</p>
        </button>
        <button
          className=" flex flex-row items-center gap-2 px-4 my-1 w-full hover:bg-gray-200 rounded-lg"
          onClick={(e) => setopenPoll(true)}>
          <div className="flex items-center gap-2 my-1">
            <UilCommentAltChartLines />
          </div>
          <p className=" text-xs" >نظرسنجی</p>
        </button>
      </div>
    </button>
  );
}
