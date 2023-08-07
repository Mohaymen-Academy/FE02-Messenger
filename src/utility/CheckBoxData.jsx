import React, { useState } from 'react';

export default function CheckBoxData({ title }) {
  return (
    <div>
      <button className={'notifsbutton'}>
        <input
          className={'beautyinput rounded-2xl'}
          type="checkbox"
          onChange={(e) => setisActive((prev) => !prev)}
        />
        <div className={'text-right'}>
          <h1 className={'text-lg text-text1'}> {title}</h1>
        </div>
      </button>
    </div>
  );
}
