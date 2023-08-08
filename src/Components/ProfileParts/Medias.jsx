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
    <div className='flex flex-row flex-wrap '>
        {medias.map(media => (
            <div className='flex flex-col items-center justify-center m-0.5'>
                <img src={media.url} alt={media.name} width="100" height="100" className='' />
            </div>   
        ))}             
    </div>
  )
}
