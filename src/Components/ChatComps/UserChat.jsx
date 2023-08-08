import React, { useState } from 'react';
import { ChatBody, ChatHeader } from './';
import Rightside from '../Rightside.jsx';

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
        <Rightside isActive={active} />
      </div>
      {/* {active ?  : <></>} */}
    </>
  );
}
