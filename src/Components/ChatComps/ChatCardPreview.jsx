import Avatar from './Avatar';

// TODO
//  NEED TO ADD TIME TO IT 
const ChatCardPreview = ({
  profile,
  chattype,
  chatid,
  lastMessage,
  setter,
  unreadMessageCount
}) => (
  <div
    onClick={(e) => setter({ type: 'change', chatid: profile.profileID, chattype: profile.type })}
    className=" flex h-18 w-[100%] cursor-pointer flex-row items-center justify-start rounded-lg  hover:bg-bghovor">
    <div className="w-fit px-2 flex">
      {profile.lastProfilePicture ? (
        <img src={profilePicture} className="h-full rounded-full" />
      ) : (
        <Avatar
          image={profile.defaultProfileColor}
          // isOnline={true}
        />
        
      )}
      <div className="flex flex-row">
        <div className="flex flex-col">
          <p className="font-semibold text-text1">{profile.profileName}</p>
          <div className="line-clamp-1 text-base text-text1 opacity-[50%] pl-3">
            {lastMessage.text}
          </div>
        </div>
        {unreadMessageCount ? (
          <div>
            <div className="w-6 h-6 rounded-full bg-green-400  text-center text-white shadow-lg">
              {unreadMessageCount}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  </div>
);

export default ChatCardPreview;
