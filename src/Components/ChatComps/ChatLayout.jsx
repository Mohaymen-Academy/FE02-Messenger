// import { useState } from "react";
import React, { useEffect, useContext, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserChat from '../User/UserChat';
import GroupChat from '../Group/GroupChat';
import ChannelChat from '../Channel/ChannelChat';
import WorkerBuilder from '../../Workers/web/WorkerBuilder';
import Worker from '../../Workers/web/RequestHandler';
// import { setMessages } from '../../features/messageListSlice';
// import Request from '../../API/Requests';
// import Worker from ''
import { TYPE_CHANNEL, TYPE_GROUP, TYPE_USER } from '../../utility/Constants';
import { GetContacts, setMessages } from '../../features/chatCardPreviewSlice';
import { resetChatId } from '../../features/SelectedInfo';

export default function ChatLayout() {
  const chatType = useSelector((state) => state.selectedProf.chatType);
  const chatID = useSelector((state) => state.selectedProf.selectedChatID);
  const token = useSelector((state) => state.profile.jwt);
  const dispatch = useDispatch();
  const worker = new WorkerBuilder(Worker);
  const Chats = {
    [TYPE_USER]: <UserChat chatid={chatID} />,
    [TYPE_GROUP]: <GroupChat chatid={chatID} />,
    [TYPE_CHANNEL]: <ChannelChat chatid={chatID} />
  };

  useEffect(() => {
    worker.postMessage({ token, chatID: 0 });
    worker.onmessage = (msg) => {
      dispatch(setMessages(msg.data));
    };
    dispatch(GetContacts());
    document.addEventListener('keydown', (e) => {
      if (e.key == 'Escape') {
        dispatch(resetChatId());
      }
    });
  }, []);

  return Chats[chatType];
}
