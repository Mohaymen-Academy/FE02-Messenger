import { useEffect, useRef, useState } from 'react';
import { Chatlist } from '../ChatComps';
import SidebarMenu from './SidebarMenu.jsx';
import { UilBars, UilSearch } from '@iconscout/react-unicons';

export default function RightSide({ setChatId, chatId }) {
  const [open, setopen] = useState(false);
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
    <div
      className={` h-screen bg-color1 border-l-2 border-bghovor shadow-md vsmmobile:z-0 vsmmobile:relative ${
        chatId ? 'vsmmobile:w-0' : 'vsmmobile:w-100%'
      } `}>
      <div className="flex justify-between px-2 py-1 ">
        <div>
          <button className="fixed" onClick={(e) => setopen((prev) => !prev)}>
            <UilBars className="text-text1 w-10 h-10 mx-1 m-1  " />
          </button>
        </div>

        <form dir="rtl" className="w-[85%] m-1">
          <div class="relative">
            <input
              type="search"
              id="default-search"
              class="block w-full rounded-full p-2 pl-10 pr-5 text-sm border bg-color2 focus:ring-color1 text-text1
              placeholder-text1"
              placeholder="جستجو"
              // required
            />
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <UilSearch className="text-text1 w-5 h-5" />
            </div>
          </div>
        </form>
      </div>
      <Chatlist setChatId={setChatId} />
      <SidebarMenu
        profileImage={'images/profile.jpg'}
        username={'Zahra'}
        open={open}
        divref={divref}
      />
    </div>
  );
}
