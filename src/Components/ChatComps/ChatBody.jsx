import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { UilArrowDown } from '@iconscout/react-unicons';
import { useDispatch, useSelector } from 'react-redux';
import ChatFooter from './ChatFooter.jsx';
import Message from '../message/Message.jsx';
import ImagePreviewer from '../media-previewer/ImagePreviewer.jsx';
import { DOWN, TYPE_CHANNEL, TYPE_GROUP, UP, getRelativeDate } from '../../utility/Constants.js';
import MessageDateGroup from '../message/MessageDateGroup.jsx';
import MessageVoice from '../message/MessageVoice.jsx';
// import { NeededId } from '../../utility/FindneededID.js';
import Requests from '../../API/Requests.js';
import {
  GetMessages,
  GetMessagesDown,
  GetMessagesUp,
  ReplaceImage
} from '../../features/SelectedInfo.js';
import { GetSharedMedia, resetPreview, setPreview } from '../../features/SharedMediaSlice.js';

export default function ChatBody({ chatid, chattype, bodyref, messages }) {
  const dispatch = useDispatch();
  const downfinished = useSelector((state) => state.selectedProf.downfinished);
  const upfinished = useSelector((state) => state.selectedProf.upfinished);
  const preview = useSelector((state) => state.SharedMedia.preview);
  const unreadMessages = useSelector((state) => state.selectedProf.unreadMessages);
  const [previewImages, setPreviewImages] = useState(); // State to store media content
  const [massageIdpreview, setMassageIdpreview] = useState(0); // State to store media content
  dispatch(GetSharedMedia(chatid));

  // function handleMediaMessage(images, imageId) {
  //   setPreviewImages(images); // Store media content in state
  //   setMassageIdpreview(imageId); // Store media content in state
  //   console.log(images, imageId);
  //   setPreview(!preview);
  // }

  let prevScrollPos;
  const seenObserver = new IntersectionObserver(
    (entries) => {
      const visibleItems = entries
        .filter((entry) => entry.isIntersecting)
        .map((entry) => parseInt(entry.target.dataset.id));
      console.error('wer');
      if (visibleItems.length != 0) {
        const maxval = Math.max(...visibleItems);
        console.error(maxval);
        if (maxval > MSGes.current.upper) {
          MSGes.current.upper = maxval;
          Requests().UpdateSeen(MSGes.current.upper);
        }
      }
    },
    { rootMargin: '5px', threshold: 0.5 }
  );
  const observer = new IntersectionObserver(
    (entries) => {
      const visibleItems = entries
        .filter((entry) => entry.isIntersecting)
        .map((entry) => parseInt(entry.target.dataset.id));
      if (visibleItems.length != 0) {
        console.log(visibleItems);
        handleGetMessages(Math.max(visibleItems), dir, chatid);
      }
    },
    { rootMargin: '20px', threshold: 1.0 }
  );
  function handleGetMessages(msgid, dir, chatid) {
    // console.log(dir.current, dir.current == UP);
    if (dir.current == UP && !upfinished) {
      // console.log()
      // console.log('zarp');
      // dispatch(GetMessagesUp({ msgid: msgid, chatid: chatid }));
    } else if (dir.current == DOWN && !downfinished) {
      // dispatch(GetMessagesDown({ msgid: msgid, chatid: chatid }));
    }
  }
  const maxmsg = useRef(0);
  const MSGes = useRef({
    upper: 0
    // lower: Infinity
  });

  console.error(messages);
  const [buttonhidden, setbuttonhidden] = useState(true);
  const dir = useRef(null);

  useEffect(() => {
    if (bodyref) {
      bodyref.current.scrollTop = bodyref.current.scrollHeight;
      const maxid = messages.map((ele) => parseInt(ele.messageID));

      Requests().UpdateSeen(Math.max(...maxid));
    }
    console.log(bodyref.current.scrollHeight);
    //   const currentScrollPos = bodyref.current.scrollTop;
    //   // console.log(prevScrollPos, currentScrollPos);
    //! if the scroll was in the down of the page
    if (prevScrollPos == 0) {
      const maxid = messages.map((ele) => parseInt(ele.messageID));
      // console.error(Math.max(...maxid));
      Requests().UpdateSeen(Math.max(...maxid));
    }
    //   }
  }, []);

  // console.error(messages);

  useEffect(() => {
    MSGes.current.upper = 0;
    const currentScrollPos = bodyref.current.scrollTop;
    if (prevScrollPos == 0) {
      bodyref.current.scrollTop = 20;
      const maxid = Math.max(...messages.map((ele) => parseInt(ele.messageID)));
      Requests().UpdateSeen(maxid);
    }
  });

  let scrolltimeout;

  function handleonScroll(e) {
    clearTimeout(scrolltimeout);
    // console.log(bodyref.current.scrollHeight);
    const currentScrollPos = bodyref.current.scrollTop;
    // console.error(currentScrollPos)
    // console.error(bodyref.current)
    // console.log(currentScrollPos, prevScrollPos);
    if (currentScrollPos > prevScrollPos) {
      dir.current = DOWN;
    } else {
      dir.current = UP;
    }
    prevScrollPos = currentScrollPos;
    // scrolltimeout = setTimeout(() => {
    //   // console.log(MSGes.current.upper);
    // }, 200);
    if (
      Math.abs(
        bodyref.current?.scrollTop - (bodyref.current.scrollHeight - bodyref.current.clientHeight)
      ) < 10
    ) {
      setbuttonhidden(true);
    } else if (buttonhidden) {
      setbuttonhidden(false);
    }
  }

  // TODO
  const footerallowed = chattype == TYPE_CHANNEL ? false : chattype == TYPE_GROUP ? true : true;

  function scrolltobottom() {
    const startPosition = bodyref.current.scrollTop;
    const endPosition = bodyref.current.scrollHeight - bodyref.current.clientHeight;
    const duration = 1000;
    const startTime = performance.now();
    function scrollAnimation(timestamp) {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress); // Apply easing function if desired
      const newPosition = startPosition + (endPosition - startPosition) * easedProgress;
      bodyref.current.scrollTop = newPosition;
      if (progress < 1) {
        requestAnimationFrame(scrollAnimation);
      }
    }
    function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
    }
    requestAnimationFrame(scrollAnimation);
  }
  console.error(messages);
  return (
    <div
      // dir="rtl"
      className={'flex h-[100%] flex-col items-center'}>
      <div className="flex h-[72%]  w-full flex-col items-center overflow-hidden">
        <div
          className="mb-[5rem] h-[105vh] w-[100%]  overflow-auto px-5 pt-3"
          onScroll={handleonScroll}
          ref={bodyref}>
          <button
            onClick={scrolltobottom}
            className={`${
              buttonhidden ? 'hidden' : ''
            } absolute right-[50%] top-[70%] z-10 rounded-full border border-text1 bg-color2 p-3`}>
            <UilArrowDown className="text-text1" />
          </button>
          {messages?.length ? (
            messages?.map((message, index) => (
              <>
                {message.sender.profileID == 1 ? (
                  message.messageID != 0 ? (
                    <div key={message.messageID} className="my-[1rem] w-full text-center">
                      <span className=" rounded-full bg-black bg-opacity-60 p-1 px-3 text-text1 ">
                        {message.text}
                      </span>
                    </div>
                  ) : (
                    <div key={message.messageID} className="my-[1rem] w-full text-center">
                      <span className="pointer-events-none sticky rounded-full bg-black bg-opacity-60 px-2 py-1 font-iRANSans text-white">
                        {getRelativeDate(message.time)}
                      </span>
                      {/* {children} */}
                    </div>
                  )
                ) : (
                  <Message
                    forwardedfrom={message.forwardMessageSender}
                    shouldobserve={index == 0 || messages.length - 1 == index}
                    key={message.messageID}
                    observer={observer}
                    seenObserver={seenObserver}
                    isSeen={message.viewCount > 1}
                    id={message.messageID}
                    chattype={chattype}
                    creator={message.sender}
                    time={message.time}
                    media={message.media}
                    ispinned={message.ispinned}
                    isEdited={message.isEdited}
                    text={message.text}
                    entities={message.textStyle}
                    handleMediaMessage={() =>
                      dispatch(
                        setPreview({
                          open: true,
                          media: message.media,
                          messageID: message.messageID
                        })
                      )
                    }
                    messages={messages}
                    profile={message.sender}
                    replyinfo={message.replyMessageInfo}
                    bodyref={bodyref}
                  />
                )}
              </>
            ))
          ) : (
            <>
              <div className="flex h-[100%] flex-col items-center">
                <div
                  className="
                  m-auto flex h-[400px] w-[300px] flex-col
             items-center  gap-3 rounded-2xl
             bg-black bg-opacity-25 p-10
             text-center
             text-text1">
                  <div className="text-xl font-bold">
                    <p className="font-estedad ">هنوز پیامی اینجا موجود نیست</p>
                    <p className="font-estedad ">پیامی ارسال کنید یا بر روی عکس کلیک کنید</p>
                  </div>
                  <button className="h-[200px] w-[200px]" onClick={() => console.log('zarp')}>
                    <img src="images/hello2.jpg" className="h-[100%] w-[100%] rounded-2xl" alt="" />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      {/* {footerallowed && (
        <div className="  w-[80%] vsmmobile:mb-[3rem] smmobile:mb-[3rem] sticky bottom-1">
          <ChatFooter id={chatid} chattype={chattype} />
          </div>
      )} */}
      {preview.open
        ? createPortal(
            <ImagePreviewer
              // handleClose={() => dispatch(resetPreview)}
              imageshow={preview.media} // Pass media content to the component
              massageId={preview.messageID}
            />,
            document.getElementById('app-holder')
          )
        : null}
    </div>
  );
}
