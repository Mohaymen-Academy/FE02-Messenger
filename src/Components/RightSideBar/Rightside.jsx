import { useEffect, useRef, useState } from 'react';
import { Chatlist } from '../ChatComps';
import SidebarMenu from './SidebarMenu.jsx';
import ContactsList from './ContactsList';
import Settings from './Menues/Settings';
import GroupChannelAdd from './GroupChannelAdd';
import Requests from '../../API/Requests';
import { UilBars, UilSearch, UilArrowRight } from '@iconscout/react-unicons';
import {
  NUM_SIDEBAR_CHANNEL,
  NUM_SIDEBAR_CONTACTS,
  NUM_SIDEBAR_GROUP,
  NUM_SIDEBAR_SETTINGS,
  NUM_SIDEBAR_CHAT,
  NUM_SIDEBAR_DEFAULT
} from '../../utility/Constants.js';
import { useDispatch, useSelector } from 'react-redux';
import { setsidebarState, BackHandler } from '../../features/rightSideSlice';
import Search from '../SearchBar/Search';

export default function RightSide({ chatId }) {
  // const [open, setopen] = useState(false);
  const isopen = useSelector((store) => store.rightsideMenues.isOpen);
  const menu = useSelector((store) => store.rightsideMenues.RightView);

  const divref = useRef(null);
  const dispatch = useDispatch();
  const Items = {
    [NUM_SIDEBAR_CHAT]: <Chatlist />,
    [NUM_SIDEBAR_CONTACTS]: <ContactsList />,
    [NUM_SIDEBAR_SETTINGS]: <Settings />,
    [NUM_SIDEBAR_GROUP]: <GroupChannelAdd type={'group'} />,
    [NUM_SIDEBAR_CHANNEL]: <GroupChannelAdd type={'channel'} />
  };
  function handleSearch(value) {
    if (menu == NUM_SIDEBAR_CHAT) {
      Requests().SearchAll(value);
    }
  }

  function handleOutsideClick(event) {
    if (divref.current && !divref.current.contains(event.target)) {
      dispatch(setsidebarState({ state: false }));
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
          {menu === NUM_SIDEBAR_CHAT ? (
            <button
              className="relative"
              onClick={() => dispatch(setsidebarState({ state: !isopen }))}>
              <UilBars className="text-text1 w-10 h-10 mx-1 m-1  " />
            </button>
          ) : (
            <button onClick={(e) => dispatch(BackHandler())}>
              <UilArrowRight className="text-text1 w-10 h-10 mx-1 m-1    " />
            </button>
          )}
        </div>
        <Search menu={menu} />
        {isopen ? <SidebarMenu divref={divref} /> : <></>}
      </div>

      {Items[menu]}
    </div>
  );
}
