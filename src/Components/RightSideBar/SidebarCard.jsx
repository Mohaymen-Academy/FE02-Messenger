import React from 'react';
import { useDispatch } from 'react-redux';
import { setsidebarState, setParent } from '../../features/rightSideSlice';
export default function SidebarCard({ icon, title, menuId, action }) {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(setParent({ parent: menuId }));
    dispatch(setsidebarState({ state: false }));
  }
  console.log(action);
  return (
    <button
      className="hover:bg-color1  flex flex-row p-3 px-5 items-center gap-2 w-[full]"
      onClick={action ? action : handleClick}>
      <div className="flex items-center gap-2 my-1">{icon}</div>
      <p className="cardP">{title}</p>
    </button>
  );
}
