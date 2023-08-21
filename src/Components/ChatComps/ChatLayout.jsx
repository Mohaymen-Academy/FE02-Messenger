// import { useState } from "react";
import React, { useEffect, useContext } from 'react';
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
  // const activechat=useSelector(state=>state.)
  const dispatch = useDispatch();
  const worker = new WorkerBuilder(Worker);
  let interval;
  const Chats = {
    [TYPE_USER]: <UserChat chatid={chatID} />,
    [TYPE_GROUP]: <GroupChat chatid={chatID} />,
    [TYPE_CHANNEL]: <ChannelChat chatid={chatID} />
  };

  useEffect(() => {
    // interval = setInterval(async () => {
    worker.postMessage({ token, chatID: chatID || 0 });
    worker.onmessage = (msg) => {
      dispatch(setMessages(msg.data));
    };
    // }, 1000);
    dispatch(GetContacts());

    document.addEventListener('keydown', (e) => {
      if (e.key == 'Escape') {
        dispatch(resetChatId());
      }
    });
  }, []);
  useEffect(() => {
    worker.terminate();
    console.log('zarp')
    // if (chatID) {
    //   worker.postMessage({ token, chatID: chatID });
    // } else {
    //   worker.postMessage({ token, chatID: 0 });
    // }
    // worker.onmessage = (msg) => {
    //   dispatch(setMessages(msg.data));
    // };
    // dispatch(GetContacts());
  });

  return Chats[chatType];
}
