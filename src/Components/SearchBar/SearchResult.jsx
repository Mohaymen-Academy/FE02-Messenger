import React from 'react';
import { Avatar } from '../ChatComps';
import { GetMessages } from '../../features/SelectedInfo';
import { useDispatch } from 'react-redux';
export default function SearchResult({ profile, text, massage_id }) {
  const dispatch = useDispatch();
  return (
    <div>
      <div
        onClick={(e) =>
          dispatch(
            GetMessages({
              type: profile.type,
              ID: profile.profileID,
              profileinfo: profile,
              message_id: massage_id || 0
            })
          )
        }
        className=" h-[70px] p-3 mx-2 flex w-[97%] cursor-pointer flex-row items-center justify-start rounded-lg  hover:bg-bghovor">
        <div className="flex w-[100%] h-full justify-between px-2">
          <div className="flex flex-row gap-2 items-center">
            {profile.lastProfilePicture ? (
              <img
                src={`data:image/jpeg;base64,${profile.lastProfilePicture.preLoadingContent}`}
                className="h-[50px] w-[50px] rounded-full"
              />
            ) : (
              <Avatar
                size={50}
                imagecolor={profile.defaultProfileColor}
                char={profile.profileName[0]}
                // isOnline={true}
              />
            )}
            <div className="flex flex-col">
              <p className="font-semibold text-text1">{profile.profileName}</p>
              <div className="line-clamp-1 pl-3 text-base text-text1 opacity-[50%]">{text}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
