import React from 'react';

const Avatar = ({ isOnline, image }) => (
  <div className="relative p-2">
    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-blue-400 ">
      {image?.length == 1 ? (
        <p className=" h-[100%] flex place-items-center text-center text-2xl font-normal text-white">{image}</p>
      ) : (
        <img src={image} alt="" />
      )}
      
    </div>
    {isOnline ? (
      <span className="absolute left-2/3 top-2/3 block h-3 w-3 rounded-full bg-green-500 shadow-lg shadow-green-300"></span>
    ) : null}
  </div>
);

export default Avatar;
