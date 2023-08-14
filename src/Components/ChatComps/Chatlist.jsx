import React, { useState, useEffect, useRef } from 'react';
import { TYPE_USER } from '../../utility/Constants.js';
import ChatCardPreview from './ChatCardPreview.jsx';
import HandleScroll from '../../utility/HandleScroll.js';
import { connect, useSelector, useStore } from 'react-redux';
import store from '../../Store/store.js';
const Chatlist = ({ dispatch }) => {
  const listRef = useRef(null);
  const HandleScroller = HandleScroll();
  const lists=useSelector(store=>store.messages);
  console.log(lists)


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
      className=" mt-4 w-full h-full overflow-y-auto">
      {/* {lists?.map((chatprev, index) => (
        <ChatCardPreview
          key={index}
          profile={chatprev.profile}
          chattype={TYPE_USER}
          chatid={index}
          lastMessage={chatprev.lastMessage}
          setter={dispatch}
          unreadMessageCount={chatprev.unreadMessageCount}
        />
      ))} */}
    </div>
  );
};

export default Chatlist;
