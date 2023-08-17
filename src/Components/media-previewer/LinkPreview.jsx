import React from 'react';

/**
 *
 * */
export default function LinkPreview({ link }) {
  const baseurl = 'Youtube.com';
  return (
    <div className="pr-5 flex flex-row gap-3 my-2 hover:opacity-70  rounded-lg">
      <div className="flex bg-color4 w-[60px] h-[60px] cursor-default text-center items-center text-text1 justify-center text-lg rounded-lg">
        <p>Y</p>
      </div>
      <div
      className='flex flex-col text-color3 text-sm mt-2.5'>
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
