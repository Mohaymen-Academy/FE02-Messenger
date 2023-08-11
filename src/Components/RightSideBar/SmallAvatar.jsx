import React from 'react'

export default function SmallAvatar({image}) {
  return (
    <div className="">
    <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-blue-400 ">
      {image?.length == 1 ? (
        <p className=" h-[100%] flex place-items-center text-center text-2xl font-normal text-white">{image}</p>
      ) : (
        <img src={image} alt="" />
      )}
      
    </div>
  </div>
  )
}
