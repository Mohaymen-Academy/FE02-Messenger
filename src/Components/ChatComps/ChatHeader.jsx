import ChatHeaderSettings from './ChatHeaderSettings.jsx';
import Avatar from './Avatar.jsx';

const ChatHeader = ({ setActive }) => (
  <div
    onClick={(e) => {
      setActive((prev) => !prev);
    }}
    className=" flex h-[70px] w-full cursor-pointer items-center justify-between bg-color4 px-1 font-iRANSans">
    <div id="header-account" className="flex h-full items-center gap-2">
      <div className="flex-1 ">
        <Avatar isOnline={false} image={'a'} />
      </div>
      <div className="">
        <h3 className="text-lg font-semibold text-color2">یوزر نیم </h3>
        <div className="text-sm text-slate-400">آخرین بازدید به تازگی</div>
      </div>
    </div>
    {<ChatHeaderSettings />}
  </div>
);

export default ChatHeader;
