import React, { useRef, useState } from 'react';
import {
  UilSmile,
  UilMessage,
  UilPaperclip,
  UilCommentAltChartLines,
  UilFile,
  UilImagePlus,
  UilMicrophone
} from '@iconscout/react-unicons';
import { TYPE_USER } from './Constants';

export default function FileUploader({ openpull, openfile, chattype }) {
  const [open, setopen] = useState(false);
  let timer;

  const uploadedFile = useRef(null);
  const fileinput = useRef(null);
  const base64img = useRef(null);
  function openthediv() {
    setopen(true);
  }
  function closediv() {
    setopen(false);
  }
  // function handlefileuplodview(e) {
  // }
  function handleFileuploaded(e) {
    console.log('say my name');
    uploadedFile.current = fileinput.current.files[0];
    console.log(uploadedFile.current);
    const reader = new FileReader();
    reader.onload = (e) => {
      const base64string = e.target.result.split(',')[1];
      base64img.current = base64string;
      openfile({
        content: base64string,
        fileName: uploadedFile.current.name,
        'media-type': uploadedFile.current.type,
        size: uploadedFile.current.size
      });
    };
    reader.readAsDataURL(uploadedFile.current);
  }
  return (
    <div
      onMouseOver={openthediv}
      //   onMouseLeave={closediv}
      className="mx-1 h-8 w-8 text-text1 hover:cursor-pointer">
      <UilPaperclip />

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
            <UilMicrophone />
          </div>
          <p className=" text-xs">ضبط صدا</p>
        </button>
        <button
          className=" my-1 flex w-full flex-row items-center gap-2 rounded-lg px-4 hover:bg-gray-200"
          onClick={(e) => {
            fileinput.current.click();
            console.log('here in uploaderrrrrrrrr button');
          }}>
          <input type="file" className="hidden" ref={fileinput} onInput={handleFileuploaded} />

          <div className="my-1 flex items-center gap-2">
            <UilFile />
          </div>
          <p className=" text-xs">فایل</p>
        </button>
        {chattype != TYPE_USER ? (
          <button
            className=" my-1 flex w-full flex-row items-center gap-2 rounded-lg px-4 hover:bg-gray-200"
            onClick={(e) => openpull(true)}>
            <div className="my-1 flex items-center gap-2">
              <UilCommentAltChartLines />
            </div>
            <p className=" text-xs">نظرسنجی</p>
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
