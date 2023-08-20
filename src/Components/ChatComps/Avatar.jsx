import React from 'react';

const Avatar = ({ image, isOnline, char, imagecolor, size }) => (
  <div>
    {/* 
              image={profile.lastProfilePicture.preLoadingContent}
 */}
    <div
      className={`flex h-[${size}px] w-[${size}px]  items-center justify-center rounded-full `}
      style={{ backgroundColor: `${imagecolor}` }}>
      {image?.preLoadingContent ? (
        <img
          src={`data:image/jpeg;base64,${image.preLoadingContent}`}
          className="h-[50px] w-[50px] rounded-full"
        />
      ) : (
        <p className=" h-[100%] flex place-items-center text-center text-2xl font-normal text-white">
          {char}
        </p>
      )}
    </div>
    {isOnline == 'online' ? (
      <span className="relative top-[-10px] block h-3 w-3 rounded-full bg-green-500 shadow-lg shadow-green-300"></span>
    ) : // <p>{isOnline}</p>
    null}
  </div>
);

export default Avatar;
