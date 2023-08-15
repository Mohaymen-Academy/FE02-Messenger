// import { useState } from "react";
import React, { useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LayoutContext } from '../Layout';
import UserChat from '../User/UserChat';
import GroupChat from '../Group/GroupChat';
import ChannelChat from '../Channel/ChannelChat';
import WorkerBuilder from '../../Workers/web/WorkerBuilder';
import Worker from '../../Workers/web/RequestHandler';
// import { setMessages } from '../../features/messageListSlice';
// import Request from '../../API/Requests';
// import Worker from ''
import { TYPE_CHANNEL, TYPE_GROUP, TYPE_USER } from '../../utility/Constants';
import { setMessages } from '../../features/chatCardPreviewSlice';
// import { getMessgeList } from '../../features/messageListSlice';

export default function ChatLayout() {
  // const chatTools = useContext(LayoutContext);
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
  console.log(chatType);

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key == 'Escape') {
        chatTools.dispatch({ type: 'null' });
      }
    });
    const infinityInterval = setInterval(infinityRequest, 1000);
    return () => {
      clearInterval(infinityInterval);
    };
  }, []);

  function infinityRequest() {
    // console.log('here');
    worker.postMessage(token);
    worker.onmessage = (msg) => {
      // console.log(msg.data);
      dispatch(setMessages(msg.data));
    };
  }
  return Chats[chatType];
}
