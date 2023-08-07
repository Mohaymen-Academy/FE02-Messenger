import React, { useState } from 'react';

export default function CheckBoxParag({ title }) {
  const [isActive, setisActive] = useState(false);
  return (
    <div>
      <button className={'notifsbutton'}>
        <input
          className={'beautyinput'}
          type="checkbox"
          onChange={(e) => setisActive((prev) => !prev)}
        />
        <div className={'text-right'}>
          <h1 className={'text-lg text-text1'}> {title}</h1>
          <p className="text-gray-500">{isActive ? 'فعال' : 'غیر فعال'}</p>
        </div>
      </button>
    </div>
  );
}
