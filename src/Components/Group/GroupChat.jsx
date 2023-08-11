import React, { useState, useContext, useEffect } from 'react';
import LeftLayout from '../LeftSideBar/LeftLayout';
import { LayoutContext } from '../Layout';
import { TYPE_GROUP } from '../../utility/Constants';
import { ChatBody } from '../ChatComps';
export default function GroupChat({chatid}) {
  const [active, setActive] = useState(false);
  return (
    <>
      <div className="flex flex-row">
        {chatTools.chatid ? (
          <>
            <div
              className={`
            relative
            desktop:w-[100%]
            laptop:w-[100%]
            smmobile:w-[100%]
            ${active ? 'vsmmobile:w-0' : 'vsmmobile:w-full'}
            `}>
              <ChatBody chatsetter={chatTools.setChatId} setActive={setActive} />
              <ChatBody chattype={TYPE_GROUP} />
            </div>
            <LeftLayout CHATTYPE={TYPE_GROUP} id={1} active={active} setActive={setActive} />
          </>
        ) : (
          <></>
        )}
      </div>
      {/* {active ?  : <></>} */}
    </>
  );
}
