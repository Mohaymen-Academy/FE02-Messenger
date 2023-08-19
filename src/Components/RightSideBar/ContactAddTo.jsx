import React from 'react';
import Avatar from '../ChatComps/Avatar';

export default function ContactAddTo({
  name,
  image,
  color,
  chatid,
  type,
  lastseen,
  setselected,
  selected
}) {
  const isChecked = selected.includes(chatid);
  return (
    <div>
      <div
        // ! delete this item
        // onClick={() => setter(chatid)}

        className="flex h-18 w-[97%] cursor-pointer m-1 mx-2 flex-row items-center justify-start rounded-lg hover:bg-bghovor">
        {true && (
          <input
            className={'beautyinput rounded-full mr-5 w-5 h-5'}
            onChange={() => {
              if (isChecked) {
                setselected(selected.filter((elem) => elem.chatid !== chatid)); // Remove the chatid from the array
              } else {
                setselected([...selected, { chatid, name, image, color }]); // Add the new chatid to the array
              }
            }}
            type="checkbox"
            checked={isChecked}
          />
        )}
        <div className="w-fit px-2 flex">
          {image ? (
            <img
              src={`data:image/jpeg;base64,${image?.preLoadingContent}`}
              className="h-[50px] w-[50px] rounded-full"
            />
          ) : (
            <Avatar
            size={50}
              imagecolor={color}
              char={name[0]}
              isOnline={'online'}
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
