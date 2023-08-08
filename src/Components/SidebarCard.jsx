import React from 'react';
export default function SidebarCard({ icon, title, setsection, menuId }) {
  return (
    <button
    className='hover:bg-color2 rounded-lg flex flex-row p-2 items-center gap-2 my-1 w-full'
    onClick={(e) => setsection(menuId)}>
      <div className="flex items-center gap-2 my-1">
        {icon}
      </div>
        <p className="cardP">{title}</p>
    </button>
  );
}
