import { useEffect, useRef, useState } from 'react';
import { Chatlist } from './ChatComps';
import SidebarMenu from './SidebarMenu.jsx';
import { UilBars, UilSearch } from '@iconscout/react-unicons';

export default function RightSide() {
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
    <div className=" h-screen w-[380px] bg-color1 shadow-md vsmmobile:w-full">
      <div className="flex justify-between px-2 py-1 ">
        <div>
          <button className="fixed" onClick={(e) => setopen((prev) => !prev)}>
            <UilBars className="text-text1 w-8 h-8 mx-1 " />
          </button>
        </div>

        <form dir="rtl" className="w-[88%]">
          <div class="relative">
            <input
              type="search"
              id="default-search"
              class="block w-full rounded-full p-4 pl-10 text-sm border bg-text1 focus:ring-color1 text-text1
              placeholder-text1"
              placeholder="جستجو"
              // required
            />
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <UilSearch />
            </div>
          </div>
        </form>
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
