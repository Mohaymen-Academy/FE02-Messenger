import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { UilArrowDown } from '@iconscout/react-unicons';
import { useDispatch, useSelector } from 'react-redux';
import ChatFooter from './ChatFooter.jsx';
import Message from '../message/Message.jsx';
import ImagePreviewer from '../media-previewer/ImagePreviewer.jsx';
import { TYPE_CHANNEL, TYPE_GROUP } from '../../utility/Constants.js';
import MessageDateGroup from '../message/MessageDateGroup.jsx';
import MessageVoice from '../message/MessageVoice.jsx';
// import { NeededId } from '../../utility/FindneededID.js';
import Requests from '../../API/Requests.js';
import { GetMessages } from '../../features/SelectedInfo.js';

export default function ChatBody({ chatid, chattype, needupdate }) {
  const dispatch = useDispatch();
  const observer = new IntersectionObserver(
    (entries) => {
      const visibleItems = entries
        .filter((entry) => entry.isIntersecting)
        .map((entry) => parseInt(entry.target.dataset.id));
      console.log(visibleItems);
      if (visibleItems.length != 0) {
        const maxval = Math.max(visibleItems);
        if (maxval > MSGes.current.upper) {
          MSGes.current.upper = Math.max(visibleItems);
          Requests().UpdateSeen(MSGes.current.upper);
        }
      }
    },
    { threshold: 0.5 }
  );
  const MSGes = useRef({
    upper: -Infinity,
    lower: Infinity
  });
  const bodyref = useRef(null);
  const messages = useSelector((state) => state.selectedProf.Chatmessages);
  const [buttonhidden, setbuttonhidden] = useState(true);
  // const ChatId = useSelector((state) => state.selectedProf.selectedChatID);
  const lists = useSelector((store) => store.messageList.messages);
  useEffect(() => {
    const shouldUpdate = lists.filter(
      (ele) => ele.profile.profileID == chatid && ele.updated == true
    );
    if (shouldUpdate.length != 0) {
      console.log('werew');
      dispatch(GetMessages({ type: chattype, ID: chatid }, { message_id: MSGes.current.upper }));
    }
  });
  useEffect(() => {
    if (bodyref) {
      // const endPosition = bodyref.current.scrollHeight
      bodyref.current.scrollTop = bodyref.current.scrollHeight;
      // - bodyref.current.clientHeight;
      // console.log(endPosition);
    }
  }, []);

  let scrolltimeout;
  const scrollValues = useRef({
    lastScrollPosition: 0
  });
  function handleonScroll() {
    clearTimeout(scrolltimeout);
    // console.log(
    //   bodyref.current?.scrollTop,
    //   bodyref.current.scrollHeight - bodyref.current.clientHeight
    // );
    scrolltimeout = setTimeout(() => {
      // console.log(MSGes.current);
      dispatch(GetMessages({ type: chattype, ID: chatid }, { message_id: MSGes.current.upper }));
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

  return (
    <div
      // dir="rtl"
      className={
        `flex h-[100%] flex-col mb-[30px]
        `
        // mb-[-150px]
      }>
      <div className="flex h-[72%]  w-full flex-col items-center overflow-hidden">
        <div
          className="mb-2 h-[105vh] w-[80%]  overflow-auto px-5 pt-3"
          onScroll={handleonScroll}
          ref={bodyref}>
          <button
            onClick={scrolltobottom}
            className={`${
              buttonhidden ? 'hidden' : ''
            } absolute right-[85%] top-[65%] z-10 rounded-full bg-color1 p-3`}>
            <UilArrowDown />
          </button>
          {messages.length ? (
            <MessageDateGroup date={'2023-07-20'}>
              {messages?.map((message, index) => (
                <div key={index}>
                  <Message
                    // content={message.content}
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
                    // chattype={chattype}
                    handleMediaMessage={() => setPreview(!preview)}
                  />
                </div>
              ))}
            </MessageDateGroup>
          ) : (
            <>
              <div className="flex flex-col items-center h-[100%]">
                <div
                  className="
                  flex flex-col bg-black bg-opacity-25 rounded-2xl
             w-[300px]  h-[400px] m-auto
             p-10 text-center text-text1
             items-center
             gap-3">
                  <div className="font-bold text-xl">
                    <p className="font-estedad ">هنوز پیامی اینجا موجود نیست</p>
                    <p className="font-estedad ">پیامی ارسال کنید یا بر روی عکس کلیک کنید</p>
                  </div>
                  <button className="w-[200px] h-[200px]" onClick={() => console.log('zarp')}>
                    <img src="images/hello2.jpg" className="w-[100%] h-[100%] rounded-2xl" alt="" />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
        {footerallowed && (
          <div className=" h-16 w-[80%] vsmmobile:mb-[3rem] smmobile:mb-[3rem]">
            <ChatFooter id={chatid} />
          </div>
        )}
      </div>
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
