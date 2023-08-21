// import { useState } from "react";
import React, { useEffect, useContext, useState, useRef, useMemo } from 'react';
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
  const interval = useRef(
    setInterval(async () => {
      fetch(
        'http://192.168.70.223:8080?' +
          new URLSearchParams({
            active_chat: chatID != null ? chatID : 0
          }),
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `${token}`
          },
          method: 'GET'
        }
      )
        .then((resp) => resp.json())
        .then((data) => dispatch(setMessages(data)));
    }, 1000)
  );
  console.error(interval.current);
  // const activechat=useSelector(state=>state.)
  const dispatch = useDispatch();
  // const worker = new WorkerBuilder(Worker);
  // let interval;
  const Chats = {
    [TYPE_USER]: <UserChat chatid={chatID} />,
    [TYPE_GROUP]: <GroupChat chatid={chatID} />,
    [TYPE_CHANNEL]: <ChannelChat chatid={chatID} />
  };

  useEffect(() => {
    dispatch(GetContacts());
    document.addEventListener('keydown', (e) => {
      if (e.key == 'Escape') {
        dispatch(resetChatId());
      }
    });
    () => {
      clearInterval(interval.current);
    };
  }, []);

  useEffect(() => {
    clearInterval(interval.current);
    if (chatID) {
      console.error('zarp');
      console.error(interval);
    }
  });

  return Chats[chatType];
}
