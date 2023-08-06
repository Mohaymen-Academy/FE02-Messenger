import React, { useEffect, useState } from 'react'
import SidebarCard from './SidebarCard';
import { useRef } from 'react';

export default function SidebarMenu({ profileImage, username }) {
    const [open, setopen] = useState(false);
    const [popupComp, setpopupComp] = useState(0);
    const divref = useRef(null);
    useEffect(() => {
        if (open)
            document.addEventListener('mousedown', handleOutsideClick)
        return () => document.addEventListener('mousedown', handleOutsideClick)
    }, [open])
    function handleOutsideClick(event) {
        if (divref.current && !divref.current.contains(event.target)) {
            console.log('zrap')
            setopen(false);
        }
    }
    return (
        <div
            className='w-[220px] h-screen'>
            <button
                className='fixed'
                onClick={(e) => setopen(prev => !prev)}>
                <img src="images/menuIcon.png" className={'w-[20px] h-[20px]'} alt="" />
            </button>
            <div
                ref={divref}
                className={`relative top-0 bg-blue-700 h-screen px-5 flex flex-col transition-all duration-1000 ease-in-out ${open ? 'right-0' : 'right-[-250px]'}`}>
                <div
                    className='flex flex-col gap-3 pt-5 pb-3 pr-3 pl-[5.75rem] border-b-2 border-b-gray-400 w-fit'>
                    <img src={profileImage} className='w-[70px] h-[70px] rounded-full' alt="" />
                    {username}
                </div>
                {
                    <SidebarCard icon={'images/setting.png'} title={'Settings'} />
                }
                {
                    <SidebarCard icon={'images/contacts.png'} title={'Contacts'} />
                }
                {
                    <SidebarCard icon={'images/call.png'} title={'Call'} />
                }
                {
                    <SidebarCard icon={'images/setting.png'} title={'Settings'} />
                }
                {
                    <SidebarCard icon={'images/setting.png'} title={'Settings'} />
                }
                <div
                    className='flex items-center  gap-2 my-1'>
                    <img src={'images/darktheme.png'} className='w-[40px] h-[40px]' alt="" />
                    <p
                        className='cardP
                        whitespace-nowrap'>
                        Dark Theme
                    </p>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input className="sr-only peer" type="checkbox" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>

                </div>
            </div>

        </div>
    )
}
