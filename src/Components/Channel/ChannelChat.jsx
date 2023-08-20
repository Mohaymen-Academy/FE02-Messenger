import React, { useState } from 'react';
import { ChatBody, ChatHeader } from '../ChatComps';
import LeftLayout from '../LeftSideBar/LeftLayout';
import { TYPE_CHANNEL } from '../../utility/Constants';

export default function ChannelChat({ chatid, setChatId }) {
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
              <ChatHeader active={active} chattype={TYPE_CHANNEL} chatsetter={setChatId} setActive={setActive} />
              <ChatBody chattype={TYPE_CHANNEL} />
              
            </div>
            <LeftLayout CHATTYPE={TYPE_CHANNEL} id={1} active={active} setActive={setActive} />
          </>
        ) : (
          <></>
        )}
      </div>
      {/* {active ?  : <></>} */}
    </>
  );
}
