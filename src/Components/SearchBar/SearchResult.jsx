import React from 'react'

export default function SearchResult({profile}) {
  return (
    <div>    
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
            </div>
        </div>
        </div>
    </div>
  </div>
  )
}
