import React, { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import ChatFooter from './ChatFooter.jsx';
import Message from '../message/Message.jsx';
import ImagePreviewer from '../media-previewer/ImagePreviewer.jsx';
import { TYPE_CHANNEL, TYPE_GROUP } from '../../utility/Constants.js';
import MessageDateGroup from '../message/MessageDateGroup.jsx';
import MessageVoice from '../message/MessageVoice.jsx';
import { UilArrowDown } from '@iconscout/react-unicons';
const messages = [
  {
    messageID: 2,
    text: ' 2 سلام',
    time: '21:06',
    media: null,
    viewCount: 0,
    sender: {
      profileID: 1,
      profileName: 'Ali',
      defaultProfileColor: {}
    },
    isPinned: false,
    isEdited: false
  },
  {
    profile: {
      profileID: 1,
      profileName: 'Ali',
      type: 'USER',
      defaultProfileColor: {}
    },
    lastMessage: {
      messageID: 1,
      text: 'سلام',
      time: '2023-08-09T19:57:36.18063',
      viewCount: 0
    },
    unreadMessageCount: 1
  },
  {
    id: 'else',
    seen: true,
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ex',
    repliedMessage: 'zendegito be atish mikesham'
  },
  {
    id: 'you',
    seen: true,
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ex',
    forwarded: 'Mahmoud'
  },
  {
    id: 'you',
    seen: true,
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ex',
    forwarded: 'Mahmoud',
    media: '/images/profile.jpg'
  }
];

export default function ChatBody({ chattype }) {
  const bodyref = useRef(null);
  const [buttonhidden, setbuttonhidden] = useState(true);
  function handleonScroll() {
    // console.log('zarp',bodyref.current?.scrollTop,bodyref.current.clientHeight)
    if (bodyref.current?.scrollTop == bodyref.current.scrollHeight - bodyref.current.clientHeight) {
      console.log('zarp');
      setbuttonhidden(true);
    } else {
      if (buttonhidden) {
        setbuttonhidden(false);
      }
    }
  }
  const footerallowed = chattype == TYPE_CHANNEL ? false : chattype == TYPE_GROUP ? true : true;
  const [preview, setPreview] = useState(false);
  // function handleRightClick(event, index) {
  //   event.preventDefault();
  // }

  function scrolltobottom() {
    // bodyref.current.scrollTop = bodyref.current.scrollHeight;
    const startPosition = bodyref.current.scrollTop;
    const endPosition = bodyref.current.scrollHeight - bodyref.current.clientHeight;
    const duration = 1000;
    const startTime = performance.now();

    // const scrollHeight = bodyref.current.scrollHeight;
    // const scrollStep = Math.PI / (scrollHeight / 2);
    // let count = 0;
    function scrollAnimation(timestamp) {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress); // Apply easing function if desired
      const newPosition = startPosition + (endPosition - startPosition) * easedProgress;
      bodyref.current.scrollTop = newPosition;
      if (progress < 1) {
        requestAnimationFrame(scrollAnimation);
      }
    }
    function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    requestAnimationFrame(scrollAnimation);

    // scrollAnimation();
    // console.log(bodyref.current)
    // bodyref.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div
      dir="rtl"
      className={
        `flex h-[100%] flex-col
        // mb-[-30px]
        `
        // mb-[-150px]
      }>
      <div className="flex h-[70%] w-full flex-col items-center overflow-hidden">
        <div
          className="mb-2 h-[105vh] w-full overflow-auto px-5 pt-3"
          // onScroll={() => console.log('hello')}
          onScroll={handleonScroll}
          ref={bodyref}>
          <button
            onClick={scrolltobottom}
            className={`${
              buttonhidden ? 'hidden' : ''
            } p-3 bg-color1 rounded-full absolute top-[65%] right-[85%] z-10`}>
            <UilArrowDown />
          </button>
          <MessageDateGroup date={'2023-07-20'}>
            {messages.map((message, index) => (
              <div key={index} 
              // onContextMenu={(e) => handleRightClick(e, index)}
              >
                <Message
                  content={message.content}
                  isSeen={message.seen}
                  id={message.id}
                  forewardedFrom={message.forwarded}
                  repliedTo={message.repliedMessage}
                  media={message.media}
                  handleMediaMessage={() => setPreview(!preview)}
                />
              </div>
            ))}
          </MessageDateGroup>
          <MessageDateGroup date={'2023-07-22'}>
            {messages.map((message, index) => (
              <div key={index} 
              // onContextMenu={(e) => handleRightClick(e, index)}
              >
                <Message
                  content={message.content}
                  isSeen={message.seen}
                  id={message.id}
                  forewardedFrom={message.forwarded}
                  repliedTo={message.repliedMessage}
                  media={message.media}
                  handleMediaMessage={() => setPreview(!preview)}
                />
              </div>
            ))}
            <MessageVoice
              id="you"
              audioUrl="audios/12 Peaceful With Nature (1).mp3"
              audioID="you"
            />
          </MessageDateGroup>
        </div>
        {footerallowed && (
          <div className=" h-16 w-[80%] vsmmobile:mb-[7rem] smmobile:mb-[7rem]">
            <ChatFooter />
          </div>
        )}
      </div>
      {preview
        ? createPortal(
            <ImagePreviewer handleClose={() => setPreview(false)} />,
            document.getElementById('app-holder') 
            // ||
            // document.getElementById('root')
             )
        : null}
    </div>
  );
}
