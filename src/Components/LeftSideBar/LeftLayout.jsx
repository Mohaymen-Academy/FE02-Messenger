import React, { useState } from 'react';
import {LeftSide ,ProfileEdit} from './';

export default function LeftLayout({ active, setActive }) {
  const [layout, setlayout] = useState(0);
  //   const [active, ] = useState(false);
  //   console.log(setlayout)
  const Pages = [
    <LeftSide isActive={active} setActive={setActive} setlayout={setlayout} />,
    <ProfileEdit isActive={active} setActive={setActive} setlayout={setlayout} />
  ];
  // const

  return (
    <div
      className={`flex flex-col relative h-screen transition-all duration-200 ease-in ${
        active ? 'desktop:w-[60%] laptop:w-[100%] left-0 mobile:w-[150%] tablet:w-[150%] smmobile:w-[150%] vsmmobile:w-[100%]' : 'w-0 left-[-150%]'
      }`}>
      {Pages[layout]}
    </div>
  );
}
