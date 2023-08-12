import ChatHeaderSettings from './ChatHeaderSettings.jsx';
import Avatar from './Avatar.jsx';
import { UilArrowRight } from '@iconscout/react-unicons';
import { UilSearch } from '@iconscout/react-unicons';
import { TYPE_CHANNEL, TYPE_USER, TYPE_GROUP } from '../../utility/Constants.js';
import Pin from './Pin.jsx';
const ChatHeader = ({ setActive, chatsetter, chattype }) => {
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
          <div className="flex-1 ">
            <Avatar isOnline={false} image={'a'} />
          </div>
          <div className="">
            <h3 className="text-lg font-semibold text-text1">یوزر نیم </h3>
            <div className="text-sm text-slate-400">{ChatInfo}</div>
          </div>
        </div>
        <div className="flex flex-row">
          <button>
            <UilSearch />
          </button>
          {<ChatHeaderSettings />}
        </div>
      </div>
      {/*
      <Pin />
             */}
    </>
  );
};

export default ChatHeader;
