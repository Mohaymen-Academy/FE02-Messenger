import React, { useEffect, useState } from 'react'
import SidebarCard from './SidebarCard';
import { useRef } from 'react';

export default function SidebarMenu({ profileImage, username }) {
    const [open, setopen] = useState(true);
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
            className='w-[190px] h-screen'>
            <button
            className='fixed'
                onClick={(e) => setopen(prev => !prev)}>
                <img src="images/menuIcon.png" className={'w-[20px] h-[20px]'} alt="" />
            </button>
            <div
                ref={divref}
                className={`relative top-0 bg-blue-700 h-screen px-5 flex flex-col transition-all duration-1000 ease-in-out ${open ? 'right-0' : 'right-[-250px]'}`}>
                <div
                    className='flex flex-col pt-5 pb-3 px-3 border-b-2 border-b-gray-400'>
                    <img src={profileImage} className='w-[50px] h-[50px] rounded-full' alt="" />
                    {username}
                </div>
                {
                    <SidebarCard icon={'images/setting.png'} title={'Settings'} />
                }
                {
                    <SidebarCard icon={'images/contacts.png'} title={'Contacts'} />
                }
                {
                    <SidebarCard icon={'images/profile.jpg'} title={'Profile'} />
                }
                {
                    <SidebarCard icon={'images/setting.png'} title={'Settings'} />
                }
                {
                    <SidebarCard icon={'images/setting.png'} title={'Settings'} />
                }
            </div>

        </div>
    )
}
