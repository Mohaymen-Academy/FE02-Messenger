import React from 'react'

export default function Medias() {
    const medias = [
        {
            id: 1,
            name: 'Media 1',
            url: 'images/profile.jpg',
            type: 'image'
        },
        {
            id: 2,
            name: 'Media 2',
            url: 'images/profile.jpg',
            type: 'image'
        },
        {
            id: 3,
            name: 'Media 3',
            url: 'images/profile.jpg',
            type: 'image'
        },
        {
            id: 4,
            name: 'Media 4',
            url: 'images/profile.jpg',
            type: 'image'
        },

    ]
            

  return (
    <div className='flex flex-row flex-wrap pr-2 pt-2'>
      {medias.map((media) => (
        <div
          className='flex items-center justify-center m-0.5 w-[32%]  '
          key={media.id}
        >
          <img
            src={media.url}
            alt={media.name}
            className='w-full h-full object-cover aspect-[1/1] hover:opacity-70 rounded-sm '
          />
        </div>
      ))}
    </div>

  )
}
