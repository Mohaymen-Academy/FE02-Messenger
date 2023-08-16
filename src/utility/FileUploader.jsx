import React, { useRef, useState } from 'react';
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
  const uploadedFile = useRef(null);
  const fileinput = useRef(null);
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
  function handleFileuploaded(e) {
    uploadedFile.current = fileinput.current.files[0];
    console.log();
    const reader = new FileReader();
    reader.onload = (e) => {
      const base64string = e.target.result.split(',')[1];
      console.log(base64string);
      // base64Output.innerHTML = `<img src="${base64String}" alt="Uploaded Image"><p>Base64 String: ${base64String}</p>`;
    };
    // console.log();
    reader.readAsDataURL(uploadedFile.current);
  }
  return (
    <div
      onMouseOver={openthediv}
      //   onMouseLeave={closediv}
      className="hover:cursor-pointer mx-1 h-8 w-8 text-text1">
      <UilPaperclip/>

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
          onClick={(e) => {
            // uploadedFile.current=
            fileinput.current.click();
          }}>
          <input type="file" className="hidden" ref={fileinput} onInput={handleFileuploaded} />
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
    </div>
  );
}
