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
    <div dir='rtl' className='flex flex-col justify-center items-center flex-wrap pt-3 '>
        {files.map(file => (
            <div className=" flex flex-row gap-3 my-1 hover:opacity-70 w-[95%] rounded-lg ">
                <div className="flex w-[60px] h-[60px] cursor-default text-center items-center text-text1 justify-center text-lg rounded-lg">
                    <UilFileQuestion className="text-text1 w-14 h-14 mx-1 " />
                </div>
                <div
                className='flex flex-col text-color3 text-sm mt-3'>
                <a>
                    <p className="text-text1 font-bold">{file.name}</p>
                </a>
                <a>
                    <p>{file.size}  ,   {file.date}</p>
                </a>
                </div>
          </div>
        ))}
    </div>

  )
}
