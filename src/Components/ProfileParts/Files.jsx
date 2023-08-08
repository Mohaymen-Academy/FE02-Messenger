import React from 'react'

export default function Files() {
    const files = [
        {
            id: 1,
            name: 'Media 1',
            url: 'images/profile.jpg',
            type: 'image',
            size: '1.2 MB',
            date: '2021-10-10'
        },
        {
            id: 2,
            name: 'Media 2',
            url: 'images/profile.jpg',
            type: 'image',
            size: '1.2 MB',
            date: '2021-10-10'
        },
    ]
            

  return (
    <div className='flex flex-row flex-wrap py-2'>
        {files.map(file => (
            <div className='flex flex-row items-center justify-center m-0.5' >
                {file.name}
            </div>   
        ))}
    </div>

  )
}
