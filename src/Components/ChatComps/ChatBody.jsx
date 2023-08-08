import React from 'react';
import EmojiPicker from 'emoji-picker-react';
import ChatFooter from './ChatFooter';

export default function ChatBody() {
  return (
    <div dir="ltr" className="flex h-[100%] w-full flex-col">
      <div className="flex h-[80%] w-full flex-col"></div>
      <div
      className='mb-2'>
        <ChatFooter />
      </div>
    </div>
  );
}
