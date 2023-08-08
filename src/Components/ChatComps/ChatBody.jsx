import React, { useState, useEffect } from 'react';
import EmojiPicker from 'emoji-picker-react';
import ChatFooter from './ChatFooter';
import Message from '../message/Message';
import MessageMenu from '../message/MessageMenu';

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
  const [openContextMenu, setOpenContextMenu] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (!event.target.closest('.context-menu')) {
        setOpenContextMenu(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const handleContextMenu = (event) => {
    event.preventDefault();
    const clickX = event.clientX;
    const clickY = event.clientY;
    setContextMenuPosition({ x: clickX, y: clickY });
    setOpenContextMenu(true);
    console.log('context menu opened')
  };

  return (
    <>
    <div className="mb-3 h-[80vh] w-full overflow-auto px-5 pt-3  ">
      {messages.map((message, index) => (
        <div key={index} onContextMenu={handleContextMenu} >
          <Message openContextMenu={openContextMenu} content={message.content} isSeen={message.seen} id={message.id} />
        </div>
      ))}
    </div>

    {openContextMenu ? <MessageMenu position={contextMenuPosition} /> : <></>}
    <ChatFooter />
    </>
  );
}
