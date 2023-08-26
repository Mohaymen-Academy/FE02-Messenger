import React, { useEffect, useRef } from 'react';
import { UilSearch } from '@iconscout/react-unicons';
import Requests from '../../API/Requests';
import SearchResult from './SearchResult';
import {
  NUM_SIDEBAR_CHANNEL,
  NUM_SIDEBAR_CONTACTS,
  NUM_SIDEBAR_GROUP,
  NUM_SIDEBAR_SETTINGS,
  NUM_SIDEBAR_CHAT,
  NUM_SIDEBAR_DEFAULT
} from '../../utility/Constants.js';

export default function Search({ menu }) {
  const [result, setResult] = React.useState([]);
  const [channels, setChannels] = React.useState([]);
  const [massages, setMassages] = React.useState([]);
  const [members, setMembers] = React.useState([]);
  const [isOpen, setisOpen] = React.useState(false);
  const [count, setCount] = React.useState(0);
  const searchContainerRef = useRef(null);

  async function handleSearch(value) {
    await Requests()
      .SearchAll(value)
      .then((res) => {
        setResult(res.data);
        setChannels(res.data[0].items);
        setMembers(res.data[1].items);
        setMassages(res.data[2].items);
      });
  }
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setisOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div className={`w-[92%] ml-3 ${isOpen && 'h-screen'}`} ref={searchContainerRef}>
      <form dir="rtl" className="w-[100%] m-1">
        <div className="relative">
          <input
            type="search"
            id="default-search"
            autoComplete="off"
            onFocus={() => setisOpen(true)}
            // onBlur={() => setisOpen(false)}
            onChange={(e) => handleSearch(e.target.value)}
            className={`block w-full rounded-full p-2 pl-10 pr-5 text-sm border bg-color2 focus:ring-color1 text-text1 placeholder-text1`}
            placeholder={`جستجو`}
            // required
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <UilSearch className="text-text1 w-5 h-5" />
          </div>
        </div>
      </form>
      {
        isOpen && channels.length > 0 && (
          <div className="flex flex-col p-2">
            <p className="text-text1">کانال‌ها   </p>
          </div>
        )
      }
      {isOpen &&
        channels.length > 0 &&
        channels.map((channel) => (
          <SearchResult
            profile={channel.profile}
            text={channel.text}
            massage_id={channel.massage_id}
          />
        ))}
              {
        isOpen && massages.length > 0 && (
          <div className="flex flex-col p-2">
            <p className="text-text1">پیام‌ها   </p>
          </div>
        )
      }
      {isOpen &&
        massages.length > 0 &&
        massages.map((massage) => (
          <SearchResult
            profile={massage.profile}
            text={massage.text}
            massage_id={massage.massage_id}
          />
        ))}
              {
        isOpen && members.length > 0 && (
          <div className="flex flex-col p-2">
            <p className="text-text1">افراد   </p>
          </div>
        )
      }
      {isOpen &&
        members.length > 0 &&
        members.map((member) => (
          <SearchResult profile={member.profile} text={member.text} massage_id={0} />
        ))}
    </div>
  );
}
