import React, { useEffect, useRef, useState, memo } from 'react';
import { UilArrowDown } from '@iconscout/react-unicons';
import { useDispatch, useSelector } from 'react-redux';
import ChatFooter from './ChatFooter.jsx';
import Message from '../message/Message.jsx';
import ImagePreviewer from '../media-previewer/ImagePreviewer.jsx';
import {
  DOWN,
  NOTHING,
  TYPE_CHANNEL,
  TYPE_GROUP,
  UP,
  getRelativeDate
} from '../../utility/Constants.js';
import MessageDateGroup from '../message/MessageDateGroup.jsx';
import MessageVoice from '../message/MessageVoice.jsx';
// import { NeededId } from '../../utility/FindneededID.js';
import Requests from '../../API/Requests.js';
import { SetIDs, setUpdate } from '../../features/SelectedInfo.js';
import { GetSharedMedia, resetPreview, setPreview } from '../../features/SharedMediaSlice.js';
import ShowUnread from './ShowUnread.jsx';
import Pin from './Pin.jsx';
import GoHnalder from '../../utility/GoTomessage.js';
import PreviewrContainer from './previewrContainer.jsx';

const ChatBody = memo(({ chatid, chattype, bodyref, messages, lastmassage }) => {
  const dispatch = useDispatch();

  const seenObserver = new IntersectionObserver(
    (entries) => {
      const visibleItems = entries
        .filter((entry) => entry.isIntersecting)
        .map((entry) => parseInt(entry.target.dataset.id));
      if (visibleItems.length != 0) {
        const maxval = Math.max(...visibleItems);
        if (maxval > MSGes.current.upper) {
          MSGes.current.upper = maxval;
          Requests().UpdateSeen(MSGes.current.upper);
        }
      }
    },
    { rootMargin: '1px', threshold: 1 }
  );

  const MSGes = useRef({
    upper: 0
  });

  function SetMaxMin(messages) {
    const max = Math.max(...messages.map((ele) => parseInt(ele.messageID)));
    const minwithout_0 = messages.filter((ele) => ele.messageID != 0);
    const min = Math.min(...minwithout_0.map((ele) => parseInt(ele.messageID)));
    return { max, min };
  }

  useEffect(() => {
    if (bodyref) {
      // //! if there is no scroll
      console.error(bodyref.current.scrollTop);
      if (bodyref.current.scrollHeight == bodyref.current.clientHeight) {
        Requests().UpdateSeen(SetMaxMin(messages).max);
        dispatch(setUpdate({ dir: DOWN }));

        //! if the scroll is up
      } else if (bodyref.current.scrollTop == 0) {
        // dispatch(setUpdate({ dir: UP }));
        //   //! if the scroll is down
      } else if (isScrollAtBottom(bodyref)) {
        Requests().UpdateSeen(SetMaxMin(messages).max);
        dispatch(setUpdate({ dir: DOWN }));
      }
      dispatch(SetIDs(SetMaxMin(messages)));
      GoHnalder().GoTo(messages, lastmassage, bodyref, dispatch, chatid, chattype);
    }
    //   }
  }, []);
  useEffect(() => {
    if (bodyref) {
      // //! if there is no scroll
      if (bodyref.current.scrollHeight == bodyref.current.clientHeight) {
        Requests().UpdateSeen(SetMaxMin(messages).max);
        dispatch(setUpdate({ dir: DOWN }));
      } else if (bodyref.current.scrollTop == 0) {
      } else if (isScrollAtBottom(bodyref)) {
        Requests().UpdateSeen(SetMaxMin(messages).max);
        dispatch(setUpdate({ dir: DOWN }));
      }
      if (lastmassage != 0) {
        GoHnalder().GoTo(messages, lastmassage, bodyref, dispatch, chatid, chattype);
      } else {
        GoHnalder().GoTo(messages, SetMaxMin(messages).min, bodyref, dispatch, chatid, chattype);
      }
    }
  }, [chatid, messages]);

  function isScrollAtBottom(bodyref) {
    return (
      bodyref.current.scrollTop + bodyref.current.clientHeight > bodyref.current.scrollHeight - 40
    );
  }

  function handleonScroll(e) {
    // console.error(bodyref.current.scrollTop);
    if (bodyref.current.scrollTop == 0) {
      dispatch(setUpdate({ dir: UP }));
      dispatch(SetIDs(SetMaxMin(messages)));
    } else if (isScrollAtBottom(bodyref)) {
      // console.error('at bottom');
      Requests().UpdateSeen(SetMaxMin(messages).max);
      dispatch(SetIDs(SetMaxMin(messages)));
      dispatch(setUpdate({ dir: DOWN }));
    } else {
      dispatch(setUpdate({ dir: NOTHING }));
    }

    // if (
    //   Math.abs(
    //     bodyref.current?.scrollTop - (bodyref.current.scrollHeight - bodyref.current.clientHeight)
    //   ) < 10
    // ) {
    //   // if (currentScrollPos > prevScrollPos) {
    //   //   dir.current = DOWN;
    //   // } else {
    //   //   dir.current = UP;
    //   // }
    //   // setbuttonhidden(true);
    // } else if (buttonhidden) {
    //   // setbuttonhidden(false);
    // }
  }

  // TODO
  const footerallowed = chattype == TYPE_CHANNEL ? false : chattype == TYPE_GROUP ? true : true;
  // console.error(footerallowed)
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
      // console.error('hello');
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
    <>
      <Pin bodyref={bodyref} chatid={chatid} chattype={chattype} messages={messages} />
      <div
        // dir="rtl"
        className={'flex h-[100%] flex-col items-center'}>
        <div className="flex h-[72%]  w-full flex-col items-center overflow-hidden">
          <div
            className="mb-[5rem] h-[90vh] w-[100%]  overflow-auto px-5 pt-3"
            onScroll={handleonScroll}
            ref={bodyref}>
            {/* <button
              onClick={scrolltobottom}
              className={`${
                buttonhidden ? 'hidden' : ''
              } absolute right-[50%] top-[70%] z-10 rounded-full border border-text1 bg-color2 p-3`}>
              <UilArrowDown className="text-text1" />
            </button> */}
            {messages?.length ? (
              messages?.map((message, index) => (
                <>
                  {message.sender.profileID == 1 ? (
                    message.messageID == 0 ? (
                      <div key={message.messageID} className="my-[1rem] w-full text-center">
                        <span className="pointer-events-none sticky rounded-full bg-bghovor bg-opacity-60 px-2 py-1 font-iRANSans text-text1">
                          {getRelativeDate(message.time)}
                        </span>
                        {/* {children} */}
                      </div>
                    ) : (
                      <div key={message.messageID} className="my-[1rem] w-full text-center">
                        <span className=" rounded-full bg-bghovor bg-opacity-60 p-1 px-3 text-text1 ">
                          {message.text}
                        </span>
                      </div>
                    )
                  ) : (
                    <Message
                      forwardedfrom={message.forwardMessageSender}
                      key={message.messageID}
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
                      messagePreview={message.messagePreview}
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
                      <img
                        src="images/hello2.jpg"
                        className="h-[100%] w-[100%] rounded-2xl"
                        alt=""
                      />
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
        <ShowUnread />
        <PreviewrContainer />
      </div>
    </>
  );
});
export default ChatBody;
