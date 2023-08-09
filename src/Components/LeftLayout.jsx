import React, { useState } from 'react';
import LeftSide from './Leftside';
import ProfileEdit from './ProfileEdit';

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
        active ? 'w-[500px] left-0' : 'w-0 left-[-300px]'
      }`}>
      {Pages[layout]}
    </div>
  );
}
