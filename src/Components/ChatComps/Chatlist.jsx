import React, { useState, useEffect, useRef } from 'react';
import { connect, useDispatch, useSelector, useStore } from 'react-redux';
import { TYPE_USER } from '../../utility/Constants.js';
import ChatCardPreview from './ChatCardPreview.jsx';
import HandleScroll from '../../utility/HandleScroll.js';
import store from '../../Store/store.js';
import { setActiveMessage } from '../../features/chatCardPreviewSlice.js';



const Chatlist = () => {
  const listRef = useRef(null);
  const dispatch = useDispatch();
  const HandleScroller = HandleScroll();
  const lists = useSelector((store) => store.messageList.messages);
  /**
 *
 {
        "profile": {
            "profileID": 1,
            "profileName": "Ali",
            "type": "USER",
            "defaultProfileColor": {}
        },
        "lastMessage": {
            "messageID": 1,
            "text": "سلام",
            "time": "2023-08-09T19:57:36.18063",
            "viewCount": 0
        },
        "unreadMessageCount": 1
    }
 */
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
        />
      ))}
    </div>
  );
};

export default Chatlist;
