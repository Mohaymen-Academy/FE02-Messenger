import ChatHeaderSettings from './ChatHeaderSettings.jsx';
import Avatar from './Avatar.jsx';
import { UilArrowRight } from '@iconscout/react-unicons';
import { UilSearch } from '@iconscout/react-unicons';
import { useSelector } from 'react-redux';

import { TYPE_CHANNEL, TYPE_USER, TYPE_GROUP } from '../../utility/Constants.js';
import Pin from './Pin.jsx';
import { useEffect } from 'react';
import { useState } from 'react';
const ChatHeader = ({ active, setActive, chatsetter, chattype, chatid }) => {
  const chatProf = useSelector((state) => state.messageList.messages);
  const selectedProfile = chatProf.filter((item) => item.profile.profileID == chatid)[0];
  const ChatInfo =
    chattype == TYPE_USER
      ? '12:22' // ShouldChange
      : chattype == TYPE_GROUP
      ? 4
      : 1200;
  return (
    <>
      <div
        onClick={(e) => {
          setActive((prev) => !prev);
        }}
        className="shadow-inner flex h-[70px] w-full cursor-pointer items-center justify-between bg-color2 px-1 font-iRANSans">
        <div id="header-account" className="flex h-full items-center gap-2">
          <button
            className=" desktop:hidden laptop:hidden vsmmobile:visible"
            onClick={(e) => {
              e.stopPropagation();
              chatsetter({ type: 'null' });
            }}>
            <UilArrowRight className="w-8 h-8 text-text1 cursor-pointer" />
          </button>
          <div className="flex-1 w-[75%] h-[75%] ">
            {selectedProfile?.profile.lastProfilePicture ? (
              <img
                src={`data:image/jpeg;base64,${selectedProfile?.profile.lastProfilePicture.preLoadingContent}`}
                className="h-full rounded-full w-full"
              />
            ) : (
              <Avatar
                imagecolor={selectedProfile?.profile.defaultProfileColor}
                char={selectedProfile?.profile.profileName[0]}
                // isOnline={true}
              />
            )}
          </div>
          <div className="">
            <h3 className="text-lg font-semibold text-text1">
              {selectedProfile?.profile.profileName}{' '}
            </h3>
            <div className="text-sm text-slate-400">{ChatInfo}</div>
          </div>
        </div>
        <div className="flex flex-row">
          <button>
            <UilSearch className="w-6 h-6 text-text1 cursor-pointer" />
          </button>
          {<ChatHeaderSettings active={active} />}
        </div>
      </div>
      {/*
      <Pin />
             */}
    </>
  );
};

export default ChatHeader;
