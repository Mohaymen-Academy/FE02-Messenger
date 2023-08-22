import React, { useState, useEffect, useRef } from 'react';
import { ChatBody, ChatHeader, ChatFooter } from './';
import LeftLayout from '../LeftSideBar/LeftLayout';
import { TYPE_USER } from '../../utility/Constants';
import { resetChatId } from '../../features/SelectedInfo';
import { useDispatch, useSelector } from 'react-redux';

export default function ChatContainer() {
  const [active, setActive] = useState(false);
  const chatType = useSelector((state) => state.selectedProf.chatType);
  const chatID = useSelector((state) => state.selectedProf.selectedChatID);
  const dispatch = useDispatch();
  const bodyref = useRef(null);
  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key == 'Escape') {
        dispatch(resetChatId());
      }
    });
  }, []);
  return (
    <>
      <div className="flex flex-row">
        {chatID ? (
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
                setActive={setActive}
                chattype={chatType}
                chatid={chatID}
              />
              <ChatBody bodyref={bodyref} chattype={chatType} chatid={chatID} />
              <ChatFooter chattype={chatType} chatid={chatID} />
            </div>
            <LeftLayout chatid={chatID} active={active} setActive={setActive} />
          </>
        ) : (
          <></>
        )}
      </div>
      {/* {active ?  : <></>} */}
    </>
  );
}
