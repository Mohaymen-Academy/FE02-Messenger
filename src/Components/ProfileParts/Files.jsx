import React from 'react'
import { UilFileQuestion } from '@iconscout/react-unicons'
export default function Files() {
    const files = [
        {
            id: 1,
            name: 'Media 1',
            url: 'images/profile.jpg',
            type: 'image',
            size: '1.2 مگابایت',
            date: '2021-10-10'
        },
        {
            id: 2,
            name: 'Media 2',
            url: 'images/profile.jpg',
            type: 'image',
            size: '1.2 مگابایت',
            date: '2021-10-10'
        },
    ]
            

  return (
    <div dir='rtl' className='flex flex-col flex-wrap py-2'>
        {files.map(file => (
            <div className="flex flex-row items-center justify-start m-0.5 bg-color1 h-[60px] mt-1.5 hover:bg-color2 rounded-lg mx-1" >
                <UilFileQuestion className="text-text1 w-14 h-14 mx-1 " />
                <div className='flex flex-col '>
                    <div className='text-text1 text-[16px] font-bold'>{file.name}</div>
                    <div className='text-text1 text-[12px]'>{file.size}  ,   {file.date}</div>

                </div>
            </div>   
        ))}
    </div>

  )
}
