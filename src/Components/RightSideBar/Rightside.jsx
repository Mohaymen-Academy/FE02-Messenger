import { useEffect, useRef, useState } from 'react';
import { Chatlist } from '../ChatComps';
import SidebarMenu from './SidebarMenu.jsx';
import ContactsList from './ContactsList';
import Settings from './Menues/Settings';
import GroupChannelAdd from './GroupChannelAdd';
import { UilBars, UilSearch, UilArrowRight } from '@iconscout/react-unicons';
import {
  NUM_SIDEBAR_CHANNEL,
  NUM_SIDEBAR_CONTACTS,
  NUM_SIDEBAR_GROUP,
  NUM_SIDEBAR_SETTINGS,
  NUM_SIDEBAR_CHAT
} from '../../utility/Constants.js';

export default function RightSide({ dispatch, chatId }) {
  const [open, setopen] = useState(false);
  const divref = useRef(null);
  const [item, setItem] = useState(NUM_SIDEBAR_CHAT);
  const Items = {
    [NUM_SIDEBAR_CHAT]: <Chatlist dispatch={dispatch} />,
    [NUM_SIDEBAR_CONTACTS]: <ContactsList dispatch={dispatch} />,
    [NUM_SIDEBAR_SETTINGS]: <Settings menuSetter={setItem} setopen={setopen} />,
    [NUM_SIDEBAR_GROUP]: <GroupChannelAdd type={'group'} />,
    [NUM_SIDEBAR_CHANNEL]: <GroupChannelAdd type={'channel'} />
  };
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
      className={` h-screen bg-color1 w-[450px] border-l-2 border-bghovor shadow-md vsmmobile:z-0 vsmmobile:relative ${
        chatId
          ? 'mobile:w-[30%] tablet:w-[30%] smmobile:w-[30%] vsmmobile:w-0 '
          : 'mobile:w-fit tablet:w-fit smmobile:w-fit vsmmobile:w-[100%]'
      } `}>
      <div className="flex justify-between px-2 py-1 ">
        <div>
          {item == NUM_SIDEBAR_CHAT ? (
            <button className="relative" onClick={(e) => setopen((prev) => !prev)}>
              <UilBars className="text-text1 w-10 h-10 mx-1 m-1  " />
            </button>
          ) : (
            <button onClick={(e) => setItem(
              NUM_SIDEBAR_CHAT
              // item == NUM_SIDEBAR_SETTINGS ? NUM_SIDEBAR_CHAT:NUM_SIDEBAR_CHANNEL
              )}>
              <UilArrowRight className="text-text1 w-10 h-10 mx-1 m-1    " />
            </button>
          )}
        </div>

        <form dir="rtl" className="w-[85%] m-1">
          <div className="relative">
            <input
              type="search"
              id="default-search"
              className="block w-full rounded-full p-2 pl-10 pr-5 text-sm border bg-color2 focus:ring-color1 text-text1
              placeholder-text1"
              placeholder={`جستجو ${item == NUM_SIDEBAR_CONTACTS ? 'مخاطبین' : ''}`}
              // required
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <UilSearch className="text-text1 w-5 h-5" />
            </div>
          </div>
        </form>
      </div>

      {Items[item]}
      <SidebarMenu
        profileImage={'images/profile.jpg'}
        item={item}
        setItem={setItem}
        username={'Zahra'}
        open={open}
        setopen={setopen}
        divref={divref}
      />
    </div>
  );
}
