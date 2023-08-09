import React, { useState, useContext } from 'react';
import { ChatBody, ChatHeader } from '.';
import LeftLayout from '../LeftLayout';
import { LayoutContext } from '../Layout';
export default function UserChat() {
  const [active, setActive] = useState(false);
  const chatTools = useContext(LayoutContext);
  console.log(chatTools);
  return (
    <>
      <div className="flex flex-row">
        {chatTools.chatid ? (
          <>
            <div
              className={`
            relative
            ${active ? 'vsmmobile:w-0' : 'vsmmobile:w-full'}
            `}>
              <ChatHeader chatsetter={chatTools.setChatId} setActive={setActive} />
              <ChatBody />
            </div>
            <LeftLayout active={active} setActive={setActive} />
          </>
        ) : (
          <></>
        )}
      </div>
      {/* {active ?  : <></>} */}
    </>
  );
}
