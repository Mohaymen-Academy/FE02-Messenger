import React from 'react';

const Avatar = ({ isOnline, image }) => (
  <div className="relative p-2">
    <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-orange-500 ">
      {image?.length == 1 ? (
        <p className=" h-[100%] flex align-center items-baseline text-center text-2xl font-normal text-white">{image}</p>
      ) : (
        <img src={image} alt="" />
      )}
      
    </div>
    {isOnline ? (
      <span className="absolute left-2/3 top-3/4 block h-2 w-2 rounded-full bg-green-500 shadow-lg shadow-green-300"></span>
    ) : null}
  </div>
);

export default Avatar;
