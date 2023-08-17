import React from 'react'
import { UilPlay } from '@iconscout/react-unicons'
export default function Voices() {
  const mapp = [1,2,3]
  return (
    <div  className='flex flex-col flex-wrap pt-3 '>
        {mapp.map(file => (
            <div className="pr-5 flex flex-row gap-3 my-2 hover:opacity-70  rounded-lg">
            <div className="flex bg-color4 w-[50px] h-[50px] cursor-default text-center items-center text-text1 justify-center text-lg rounded-full">
              <UilPlay className='w-7 h-6 text-text1'/>
            </div>
            <div
            className='flex flex-col text-color3 text-sm mt-2.5'>
              <a>
                <p className="text-text1 font-bold">23 مرداد 1402</p>
              </a>
              <a>
                <p>You</p>
              </a>
            </div>
          </div>
        ))}
    </div>

  )
}
