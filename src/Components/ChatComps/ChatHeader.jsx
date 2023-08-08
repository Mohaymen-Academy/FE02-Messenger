import Avatar from './Avatar.jsx';
import { UilEllipsisV } from '@iconscout/react-unicons'
const ChatHeader = () => (
  <div className=" flex h-[11%] w-full items-center justify-between bg-slate-500 px-1 font-iRANSans">
    <div id="header-account" className="flex h-full items-center gap-2">
      <div className="flex-1 py-4">
        <Avatar isOnline={false} image={'a'}/>
      </div>
      <div className="">
        <h3 className="text-lg font-semibold text-color2">یوزر نیم </h3>
        <div className="text-sm text-slate-400">آخرین بازدید به تازگی</div>
      </div>
    </div>
    <div className="text-text1 w-8 h-8 mx-1 ">
      <UilEllipsisV/>
    </div>
  </div>
);

export default ChatHeader;
