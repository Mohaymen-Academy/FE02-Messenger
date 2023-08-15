import { useDispatch } from 'react-redux';
import Avatar from './Avatar';
import { setChatType } from '../../features/SelectedInfo';
function bytesToBase64(bytes) {
  const binString = Array.from(bytes, (x) => String.fromCodePoint(x)).join('');
  return btoa(binString);
}

// TODO
//  NEED TO ADD TIME TO IT
const ChatCardPreview = ({ profile, lastMessage, unreadMessageCount }) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={(e) => dispatch(setChatType({ type: profile.type, ID: profile.profileID }))}
      className=" h-18 p-3 mx-2 flex w-[97%] cursor-pointer flex-row items-center justify-start rounded-lg  hover:bg-bghovor">
      <div className="flex w-[100%] justify-between px-2">
        <div className="flex flex-row gap-2">
          {profile.lastProfilePicture ? (
            <img
              src={`data:image/jpeg;base64,${profile.lastProfilePicture.preLoadingContent}`}
              className="h-full rounded-full"
            />
          ) : (
            <Avatar
              imagecolor={profile.defaultProfileColor}
              char={profile.profileName[0]}
              // isOnline={true}
            />
          )}
          <div className="flex flex-col">
            <p className="font-semibold text-text1">{profile.profileName}</p>
            <div className="line-clamp-1 pl-3 text-base text-text1 opacity-[50%]">
              {lastMessage.text}
            </div>
          </div>
        </div>
        <div className="flex h-[50px] flex-col justify-between pl-3">
          <p className="text-xs">{lastMessage.time}</p>
          {unreadMessageCount ? (
            <div>
              <div className="h-6 w-6 rounded-full bg-green-400  text-center text-white shadow-lg">
                {unreadMessageCount}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default ChatCardPreview;
