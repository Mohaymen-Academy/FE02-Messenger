import React, { useState, useContext } from 'react';
import { ChatBody, ChatHeader } from '.';
import LeftLayout from '../LeftLayout';
import { LayoutContext } from '../Layout';
export default function UserChat() {
  const [active, setActive] = useState(false);
  const chatid = useContext(LayoutContext);
  console.log(chatid);
  return (
    <>
      <div className="flex flex-row">
        {chatid ? (
          <>
            <div className="w-[100%]">
              <ChatHeader setActive={setActive} />
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
