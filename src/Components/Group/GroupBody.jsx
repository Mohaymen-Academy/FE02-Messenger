import React from 'react';
import { TYPE_GROUP } from '../../utility/Constants';
import Message from '../message/Message.jsx';
import { createPortal } from 'react-dom';
import ImagePreviewer from '../media-previewer/ImagePreviewer.jsx';

export default function GroupBody() {
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
      className={`flex h-[100%] flex-col
        mb-[-30px]
        `}>
      <div className="flex h-[70%] w-full flex-col items-center overflow-hidden">
        <div className="mb-3 h-[105vh] w-[100%] overflow-auto  pt-3">
          {messages.map((message, index) => (
            <div key={index} onContextMenu={(e) => handleRightClick(e, index)}>
              <Message
                type={TYPE_GROUP}
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
        </div>
        <div className=" h-16 smmobile:mb-[7rem] vsmmobile:mb-[7rem] w-[80%]">
          <ChatFooter />
        </div>
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
