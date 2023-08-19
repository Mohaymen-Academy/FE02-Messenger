import React, { useState, useEffect, useRef } from 'react';
import { connect, useDispatch, useSelector, useStore } from 'react-redux';
import { TYPE_USER } from '../../utility/Constants.js';
import ChatCardPreview from './ChatCardPreview.jsx';
import HandleScroll from '../../utility/HandleScroll.js';
import store from '../../Store/store.js';
import { GetMessages } from '../../features/SelectedInfo.js';
import { setActiveMessage } from '../../features/chatCardPreviewSlice.js';

const Chatlist = () => {
  const listRef = useRef(null);
  const dispatch = useDispatch();
  const HandleScroller = HandleScroll();
  const lists = useSelector((store) => store.messageList.contacts);

  // const profid = useSelector((state) => state.selectedProf.selectedChatID);

  // useEffect(() => {
  //   if (profid) {
  //     console.log('wer')
  //     //     const shouldUpdate = lists.filter(
  //     //       (ele) => ele.profile.profileID == profid && ele.unreadMessageCount != 0
  //     //     )[0];
  //   }
  // });
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
