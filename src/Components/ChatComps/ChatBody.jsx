import React from 'react';
import EmojiPicker from 'emoji-picker-react';
import ChatFooter from './ChatFooter';
import Message from './Message';

const messages = [
  {
    id: 'else',
    seen: true,
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ex'
  },
  {
    id: 'you',
    seen: true,
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ex'
  }
];
export default function ChatBody() {
  return (
    <div dir="rtl" className="flex h-[100%] w-full flex-col">
      <div className="flex h-[80%] w-full flex-col items-center overflow-hidden">
        <div className="mb-3 h-[80vh] w-full overflow-auto px-5 pt-3">
          {messages.map((message, index) => (
            <Message key={index} content={message.content} isSeen={message.seen} id={message.id} />
          ))}
        </div>
      </div>
      <div className="mb-2 h-16">
        <ChatFooter />
      </div>
    </div>
  );
}
