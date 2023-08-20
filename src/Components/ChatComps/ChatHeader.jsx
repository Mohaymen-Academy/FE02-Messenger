import { useEffect, useState } from 'react';
import { UilArrowRight, UilSearch } from '@iconscout/react-unicons';
import { useDispatch, useSelector } from 'react-redux';
import { TYPE_CHANNEL, TYPE_USER, TYPE_GROUP } from '../../utility/Constants.js';
import Avatar from './Avatar.jsx';
import ChatHeaderSettings from './ChatHeaderSettings.jsx';
import { SetLeftProf, resetChatId } from '../../features/SelectedInfo.js';
import Pin from './Pin.jsx';

const ChatHeader = ({ active, setActive, chatsetter, chattype, chatid }) => {
  const dispatch = useDispatch();
  const selectedProfile = useSelector((state) => state.selectedProf.profileinfo);
  console.log(selectedProfile)
  const ChatInfo =
    chattype == TYPE_USER
      ? selectedProfile?.status // ShouldChange
      : chattype == TYPE_GROUP
      ? 4
      : 1200;
  return (
    <>
      <div
        onClick={(e) => {
          if (!active) {
            dispatch(SetLeftProf({ profid: chatid }));
          }
          setActive((prev) => !prev);
        }}
        className="flex h-[70px] w-full cursor-pointer items-center justify-between bg-color2 px-1 font-iRANSans shadow-inner">
        <div id="header-account" className="flex h-full items-center gap-2">
          <button
            className=" vsmmobile:visible laptop:hidden desktop:hidden"
            onClick={(e) => {
              e.stopPropagation();
              dispatch(resetChatId());
            }}>
            <UilArrowRight className="h-8 w-8 cursor-pointer text-text1" />
          </button>
          <div className="h-[75%] w-[75%] flex-1 ">
            {selectedProfile?.lastProfilePicture ? (
              <img
                src={`data:image/jpeg;base64,${selectedProfile?.profile.lastProfilePicture.preLoadingContent}`}
                className="h-[50px] w-[50px] rounded-full mr-5"
              />
            ) : (
              <Avatar
              size={50}
                imagecolor={selectedProfile?.defaultProfileColor}
                char={selectedProfile?.profileName[0]}
                isOnline={selectedProfile && selectedProfile.status ? selectedProfile.status.toLowerCase() : ''}
                // isOnline={'online'}
              />
            )}
          </div>
          <div className="">
            <h3 className="text-lg font-semibold text-text1">{selectedProfile?.profileName} </h3>
            <div className="text-sm text-slate-400">{ChatInfo}</div>
          </div>
        </div>
        <div className="flex flex-row  gap-3">
          <button>
            <UilSearch className="h-5 w-5 cursor-pointer text-text1" />
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
