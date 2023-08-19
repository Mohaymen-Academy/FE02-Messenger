import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Avatar from './Avatar';
import { GetMessages } from '../../features/SelectedInfo';
import Requests from '../../API/Requests';
import ChatCardContext from './ChatCardContext';
// import
function bytesToBase64(bytes) {
  const binString = Array.from(bytes, (x) => String.fromCodePoint(x)).join('');
  return btoa(binString);
}

// TODO
//  NEED TO ADD TIME TO IT
const ChatCardPreview = ({ profile, lastMessage, unreadMessageCount, lastseen, pinned }) => {
  // console.log(profile?.lastProfilePicture?.preLoadingContent)
  const [openContext, setOpenContext] = useState(false);
  const dispatch = useDispatch();

  const handleRightClick = (e) => {
    setOpenContext(true);
  };
  return (
    <div
      onContextMenu={handleRightClick}
      onClick={async (e) => {
        // console.log(profile.type, profile.profileID);
        dispatch(GetMessages({ type: profile.type, ID: profile.profileID }, { message_id: 0 }));
        // await Requests().GetProfileMedium(profile.profileID);
      }}
      className="h-18 relative mx-2 flex w-[97%] cursor-pointer flex-row items-center justify-start rounded-lg p-3  hover:bg-bghovor">
      <div className="flex w-[100%] justify-between px-2">
        <div className="flex flex-row gap-2">
          {profile.lastProfilePicture ? (
            <img
              src={`data:image/jpeg;base64,${profile.lastProfilePicture.preLoadingContent}`}
              className="h-[50px] w-[50px] rounded-full"
            />
          ) : (
            <Avatar
              imagecolor={profile.defaultProfileColor}
              char={profile.profileName[0]}
              isOnline={lastseen?.toLowerCase() === 'online'}
            />
          )}
          <div className="flex flex-col">
            <p className="font-semibold text-text1">{profile.profileName}</p>
            <div className="line-clamp-1 pl-3 text-base text-text1 opacity-[50%]">
              {lastMessage?.text}
            </div>
          </div>
        </div>
        <div className="flex h-[50px] flex-col justify-between pl-3">
          <p className="text-xs text-text1 opacity-[50%]">{lastMessage?.time}</p>
          {unreadMessageCount ? (
            <div>
              <div className="h-6 w-6 rounded-full bg-green-400  text-center text-white shadow-lg">
                {unreadMessageCount}
              </div>
            </div>
          ) : null}
        </div>
      </div>
      {openContext ? (
        <ChatCardContext
          type={profile.type}
          openContext={openContext}
          setOpenContext={setOpenContext}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
export default ChatCardPreview;
