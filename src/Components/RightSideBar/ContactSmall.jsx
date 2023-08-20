import React, { useState } from 'react';
import SmallAvatar from './SmallAvatar';
import { UilMultiply } from '@iconscout/react-unicons';
import { Avatar } from '../ChatComps';


export default function ContactSmall({ chatid, name, color, image, setselected }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex flex-row items-center h-[40px] w-fit m-3 rounded-full border border-bghovor ${
        isHovered ? 'bg-orange-950' : 'bg-color2'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      {isHovered ? (
        <button
          className="w-[40px] h-[40px] bg-red-600 rounded-full flex items-center justify-center"
          onClick={() => setselected((prev) => prev.filter((x) => x.chatid != chatid))}>
          <UilMultiply className="text-red-200" />
        </button>
      ) : image ? (
        <img
          src={`data:image/jpeg;base64,${image?.preLoadingContent}`}
          className="h-[50px] w-[50px] rounded-full"
        />
      ) : (
        <Avatar imagecolor={color} char={name[0]} isOnline={false} size={40} />
      )}
      <div className="flex flex-col m-4">
        <p className="font-semibold text-text1">{name}</p>
      </div>
    </div>
  );
}
