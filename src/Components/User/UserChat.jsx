import React, { useEffect, useState } from 'react';
import { ChatBody, ChatHeader } from '../ChatComps';
import LeftLayout from '../LeftSideBar/LeftLayout';
import { TYPE_USER } from '../../utility/Constants';
import Requests from '../../API/Requests';
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
              <ChatHeader
                active={active}
                chattype={TYPE_USER}
                setActive={setActive}
                chatid={chatid}
              />
              <ChatBody chattype={TYPE_USER} chatid={chatid} />
            </div>
            <LeftLayout CHATTYPE={TYPE_USER} chatid={chatid} active={active} setActive={setActive} />
          </>
        ) : (
          <></>
        )}
      </div>
      {/* {active ?  : <></>} */}
    </>
  );
}
