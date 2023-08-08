import React from 'react';
import EmojiPicker from 'emoji-picker-react';
import ChatFooter from './ChatFooter';
import Message from './Message';

export default function ChatBody() {
  return (
    <div dir="rtl" className="flex h-[100%] w-full flex-col">
      <div className="flex h-[80%] w-full flex-col items-center overflow-hidden">
        <div className="mb-3 w-full overflow-auto px-5 pt-3">
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
        </div>
      </div>
      <div className="mb-2 h-16">
        <ChatFooter />
      </div>
    </div>
  );
}
