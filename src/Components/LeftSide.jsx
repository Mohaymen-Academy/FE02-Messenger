import { useEffect, useRef, useState } from 'react';
import Chatlist from './Chatlist.jsx';
import SidebarMenu from './SidebarMenu.jsx';

export default function LeftSide() {
  const [open, setopen] = useState(true);
  const divref = useRef(null);
  function handleOutsideClick(event) {
    if (divref.current && !divref.current.contains(event.target)) {
      console.log('zrap');
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
    <div className="fixed right-0 top-0 h-full w-[380px] bg-slate-600 shadow-md">
      <button className="fixed" onClick={(e) => setopen((prev) => !prev)}>
        <img src="images/menuIcon.png" className={'h-[20px] w-[20px]'} alt="" />
      </button>
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
