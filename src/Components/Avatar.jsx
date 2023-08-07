import React from 'react';

const Avatar = ({ isOnline }) => (
  <div className="relative p-2">
    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 p-6 text-center text-2xl font-normal text-white">
      ن
    </div>
    {isOnline ? (
      <span className="absolute left-2/3 top-3/4 block h-2 w-2 rounded-full bg-green-500 shadow-lg shadow-green-300"></span>
    ) : null}
  </div>
);

export default Avatar;
