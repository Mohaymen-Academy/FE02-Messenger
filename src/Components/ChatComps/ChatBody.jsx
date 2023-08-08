import React from 'react';
import EmojiPicker from 'emoji-picker-react';
import ChatFooter from './ChatFooter';
import Message from './Message';
import MessageMenu from './MessageMenu';

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
  const [openContextMenu, setOpenContextMenu] = React.useState(false);
  function handleRightClick(event, index) {
    event.preventDefault();
    
    const x = event.clientX;
    const y = event.clientY;
    
    setOpenContextMenu(false); // Close any existing context menu
    setOpenContextMenu(true);
    setSelectedMessageIndex(index);
    setContextMenuPosition({ x, y });
  }
  React.useEffect(() => {
    function handleClickOutside(event) {
      if (openContextMenu) {
        setOpenContextMenu(false);
      }
    }
  
    document.body.addEventListener("click", handleClickOutside);
  
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [openContextMenu]);
    
    
  return (
    <div dir="rtl" className="flex h-[100%] w-full flex-col">
      <div className="flex h-[80%] w-full flex-col items-center overflow-hidden">
        <div className="mb-3 h-[80vh] w-full overflow-auto px-5 pt-3">
            {messages.map((message, index) => (
              <div key={index} onContextMenu={(e) => handleRightClick(e, index)}>
                <Message content={message.content} isSeen={message.seen} id={message.id} />
              </div>
            ))}
        </div>
        {openContextMenu ? <MessageMenu /> : <></>}
      </div>
      <div className="mb-2 h-16">
        <ChatFooter />
      </div>
    </div>
  );
}
