import React from 'react';
import Avatar from '../ChatComps/Avatar';
import { useDispatch } from 'react-redux';
import { GetMessages } from '../../features/SelectedInfo';

export default function ContactCardPreview({
  name,
  image,
  color,
  chatid,
  type,
  lastseen,
  profile
}) {
  const dispatch = useDispatch();
  return (
    <div>
      <div
        onClick={() =>
          dispatch(GetMessages({ type: type, ID: chatid, profileinfo: profile, message_id: 0 }))
        }
        className="flex h-18 w-[97%] cursor-pointer m-1 mx-2 flex-row items-center justify-start rounded-lg hover:bg-bghovor">
        <div className="w-fit px-2 flex">
          {image ? (
            <img
              src={`data:image/jpeg;base64,${image?.preLoadingContent}`}
              className="h-[50px] w-[50px] rounded-full"
            />
          ) : (
            <Avatar
              imagecolor={color}
              char={name[0]}
              isOnline={lastseen?.toLowerCase() === 'online'}
            />
          )}
          <div className="flex flex-row m-2">
            <div className="flex flex-col">
              <p className="font-semibold text-text1">{name}</p>
              <div className="line-clamp-1 text-base text-text1 opacity-[50%] pl-3">{lastseen}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
