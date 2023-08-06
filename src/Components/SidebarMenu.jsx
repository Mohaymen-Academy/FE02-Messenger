import React, { useState } from 'react'

export default function SidebarMenu() {
    const [open, setopen] = useState(false);
    return (
        <>
            {
                open ?
                    <img src="images/menuIcon.png" className={'w-[20px] h-[20px]'} alt="" />
                    :
                    <div>
                        <img src="" alt="" />
                        MenuCard
                    </div>
            }
        </>
    )
}
