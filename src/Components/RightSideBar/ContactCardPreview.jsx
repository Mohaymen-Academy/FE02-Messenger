import React from 'react'
import Avatar from '../ChatComps/Avatar'

export default function ContactCardPreview({ profilePicture, unreadmessage, chatid, setter }) {
  return (
    <div>
          <div
            onClick={(e) => setter(chatid)}
            className=" flex h-18 w-[97%] cursor-pointer m-1 mx-2 flex-row items-center justify-start rounded-lg  hover:bg-bghovor">
            <div className="w-fit px-2 flex">
            {profilePicture ? (
                <img src={profilePicture} className="h-full rounded-full" />
            ) : (
                <Avatar image={'s'}  />
            )}
            <div
            className='flex flex-row m-2'>
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
  )
}

