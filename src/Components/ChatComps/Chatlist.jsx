import React, { useState, useEffect ,useRef} from 'react';
import { TYPE_USER } from '../../utility/Constants.js';
import ChatCardPreview from './ChatCardPreview.jsx';
import HandleScroll from '../../utility/HandleScroll.js';
const Chatlist = ({ dispatch }) => {
  const listRef = useRef(null);
  const HandleScroller = HandleScroll();
  const [chatPreviews, setChatPreviews] = useState([...Array(20)].map((_, i) => (
    <ChatCardPreview
      key={i}
      chattype={TYPE_USER}
      chatid={i}
      setter={dispatch}
      unreadmessage={5}
    />
  )));

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
    <div ref={listRef} onScroll={()=>handleScroll(listRef)} className=" mt-4 w-full h-full overflow-y-auto">
      {chatPreviews}
    </div>
  );
};

export default Chatlist;
