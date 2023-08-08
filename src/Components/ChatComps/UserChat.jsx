import React, { useState } from 'react';
import { ChatBody, ChatHeader } from './';
import LeftSide from '../Leftside';
import ProfileEdit from '../ProfileEdit';
export default function UserChat() {
  const [active, setActive] = useState(false);
  return (
    <>
      <div
      className='flex flex-row'>
        <div
        className='w-[100%]'>
          <ChatHeader setActive={setActive} />
          <ChatBody />
        </div>
        <LeftSide isActive={active} />
        {/* <ProfileEdit isActive={active} /> */}

      </div>
      {/* {active ?  : <></>} */}
    </>
  );
}
