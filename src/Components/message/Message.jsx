import { useEffect, useState, useRef } from 'react';
import MessageMenu from './MessageMenu.jsx';
import MessageHeader from './MessageHeader.jsx';
import MessageImageMedia from './MessageImageMedia.jsx';
import MessageFooter from './MessageFooter.jsx';
import ImagePreviewer from '../media-previewer/ImagePreviewer';
import MessageBody from './MessageBody.jsx';

function Message({ content, isSeen, id, forewardedFrom, repliedTo, media, handleMediaMessage }) {
  const [openContextMenu, setOpenContextMenu] = useState(false);
  const [mousepositoin, setmousepositoin] = useState({ x: 0, y: 0 });

  let y_mouse = useRef(0);
  let x_mouse = useRef(0);
  function handleRightClick(event, index) {
    event.preventDefault();
    event.stopPropagation();
    x_mouse = event.clientX;
    y_mouse = event.clientY;
    setmousepositoin({ x_mouse, y_mouse });
  }
  return (
    <div
      className={`relative flex w-full ${id === 'you' ? 'justify-start' : 'justify-end'} px-5`}
      onContextMenu={handleRightClick}>
      <MessageBody id={id}>
        <div
        className='vsmmobile:text-xs'>
          <MessageHeader forewardedFrom={forewardedFrom} repliedTo={repliedTo} />
        </div>
        <MessageImageMedia src={media} handleClick={handleMediaMessage} />
        <p>{content}</p>
        <MessageFooter id={id} isSeen={isSeen} />
      </MessageBody>
      {mousepositoin.x != 0 ? (
        <MessageMenu
          x_pos={x_mouse.current}
          y_pos={y_mouse.current}
          positions={mousepositoin}
          setposition={setmousepositoin}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default Message;
