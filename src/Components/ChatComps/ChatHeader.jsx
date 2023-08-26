import { useEffect, useState } from 'react';
import { UilArrowRight, UilSearch } from '@iconscout/react-unicons';
import { useDispatch, useSelector } from 'react-redux';
import { TYPE_CHANNEL, TYPE_USER, TYPE_GROUP } from '../../utility/Constants.js';
import Avatar from './Avatar.jsx';
import ChatHeaderSettings from './ChatHeaderSettings.jsx';
import { resetChatId } from '../../features/SelectedInfo.js';
import Pin from './Pin.jsx';

const ChatHeader = ({ active, setActive, chattype, chatid, messages, bodyref }) => {
  const dispatch = useDispatch();
  const selectedProfile = useSelector((state) => state.selectedProf.leftprof);
  const ChatInfo = selectedProfile?.status;
  console.error(selectedProfile)
  return (
    <>
      <div className="flex h-[70px] w-full cursor-pointer items-center justify-between bg-color2 px-1 font-iRANSans shadow-inner">
        <div
          id="header-account"
          className="flex h-full items-center gap-2 w-[90%]"
          onClick={(e) => {
            // dispatch(SetLeftProf({ profid: chatid }));
            setActive((prev) => !prev);
          }}>
          <button
            className=" vsmmobile:visible laptop:hidden desktop:hidden"
            onClick={(e) => {
              e.stopPropagation();
              dispatch(resetChatId());
            }}>
            <UilArrowRight className="h-8 w-8 cursor-pointer text-text1" />
          </button>
          <div className="flex  flex-row gap-2">
            <div className="h-[75%] w-[75%] flex-1 ">
              <Avatar
                image={selectedProfile?.lastProfilePicture}
                size={50}
                imagecolor={selectedProfile?.defaultProfileColor}
                char={selectedProfile?.profileName[0]}
                isOnline={selectedProfile.status}
              />
            </div>
            <div className="">
              <h3 className="text-lg font-semibold text-text1">{selectedProfile?.profileName} </h3>
              <div className="text-sm text-slate-400">{ChatInfo}</div>
            </div>
          </div>
        </div>
        <div className="flex flex-row  gap-3">
          <button>
            <UilSearch className="h-5 w-5 cursor-pointer text-text1" />
          </button>
          {<ChatHeaderSettings active={active} chatid={chatid} setActive={setActive} />}
        </div>
      </div>
    </>
  );
};

export default ChatHeader;
