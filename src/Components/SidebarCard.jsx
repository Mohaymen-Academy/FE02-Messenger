import React from 'react'

export default function SidebarCard({ icon, title, setsection }) {
    return (
        <button
            onClick={(e) => setsection(title)}
        >
            <div
                className='flex items-center justify-evenly'>
                <img src={icon} className='w-[40px] h-[40px]' alt="" />
                <p>{title}</p>
            </div>
        </button>
    )
}
