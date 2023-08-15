import { useEffect, useState, useRef } from 'react';
import MessageMenu from './MessageMenu.jsx';
import MessageHeader from './MessageHeader.jsx';
import MessageImageMedia from './MessageImageMedia.jsx';
import MessageFooter from './MessageFooter.jsx';
import ImagePreviewer from '../media-previewer/ImagePreviewer';
import MessageBody from './MessageBody.jsx';
import { Avatar } from '../ChatComps';
import { useSelector } from 'react-redux';
import { TYPE_GROUP, TYPE_USER } from '../../utility/Constants.js';
function Message({
  isSeen,
  id,
  chattype,
  creator,
  time,
  media,
  ispinned,
  isEdited,
  text,
  observer
}) {
  useEffect(() => {
    if (mainref) {
      observer.observe(mainref.current);
    }
    return () => {
      observer.unobserve(mainref.current);
    };
  }, []);
  const [openContextMenu, setOpenContextMenu] = useState(false);
  const [mousepositoin, setmousepositoin] = useState({ x: 0, y: 0 });
  const mainref = useRef(null);
  const userprofile = useSelector((state) => state.profile);
  // console.log(userprofile.profileData.profileID);
  let y_mouse = useRef(0);
  let x_mouse = useRef(0);
  function handleRightClick(event, index) {
    event.preventDefault();
    event.stopPropagation();
    x_mouse = event.clientX;
    y_mouse = event.clientY;
    setmousepositoin({ x_mouse, y_mouse });
  }
  const Isforme = creator.profileID === userprofile.profileData.profileID;
  return (
    <div
      data-id={id}
      ref={mainref}
      className={`relative flex w-full ${Isforme ? 'justify-start' : 'justify-end'} px-5`}
      onContextMenu={handleRightClick}>
      <MessageBody Isforme={Isforme}>
        <div className="vsmmobile:text-xs">
          {/* <MessageHeader forewardedFrom={forewardedFrom} repliedTo={repliedTo} /> */}
        </div>
        {media ? <MessageImageMedia src={media} handleClick={handleMediaMessage} /> : <></>}
        <p>{text}</p>
        <MessageFooter Isforme={Isforme} id={id} isSeen={isSeen} />
      </MessageBody>
      <div className="pt-[70px]">{chattype == TYPE_GROUP ? <Avatar /> : <></>}</div>
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
    // <></>
  );
}

export default Message;
