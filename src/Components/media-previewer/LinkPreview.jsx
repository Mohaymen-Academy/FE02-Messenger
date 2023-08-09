import React from 'react';

/**
 *
 * */
export default function LinkPreview({ link }) {
  const baseurl = 'Youtube.com';
  return (
    <div className="pr-5 flex flex-row gap-3">
      <div className="flex bg-color2 w-[70px] h-[70px] cursor-default text-center items-center text-text1 justify-center text-lg rounded-lg">
        <p>Y</p>
      </div>
      <div
      className='flex flex-col text-color3 text-lg'>
        <a href="youtube.com">
          <p className="text-text1 font-bold">Youtube.com</p>
        </a>
        <a href="youtube.com">
          <p>https://youtube.com/</p>
        </a>
      </div>
    </div>
  );
}
