import React, { useState } from 'react';

export default function CheckBoxData({ title }) {
  return (
    <div>
      <button className={'notifsbutton'}>
        <label className={'inline-flex items-center'}>
          <input
            className={'beautyinput rounded-full w-6 h-6'}
            type="checkbox"
            onChange={(e) => setisActive((prev) => !prev)}
          />
        </label>
        <div className={'text-right'}>
          <h1 className={'text-lg text-text1'}> {title}</h1>
        </div>
      </button>
    </div>
  );
}
