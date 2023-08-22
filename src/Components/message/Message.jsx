import { useEffect, useState, useRef, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MessageMenu from './MessageMenu.jsx';
import MessageHeader from './MessageHeader.jsx';
import MessageMedia from './MessageMedia.jsx';
import MessageFooter from './MessageFooter.jsx';
import ImagePreviewer from '../media-previewer/ImagePreviewer';
import MessageBody from './MessageBody.jsx';
import { Avatar } from '../ChatComps';
import { TYPE_GROUP, TYPE_USER } from '../../utility/Constants.js';
import TextProcessorObj from '../../utility/TextProcessor.js';
import PopUp from '../../ui/PopUp';
import ForwardComponent from '../../ui/ForwardComponent';
import GoHnalder from '../../utility/GoTomessage.js';

const Message =
  // memo(
  ({
    messages,
    forwardedfrom,
    seenObserver,
    isSeen,
    id,
    chattype,
    creator,
    time,
    media,
    ispinned,
    isEdited,
    text,
    observer,
    handleMediaMessage,
    entities,
    profile,
    shouldobserve,
    replyinfo,
    bodyref
  }) => {
    // console.error(forwardedfrom);
    const [mousepositoin, setmousepositoin] = useState({ x_mouse: 0, y_mouse: 0 });
    const [openForward, setopenForward] = useState(false);
    const mainref = useRef(null);
    const textref = useRef(null);
    const processor = TextProcessorObj([]);
    const userprofile = useSelector((state) => state.profile);
    const ents = [];
    const dispatch = useDispatch();
    const handleReply = () => {
      console.error('first');
      GoHnalder().GoTo(
        messages,
        replyinfo.messageId,
        bodyref,
        dispatch,
        profile.profileID,
        chattype
      );
    };
    useEffect(() => {
      if (textref.current) {
        if (entities != '') {
          console.log(entities);
          processor.OutputEntity(textref, text, []);
        } else {
          textref.current.innerText = text;
        }
      }
    });
    useEffect(() => {
      if (!mainref) {
        return;
      }
      if (shouldobserve) {
        observer.observe(mainref.current);
      }
      seenObserver.observe(mainref.current);
      if (textref.current) {
        console.log();
        if (entities != '') {
          processor.OutputEntity(textref, text, []);
        } else {
          textref.current.innerText = text;
        }
      }
      if (mainref.current) {
        // mainref.current.addEventListener('touchstart', handleTouchStart);
        // mainref.current.addEventListener('touchend', handleTouchEnd);
      }

      // Cleanup touch event listeners on unmount
      return () => {
        if (mainref.current) {
          // mainref.current.removeEventListener('touchstart', handleTouchStart);
          // mainref.current.removeEventListener('touchend', handleTouchEnd);
        }
      };
    }, []);
    // Handle touch start event
    function handleTouchStart(event) {
      setmousepositoin({ x_mouse: event.touches[0].clientX, y_mouse: event.touches[0].clientY });
      // Start a timer for long press
      this.longPressTimer = setTimeout(() => {
        handleRightClick(event);
      }, 500); // Adjust the timeout duration as needed
    }
    /*
    forwardMessageSender
: 
null
isEdited
: 
false
media
: 
null
messageID
: 
32
replyMessageInfo
: 
compressedContent
: 
null
messageId
: 
30
sender
: 
"hes"
text
: 
"1 payam"
    
    */

    // Handle touch end event
    function handleTouchEnd(event) {
      // Clear the long press timer
      clearTimeout(this.longPressTimer);
      setmousepositoin({ x_mouse: 0, y_mouse: 0 });
    }
    function handleRightClick(event) {
      event.preventDefault();
      event.stopPropagation();
      // console.log(event)
      const x_mouse = event.clientX;
      const y_mouse = event.clientY;
      setmousepositoin({ x_mouse, y_mouse });
    }
    // console.log('werwerkwjriopup');
    console.error();
    const Isforme = creator.profileID === userprofile.profileData.profileID;
    return (
      <div
        data-id={id}
        ref={mainref}
        className={`relative flex w-full ${Isforme ? 'justify-start' : 'justify-end'} px-5`}
        onContextMenu={handleRightClick}>
        <MessageBody Isforme={Isforme}>
          <MessageHeader
            forewardedFrom={forwardedfrom}
            repliedTo={replyinfo}
            handlerreply={handleReply}
            isReciver={2}
          />
          {media ? (
            <MessageMedia src={media.preLoadingContent} handleClick={handleMediaMessage} />
          ) : (
            <></>
          )}
          <div
            className="flex break-words break-all whitespace-break-spaces"
            dir="auto"
            ref={textref}>
            {/* {text} */}
          </div>
          <MessageFooter
            Isforme={Isforme}
            id={id}
            time={time}
            isSeen={isSeen}
            isEdited={isEdited}
          />
        </MessageBody>
        <div className="pt-[70px]">
          {chattype == TYPE_GROUP ? (
            <Avatar imagecolor={profile.defaultProfileColor} isOnline={'false'} />
          ) : (
            <></>
          )}
        </div>
        {mousepositoin.x_mouse != 0 ? (
          <MessageMenu
            msgId={id}
            text={text}
            positions={mousepositoin}
            setposition={setmousepositoin}
            setopenForward={setopenForward}
            // forwardedfrom
          />
        ) : (
          <></>
        )}
        {openForward ? (
          <PopUp title={'هدایت'} setIsModalOpen={setopenForward}>
            <ForwardComponent text={text} messageid={id} />
          </PopUp>
        ) : (
          <></>
        )}
      </div>
      // <></>
    );
  };
// );

export default Message;
