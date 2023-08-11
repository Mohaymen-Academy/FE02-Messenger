import React from 'react';
export default function SidebarCard({ icon, title, setsection, menuId , setopen}) {
  function handleClick()
  {
    setsection(menuId)
    setopen(false)
  }
  return (
    <button
    className='hover:bg-color1  flex flex-row p-3 px-5 items-center gap-2 w-[full]'
    onClick={(e) => handleClick()}>
      <div className="flex items-center gap-2 my-1">
        {icon}
      </div>
        <p className="cardP">{title}</p>
    </button>
  );
}
