import React from 'react';
import ContactCardPreview from "./ContactCardPreview";
import { UilArrowRight, UilCameraPlus, UilTrashAlt } from '@iconscout/react-unicons';

export default function GroupSettings({ selected }) {
  const [grupname, setgrupname] = React.useState('');

  const handleGroupname = (e) => {
    if (e.length > 0) {
      setgrupname(e);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-[120px] h-[120px] my-7 flex justify-center items-center rounded-full cursor-pointer bg-blue-600">
        <UilCameraPlus className={'w-[50%] h-[50%] hover:w-[55%] hover:h-[55%] text-white'} />
      </div>
      <div className='flex flex-col gap-3 w-full '>
        <div className="relative w-full">
          <input
            type="text"
            id="floating_outlined"
            onChange={(e) => handleGroupname(e.target.value)}
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 rounded-lg border-2 border-blue-500 appearance-none bg-color2 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label className="absolute text-sm text-gray-500 bg-color2 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 right-3">
            نام گروه
          </label>
        </div>
        {grupname !== "" && (
          <div className='flex justify-between items-center w-full'>
            <p className='text-text1'>ایجاد گروه</p>
          </div>
        )}
        <div className='h-0.5 w-full flex bg-bghovor m-5'></div>
        <p className='text-text1'>{selected.length} عضو</p>
        {grupname !== "" &&
          selected.map((x, i) => (
            <ContactCardPreview chatid={i} key={i} />
          ))}
      </div>
    </div>
  );
}
