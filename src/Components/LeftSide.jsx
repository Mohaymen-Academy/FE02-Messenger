import { useEffect, useRef, useState } from 'react';
import { Chatlist } from './ChatComps';
import SidebarMenu from './SidebarMenu.jsx';
import { UilBars } from '@iconscout/react-unicons'

export default function LeftSide() {
  const [open, setopen] = useState(true);
  const divref = useRef(null);
  function handleOutsideClick(event) {
    if (divref.current && !divref.current.contains(event.target)) {
      setopen(false);
    }
  }
  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => document.addEventListener('mousedown', handleOutsideClick);
  }, [open]);
  return (
    <div className=" h-screen w-[380px] bg-slate-600 shadow-md vsmmobile:w-full">
      <div className="flex justify-between px-2 py-1 ">
        <div>
          <button className="fixed" onClick={(e) => setopen((prev) => !prev)}>
            <UilBars className="text-text1 w-8 h-8 mx-1 "  />
          </button>
        </div>
        <div className="flex w-[340px] flex-row-reverse px-5 ">
          <input type="text" className={'w-[100%] rounded-lg'} />
        </div>
      </div>
      <Chatlist />
      <SidebarMenu
        profileImage={'images/profile.jpg'}
        username={'Zahra'}
        open={open}
        divref={divref}
      />
    </div>
  );
}
