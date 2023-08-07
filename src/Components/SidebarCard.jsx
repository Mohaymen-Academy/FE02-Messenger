import React from 'react';

export default function SidebarCard({ icon, title, setsection, menuId }) {
  return (
    <button
    className='hover:bg-gray-200 rounded-lg'
    onClick={(e) => setsection(menuId)}>
      <div className="flex items-center gap-2 my-1">
        <img src={icon} className="w-[40px] h-[40px]" alt="" />
        <p className="cardP">{title}</p>
      </div>
    </button>
  );
}
