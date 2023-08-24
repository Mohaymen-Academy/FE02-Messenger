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
    handleMediaMessage,
    entities,
    profile,
    replyinfo,
    bodyref
  }) => {
    // console.error(text)
    // console.error(forwardedfrom);
    const [mousepositoin, setmousepositoin] = useState({ x_mouse: 0, y_mouse: 0 });
    const [openForward, setopenForward] = useState(false);
    const mainref = useRef(null);
    const textref = useRef(null);
    const processor = TextProcessorObj([]);
    const userprofile = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    let styles;
    const handleReply = () => {
      GoHnalder().GoTo(
        messages,
        replyinfo.messageId,
        bodyref,
        dispatch,
        profile.profileID,
        chattype
      );
    };
    console.error();
    useEffect(() => {
      if (textref.current) {
        if (entities != '') {
          try {
            styles = JSON.parse(entities);
            processor.OutputEntity(textref, text, styles);
          } catch (err) {
            // console.error(err);
            // "[{\"id\":4,\"lower\":2,\"upper\":3,\"style\":[\"spoiler\"]},{\"id\":6,\"lower\":6,\"upper\":6,\"style\":[\"spoiler\"]},{\"id\":7,\"lower\":7,\"upper\":10,\"style\":[\"spoiler\",\"spoiler\"]},{\"id\":5,\"lower\":11,\"upper\":11,\"style\":[\"spoiler\"]}]"
          }
        } else {
          textref.current.innerText = text;
        }
      }
    });
    useEffect(() => {
      if (!mainref) {
        return;
      }
      seenObserver.observe(mainref.current);
      if (textref.current) {
        if (entities != '') {
          try {
            const styles = JSON.parse(entities);
            processor.OutputEntity(textref, text, styles);
          } catch (err) {}
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
    // console.error(profile);

    const Isforme = creator.profileID === userprofile.profileData.profileID;
    return (
      <div
        data-id={id}
        ref={mainref}
        className={`relative flex w-full ${Isforme ? 'justify-start' : 'justify-end'} px-5`}
        onContextMenu={handleRightClick}>
        <MessageBody Isforme={Isforme}>
          <MessageHeader
            sender={chattype == TYPE_GROUP ? profile.profileName : ''}
            forewardedFrom={forwardedfrom}
            repliedTo={replyinfo}
            handlerreply={handleReply}
            isReciver={2}
          />
          {media ? <MessageMedia src={media} handleClick={handleMediaMessage} /> : <></>}
          <div
            className="flex break-words break-all whitespace-pre-wrap flex-wrap font-semibold"
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
        <div className="hidden">
          {chattype == TYPE_GROUP ? (
            <Avatar
              size={100}
              imagecolor={profile.defaultProfileColor}
              image={profile.lastProfilePicture}
              isOnline={'false'}
              char={profile.profileName}
            />
          ) : (
            <></>
          )}
        </div>
        <MessageMenu
          isforme={Isforme}
          msgId={id}
          text={text}
          positions={mousepositoin}
          setposition={setmousepositoin}
          setopenForward={setopenForward}
          styles={entities && entities != '' ? JSON.parse(entities) : []}
        />

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
