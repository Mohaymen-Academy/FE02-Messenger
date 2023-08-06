import React from 'react'

export default function MenuCard({ title, imagesrc }) {
    return (
        <div
            className='justify-between w-[100%] h-fit'
        >
            <img src={imagesrc} alt="icon" />
            <p>{title}</p>
        </div >
    )
}
