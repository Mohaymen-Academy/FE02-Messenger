import React, { useState } from 'react';
import { ChatBody, ChatHeader } from '../ChatComps';
import LeftLayout from '../LeftSideBar/LeftLayout';
import { TYPE_USER } from '../../utility/Constants';

export default function UserChat({ chatid, setChatId }) {
  const [active, setActive] = useState(false);
  return (
    <>
      <div className="flex flex-row">
        {chatid ? (
          <>
            <div
              className={`
            relative
            desktop:w-[100%]
            laptop:w-[100%]
            smmobile:w-[100%]
            ${active ? 'vsmmobile:w-0' : 'vsmmobile:w-full'}
            `}>
              <ChatHeader active={active} chattype={TYPE_USER} chatsetter={setChatId} setActive={setActive} />
              <ChatBody chattype={TYPE_USER} />
            </div>
            <LeftLayout CHATTYPE={TYPE_USER} id={1} active={active} setActive={setActive} />
          </>
        ) : (
          <></>
        )}
      </div>
      {/* {active ?  : <></>} */}
    </>
  );
}
