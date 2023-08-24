import React from 'react'

export default function imageComponent({media}) {
  console.log(media)
  return (
        <div
        className='flex items-center justify-center m-0.5 w-[32%] bg-color2 rounded-sm '
        key={media.media.midiaId}
    >
        <img
        src={`data:image/jpeg;base64,${media.media.content}`}
        className='w-full h-full object-cover aspect-[1/1] hover:opacity-70 rounded-sm '
        />
  </div>
  )
}
