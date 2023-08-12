import React from 'react';
import Avatar from '../ChatComps/Avatar';

export default function ContactAddTo({
  profilePicture,
  unreadmessage,
  chatid,
  setter,
  addicon,
  selected,
  setselected,
}) {
  const isChecked = selected.includes(chatid);

  return (
    <div>
      <div
        onClick={() => setter(chatid)}
        className="flex h-18 w-[97%] cursor-pointer m-1 mx-2 flex-row items-center justify-start rounded-lg hover:bg-bghovor"
      >
        {addicon && (
          <input
            className={'beautyinput rounded-full mr-5 w-5 h-5'}
            onChange={() => {
              if (isChecked) {
                setselected(selected.filter(id => id !== chatid)); // Remove the chatid from the array
              } else {
                setselected([...selected, chatid]); // Add the new chatid to the array
              }
            }}
            type="checkbox"
            checked={isChecked}
          />
        )}
        <div className="w-fit px-2 flex">
          {profilePicture ? (
            <img src={profilePicture} className="h-full rounded-full" />
          ) : (
            <Avatar image={'s'} />
          )}
          <div className="flex flex-row m-2">
            <div className="flex flex-col">
              <p className="font-semibold text-text1">زهرا</p>
              <div className="line-clamp-1 text-base text-text1 opacity-[50%] pl-3">
                آخرین بازدید 6 دقیقه پیش
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
