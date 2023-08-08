import React, { useRef } from 'react';
import EmojiPicker from 'emoji-picker-react';
import ChatFooter from './ChatFooter';
import Message from '../message/Message';
import MessageMenu from '../message/MessageMenu';

const messages = [
  {
    id: 'else',
    seen: true,
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ex',
    forewardedFrom: true
  },
  {
    id: 'you',
    seen: true,
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ex',
    forewardedFrom: true
  }
];

export default function ChatBody() {
  return (
    <div dir="rtl" className="flex h-[100%] w-full flex-col">
      <div className="flex h-[80%] w-full flex-col items-center overflow-hidden">
        <div className="mb-3 h-[80vh] w-full overflow-auto px-5 pt-3">
          {messages.map((message, index) => (
            // <div
            //   className="flex flex-col"
            //   key={index}
            //   // onContextMenu={(e) => handleRightClick(e, index)}
            //   >
              <Message
              key={index}
                content={message.content}
                isSeen={message.seen}
                id={message.id}
                forewardedFrom={message.forewardedFrom}
              />
            //   {/* {mousepositoin.x != 0 ? (
            //     <MessageMenu
            //       x_pos={x_mouse.current}
            //       y_pos={y_mouse.current}
            //       positions={mousepositoin}
            //     />
            //   ) : (
            //     <></>
            //   )} */}
            // // </div>
          ))}
        </div>
      </div>
      <div className="mb-2 h-16">
        <ChatFooter />
      </div>
    </div>
  );
}
