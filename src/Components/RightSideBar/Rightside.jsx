import { useEffect, useRef, useState } from 'react';
import { Chatlist } from '../ChatComps';
import SidebarMenu from './SidebarMenu.jsx';
import ContactsList from './ContactsList';
import Settings from './Menues/Settings';
import GroupChannelAdd from './GroupChannelAdd';
import Requests from '../../API/Requests';
import {
  NUM_SIDEBAR_CHANNEL,
  NUM_SIDEBAR_CONTACTS,
  NUM_SIDEBAR_GROUP,
  NUM_SIDEBAR_SETTINGS,
  NUM_SIDEBAR_CHAT,
  NUM_SIDEBAR_DEFAULT,
  NUM_SIDEBAR_MENU
} from '../../utility/Constants.js';
import { useDispatch, useSelector } from 'react-redux';
import { setsidebarState, BackHandler } from '../../features/rightSideSlice';
import SideBard from './Menues/SideBard';

export default function RightSide({ chatId }) {
  // const [open, setopen] = useState(false);
  const isopen = useSelector((store) => store.rightsideMenues.isOpen);
  const menu = useSelector((store) => store.rightsideMenues.RightView);

  const divref = useRef(null);
  const dispatch = useDispatch();
  const Items = {
    [NUM_SIDEBAR_CHAT]: <Chatlist isopen={isopen} />,
    [NUM_SIDEBAR_MENU]: <SidebarMenu divref={divref} />
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
  return (
    <div
      className={` h-screen bg-color1 w-[450px] border-l-2 border-bghovor shadow-md vsmmobile:z-0 vsmmobile:relative ${
        chatId
          ? 'mobile:w-[30%] tablet:w-[30%] smmobile:w-[30%] vsmmobile:w-0 '
          : 'mobile:w-fit tablet:w-fit smmobile:w-fit vsmmobile:w-[100%]'
      } `}>
      {Items[menu]}
    </div>
  );
}
