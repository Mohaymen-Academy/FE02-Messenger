import Avatar from './Avatar';

const ChatCardPreview = ({ profilePicture, unreadmessage, chatid, setter }) => (
  <div
    onClick={(e) => setter(chatid)}
    className=" flex h-18 w-[100%] cursor-pointer flex-row items-center justify-start rounded-lg  hover:bg-bghovor">
    <div className="w-fit px-2 flex">
      {profilePicture ? (
        <img src={profilePicture} className="h-full rounded-full" />
      ) : (
        <Avatar image={'s'} isOnline={true} />
      )}
      <div
      className='flex flex-row'>
        <div className="flex flex-col">
          <p className="font-semibold text-text1">زهرا</p>
          <div className="line-clamp-1 text-base text-text1 opacity-[50%] pl-3">
            این متن تست برای اخرین پیام های ارسال شده است
          </div>
        </div>
        {unreadmessage ? (
          <div >
            <div className="w-6 h-6 rounded-full bg-green-400  text-center text-white shadow-lg">
              {unreadmessage}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  </div>
);

export default ChatCardPreview;
