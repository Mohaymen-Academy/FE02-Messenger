
import React, { useState } from 'react';
import { UilMultiply } from '@iconscout/react-unicons';

export default function Poll() {
  const [options, setOptions] = useState(['']);
  const [deleteOptionHovered, setDeleteOptionHovered] = useState(null);

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  return (
    <div className='flex flex-col gap-3 w-full'>
          <div className="relative w-full">
            <input
              type="text"
              id="floating_outlined"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 rounded-lg border-2 border-blue-500 appearance-none bg-color2 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label className="absolute text-sm text-gray-500 bg-color2 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 right-3">
              پرسیدن سوال
            </label>
          </div>
      <hr className='my-5' />
      <div className='text-text1'>گزینه های پاسخ</div>
      {options.map((option, index) => (
        <div
          key={index}
          className='flex flex-row justify-center items-center gap-2'
        >
          <div className='relative w-full'>
            <input
              type='text'
              value={option}
              onChange={e => handleOptionChange(index, e.target.value)}
              id="floating_outlined"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 rounded-lg border-2 border-blue-500 appearance-none bg-color2 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label className='absolute text-sm text-gray-500 bg-color2 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] peer'>
              افزودن گزینه
            </label>
          </div>
          <div
            id='deleteoption'
            onClick={() => {
              const newOptions = [...options];
              newOptions.splice(index, 1);
              setOptions(newOptions);
            }}
          >
            <UilMultiply className='text-text1 hover:text-red-600' />
          </div>
        </div>
      ))}
      <button
        className='w-[100%] h-12 rounded-xl bg-blue-400 text-white text-xl font-semibold'
        onClick={handleAddOption}
      >
        افزودن گزینه
      </button>
    </div>
  );
}
