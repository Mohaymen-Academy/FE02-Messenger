import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { UilArrowDown } from '@iconscout/react-unicons';
import { useDispatch, useSelector } from 'react-redux';
import ChatFooter from './ChatFooter.jsx';
import Message from '../message/Message.jsx';
import ImagePreviewer from '../media-previewer/ImagePreviewer.jsx';
import { DOWN, TYPE_CHANNEL, TYPE_GROUP, UP } from '../../utility/Constants.js';
import MessageDateGroup from '../message/MessageDateGroup.jsx';
import MessageVoice from '../message/MessageVoice.jsx';
// import { NeededId } from '../../utility/FindneededID.js';
import Requests from '../../API/Requests.js';
import { GetMessages, GetMessagesDown, GetMessagesUp } from '../../features/SelectedInfo.js';

export default function ChatBody({ chatid, chattype }) {
  const dispatch = useDispatch();
  const downfinished = useSelector((state) => state.selectedProf.downfinished);
  const upfinished = useSelector((state) => state.selectedProf.upfinished);
  let prevScrollPos;
  const observer = new IntersectionObserver(
    (entries) => {
      const visibleItems = entries
        .filter((entry) => entry.isIntersecting)
        .map((entry) => parseInt(entry.target.dataset.id));
      if (visibleItems.length != 0) {
        console.log(visibleItems);
        handleGetMessages(visibleItems[0], dir);
      }
    },
    { rootMargin: '20px', threshold: 1.0 }
  );
  function handleGetMessages(msgid, dir) {
    console.log(dir.current, dir.current == UP);
    if (dir.current == UP && !upfinished) {
      console.log('zarp');
      dispatch(GetMessagesUp({ id: msgid }));
    } else if (dir.current == DOWN && !downfinished) {
      dispatch(GetMessagesDown({ id: msgid }));
    }
  }
  const MSGes = useRef({
    upper: 0
    // lower: Infinity
  });
  const bodyref = useRef(null);
  const messages = useSelector((state) => state.selectedProf.Chatmessages);
  const [buttonhidden, setbuttonhidden] = useState(true);
  const dir = useRef(null);

  useEffect(() => {
    if (bodyref) {
      bodyref.current.scrollTop = bodyref.current.scrollHeight;
      prevScrollPos = bodyref.current.scrollTop;
    }
  }, []);

  let scrolltimeout;
  const scrollValues = useRef({
    lastScrollPosition: 0
  });

  function handleonScroll(e) {
    clearTimeout(scrolltimeout);
    // console.log(bodyref.current.scrollHeight);
    const currentScrollPos = bodyref.current.scrollTop;
    // console.log(currentScrollPos, prevScrollPos);
    if (currentScrollPos > prevScrollPos) {
      dir.current = DOWN;
    } else {
      dir.current = UP;
    }
    prevScrollPos = currentScrollPos;

    // Update previous scroll position
    prevScrollPos = currentScrollPos;

    scrolltimeout = setTimeout(() => {
      // console.log(MSGes.current.upper);
    }, 200);
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
  const [preview, setPreview] = useState(false);

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
  console.log(messages);
  return (
    <div
      // dir="rtl"
      className={`flex h-[100%] flex-col items-center`}>
      <div className="flex h-[72%]  w-full flex-col items-center overflow-hidden">
        <div
          className="mb-2 h-[105vh] w-[100%]  overflow-auto px-5 pt-3"
          onScroll={handleonScroll}
          ref={bodyref}>
          <button
            onClick={scrolltobottom}
            className={`${
              buttonhidden ? 'hidden' : ''
            } absolute right-[50%] top-[75%] z-10 rounded-full bg-color2 border border-text1 p-3`}>
            <UilArrowDown className="text-text1" />
          </button>
          {messages?.length ? (
            <MessageDateGroup date={'2023-07-20'}>
              {messages?.map((message, index) => {
                // console.log(message.isEdited);
                return (
                  <>
                    {message.sender.profileID == 1 ? (
                      <div className="my-[1rem] w-full text-center">
                        <span className=" bg-black bg-opacity-60 text-text1 p-1 px-3 rounded-full ">
                          {message.text}
                        </span>
                      </div>
                    ) : (
                      <Message
                        shouldobserve={index == 0 || messages.length - 1 == index}
                        key={message.messageID}
                        observer={observer}
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
                        handleMediaMessage={() => setPreview(!preview)}
                        profile={message.sender}
                      />
                    )}
                  </>
                );
              })}
            </MessageDateGroup>
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
      {preview
        ? createPortal(
            <ImagePreviewer handleClose={() => setPreview(false)} />,
            document.getElementById('app-holder')
            // ||
            // document.getElementById('root')
          )
        : null}
    </div>
  );
}
