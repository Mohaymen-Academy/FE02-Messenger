import React, { useState } from 'react';

export default function CheckBoxParag({ title }) {
  const [isActive, setisActive] = useState(false);
  return (
    <div>
      <button className={'notifsbutton my-5'}>
      <input
        className="w-4 h-4 m-1.5 accent-color3	"
        type="checkbox"
        checked={isActive}
        onChange={() => setisActive(!isActive)}
      />
        <div className={'text-right'}>
          <h1 className={'text-lg text-text1'}> {title}</h1>
          <p className="text-gray-500 text-[14px]">{isActive ? 'فعال' : 'غیر فعال'}</p>
        </div>
      </button>
    </div>
  );
}
