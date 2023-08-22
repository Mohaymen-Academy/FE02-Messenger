// import { useState } from "react";
import React, { useEffect, useContext, useCallback } from 'react';
import UserChat from '../User/UserChat';
import GroupChat from '../Group/GroupChat';
import ChannelChat from '../Channel/ChannelChat';
// import { setMessages } from '../../features/messageListSlice';
// import Request from '../../API/Requests';
// import Worker from ''
import { resetChatId } from '../../features/SelectedInfo';
import { useSelector } from 'react-redux';
import { TYPE_USER, TYPE_CHANNEL, TYPE_GROUP } from '../../utility/Constants';

export default function ChatLayout() {
  const chatType = useSelector((state) => state.selectedProf.chatType);
  const chatID = useSelector((state) => state.selectedProf.selectedChatID);
  const Chats = {
    [TYPE_USER]: <UserChat chatid={chatID} />,
    [TYPE_GROUP]: <GroupChat chatid={chatID} />,
    [TYPE_CHANNEL]: <ChannelChat chatid={chatID} />
  };

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key == 'Escape') {
        dispatch(resetChatId());
      }
    });
  }, []);

  return Chats[chatType];
}
