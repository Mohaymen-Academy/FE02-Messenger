import React from 'react';

const Avatar = ({ isOnline, char, imagecolor }) => (
  <div >
    <div
      className={`flex h-[50px] w-[50px] items-center justify-center rounded-full `}
      style={{ backgroundColor: `${imagecolor}` }}>
      <p className=" h-[100%] flex place-items-center text-center text-2xl font-normal text-white">
        {char}
      </p>
    </div>
    {isOnline ? (
      <span className="relative top-[-10px] block h-3 w-3 rounded-full bg-green-500 shadow-lg shadow-green-300"></span>
    ) : null}
  </div>
);

export default Avatar;
