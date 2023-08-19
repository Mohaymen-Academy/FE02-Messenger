import React, { useState, useContext, useEffect } from 'react';
import LeftLayout from '../LeftSideBar/LeftLayout';
import { TYPE_GROUP } from '../../utility/Constants';
import { ChatBody, ChatHeader } from '../ChatComps';


export default function GroupChat({ chatid, setChatId }) {
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
              <ChatHeader chattype={TYPE_GROUP} chatsetter={setChatId} setActive={setActive} />
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
