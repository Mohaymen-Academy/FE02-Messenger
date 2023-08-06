import { useEffect, useRef, useState } from 'react';
import Chatlist from './Chatlist.jsx';
import SidebarMenu from './SidebarMenu.jsx';

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
    <div className="fixed right-0 top-0 h-screen w-[380px] bg-slate-600 shadow-md">
      <div className="flex justify-between px-2 py-1 ">
        <div>
          <button className="fixed" onClick={(e) => setopen((prev) => !prev)}>
            <img src="images/menuIcon.png" className={'h-[25px] w-[25px]'} alt="" />
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
