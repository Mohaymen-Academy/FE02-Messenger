import React from 'react'
import { useSelector } from 'react-redux'

export default function Medias() {
    const medias = useSelector((state) => state.SharedMedia.images)
    console.log(medias)

  return (
    <div className='flex flex-row flex-wrap pr-2 pt-2'>
      {medias.map((media) => (
        <div
          className='flex items-center justify-center m-0.5 w-[32%] bg-color2 rounded-sm '
          key={media.media.midiaId}
        >
          <img
            src={`data:image/jpeg;base64,${media.media.content}`}
            className='w-full h-full object-cover aspect-[1/1] hover:opacity-70 rounded-sm '
          />
        </div>
      ))}
    </div>

  )
}
