import React, { useRef } from 'react';
import EmojiPicker from 'emoji-picker-react';
import { createPortal } from 'react-dom';
import ChatFooter from './ChatFooter.jsx';
import Message from '../message/Message.jsx';
import ImagePreviewer from '../media-previewer/ImagePreviewer.jsx';
import MessageDateGroup from '../message/MessageDateGroup.jsx';

const messages = [
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

export default function ChatBody() {
  const [openContextMenu, setOpenContextMenu] = React.useState(false);
  const [preview, setPreview] = React.useState(false);

  function handleRightClick(event, index) {
    event.preventDefault();

    const x = event.clientX;
    const y = event.clientY;

    setOpenContextMenu(true);
    setSelectedMessageIndex(index);
    setContextMenuPosition({ x, y });
  }

  return (
    <div
      dir="rtl"
      className={
        'flex h-[100%] w-full flex-col bg-chatbackground  bg-cover bg-center bg-no-repeat'
      }>
      <div className="flex h-[70%] w-full flex-col items-center overflow-hidden">
        <div className="mb-2 h-[80vh] w-full overflow-auto px-5 pt-3">
          {messages.map((message, index) => (
            <MessageDateGroup key={index}>
              <div onContextMenu={(e) => handleRightClick(e, index)}>
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
            </MessageDateGroup>
          ))}
        </div>
      </div>
      <div className="mb-2 h-16">
        <ChatFooter />
      </div>
      {preview
        ? createPortal(
            <ImagePreviewer handleClose={() => setPreview(false)} />,
            document.getElementById('app-holder')
          )
        : null}
    </div>
  );
}
