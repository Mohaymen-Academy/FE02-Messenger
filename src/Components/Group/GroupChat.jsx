import React, { useState, useContext, useEffect } from 'react';
import GroupBody from './GroupBody';
import LeftLayout from '../LeftSideBar/LeftLayout';
import { LayoutContext } from '../Layout';
import { TYPE_GROUP } from '../../utility/Constants';
export default function GroupChat() {
  const [active, setActive] = useState(false);
  const chatTools = useContext(LayoutContext);
  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key == 'Escape') {
        chatTools.setChatId(null);
      }
    });
  }, []);
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
              <GroupHeader chatsetter={chatTools.setChatId} setActive={setActive} />
              <GroupBody />
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
