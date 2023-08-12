// import { useState } from "react";
import React, { useEffect, useContext } from 'react';
import { LayoutContext } from '../Layout';
import UserChat from '../User/UserChat';
import GroupChat from '../Group/GroupChat';
import ChannelChat from '../Channel/ChannelChat';
import { TYPE_CHANNEL, TYPE_GROUP, TYPE_USER } from '../../utility/Constants';
export default function ChatLayout() {
  const chatTools = useContext(LayoutContext);
  const Chats = {
    [TYPE_USER]: <UserChat setChatId={chatTools.dispatch} chatid={chatTools.chat.chatid} />,
    [TYPE_GROUP]: <GroupChat chatid={chatTools.chat.chatid} />,
    [TYPE_CHANNEL]: <ChannelChat chatid={chatTools.chat.chatid} />
  };
//   console.log(chatTools);

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key == 'Escape') {
        chatTools.dispatch({ type: 'null' });
      }
    });
  }, []);
  return Chats[chatTools.chat.chattype];
}
