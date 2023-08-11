import React from 'react';
import { createPortal } from 'react-dom';
import ChatFooter from './ChatFooter.jsx';
import Message from '../message/Message.jsx';
import ImagePreviewer from '../media-previewer/ImagePreviewer.jsx';
import { TYPE_CHANNEL, TYPE_GROUP } from '../../utility/Constants.js';
import MessageDateGroup from '../message/MessageDateGroup.jsx';
import MessageVoice from '../message/MessageVoice.jsx';

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
  const footerallowed = chattype == TYPE_CHANNEL ? false : chattype == TYPE_GROUP ? true : true;
  //Todo FOR USER and Group must be modifed
  const [preview, setPreview] = React.useState(false);
  function handleRightClick(event, index) {
    event.preventDefault();
  }

  return (
    <div
      dir="rtl"
      className={`flex h-[100%] flex-col
        mb-[-30px]
        `}>
      <div className="flex h-[70%] w-full flex-col items-center overflow-hidden">
        <div
          className="mb-2 h-[105vh] w-full overflow-auto px-5 pt-3"
          // onScroll={() => console.log('hello')}
          >
          <MessageDateGroup date={'2023-07-20'}>
            {messages.map((message, index) => (
              <div key={index} onContextMenu={(e) => handleRightClick(e, index)}>
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
              <div key={index} onContextMenu={(e) => handleRightClick(e, index)}>
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
              audioUrl="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
              audioID="you"
            />
          </MessageDateGroup>
        </div>
        {footerallowed && (
          <div className=" h-16 smmobile:mb-[7rem] vsmmobile:mb-[7rem] w-[80%]">
            <ChatFooter />
          </div>
        )}
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
