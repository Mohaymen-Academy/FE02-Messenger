import React from 'react';

const Avatar = ({ image, isOnline, char, imagecolor, size }) => {
  console.log(isOnline);
  return (
    <div>
      <div
        className={`flex  items-center justify-center rounded-full `}
        style={{ backgroundColor: `${imagecolor}`, width: `${size}px`, height: `${size}px` }}>
        {image?.preLoadingContent ? (
          <img
            src={`data:image/jpeg;base64,${image.preLoadingContent}`}
            className={`rounded-full`}
            style={{ width: `${size}px`, height: `${size}px` }}
          />
        ) : (
          <p className=" h-[100%] flex place-items-center text-center text-2xl font-normal text-white">
            {char}
          </p>
        )}
      </div>
      {isOnline == 'آنلاین' ? (
        <span className="relative top-[-10px] block h-3 w-3 rounded-full bg-green-500 shadow-lg shadow-green-300"></span>
      ) : // <p>{isOnline}</p>
      null}
    </div>
  );
};
export default Avatar;
