import Avatar from './Avatar';

const ChatCardPreview = ({ profilePicture, unreadmessage, chatid, setter }) => (
  <div
    onClick={(e) => setter(chatid)}
    className=" flex h-18 w-0.9 mx-2 cursor-pointer flex-row items-center justify-center rounded-lg px-1 py-1 hover:bg-bghovor">
    <div className="w-1/5 px-2">
      {profilePicture ? (
        <img src={profilePicture} className="h-full rounded-full" />
      ) : (
        <Avatar image={'s'} isOnline={true} />
      )}
    </div>
    <div className="flex flex-1 flex-col px-1">
      <div className="font-semibold text-text1">زهرا</div>
      <div className="line-clamp-1 text-base text-text1 opacity-[50%] pl-3">
        این متن تست برای اخرین پیام های ارسال شده است
      </div>
    </div>
    {unreadmessage ? (
      <div className="w-2/12 px-1 py-4">
        <div className="w-6 h-6 rounded-full bg-green-400  text-center text-white shadow-lg">
          {unreadmessage}
        </div>
      </div>
    ) : null}
  </div>
);

export default ChatCardPreview;
