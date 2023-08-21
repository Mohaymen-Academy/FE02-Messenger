import React, { useState, useEffect, useRef } from 'react';
import { connect, useDispatch, useSelector, useStore } from 'react-redux';
import { TYPE_USER } from '../../utility/Constants.js';
import ChatCardPreview from './ChatCardPreview.jsx';
import HandleScroll from '../../utility/HandleScroll.js';
import store from '../../Store/store.js';
import { GetMessages, Updatecommands, deletemessage } from '../../features/SelectedInfo.js';
import { setActiveMessage } from '../../features/chatCardPreviewSlice.js';
import Requests from '../../API/Requests.js';

const Chatlist = () => {
  const listRef = useRef(null);
  const dispatch = useDispatch();
  const HandleScroller = HandleScroll();
  const lists = useSelector((store) => store.messageList.messages);
  const selectedChat = useSelector((store) => store.selectedProf.selectedChatID);
  const chattype = useSelector((store) => store.selectedProf.chatType);
  const downfinished = useSelector((state) => state.selectedProf.downfinished);
  const upfinished = useSelector((state) => state.selectedProf.upfinished);
  const updatesList = useSelector((state) => state.selectedProf.updatesList);
  // console.error(lists);
  useEffect(() => {
    if (selectedChat) {
      const profile = lists.filter((ele) => ele.profile.profileID == selectedChat)[0];
      // console.error(profile)
      if (profile.length != 0) {
        const updates = profile.updates;
        // console.error(updates);
        if (updates.length != 0) {
          const maxid = Math.max(...updates.map((command) => command.id));
          // console.error(maxid);
          // Requests().UpdateResponse(maxid, selectedChat);
        }
      }
      if (profile.unreadMessageCount != 0) {
        // dispatch(GetMessages({ type: chattype, ID: selectedChat, message_id: 0 }));
      }
      //   console.log(profileinfo);
      //   if (profileinfo.updates && profileinfo.updates.length != 0) {
      // console.log(profileinfo.updates);
      //     if (maxid && maxid != -Infinity) {
      //       console.error(profileinfo.updates);
      // dispatch(Updatecommands({ updates: profileinfo.updates }));
      //     }
      // }
    }
  });
  const handleScroll = (listRef) => {
    // const res = HandleScroller.ReachEnd(listRef);
    // if (res===true) {
    //   const additionalChatPreviews = [...Array(10)].map((_, i) => (
    //     <ChatCardPreview
    //       key={i + chatPreviews.length}
    //       chattype={TYPE_USER}
    //       chatid={i + chatPreviews.length}
    //       setter={dispatch}
    //       unreadmessage={5}
    //     />
    //   ));
    //   setChatPreviews(prevPreviews => [...prevPreviews, ...additionalChatPreviews]);
    // }
  };

  return (
    <div
      ref={listRef}
      onScroll={() => handleScroll(listRef)}
      className=" mt-4 h-full w-full overflow-y-auto">
      {lists?.map((chatprev, index) => (
        <ChatCardPreview
          key={index}
          pinned={chatprev.pinned}
          profile={chatprev.profile}
          lastMessage={chatprev.lastMessage}
          unreadMessageCount={chatprev.unreadMessageCount}
          lastseen={chatprev.lastSeen}
        />
      ))}
    </div>
  );
};

export default Chatlist;
