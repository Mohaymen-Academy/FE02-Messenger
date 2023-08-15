import React from 'react'
import {UilSearch} from '@iconscout/react-unicons'
import Requests from '../../API/Requests';

import {
    NUM_SIDEBAR_CHANNEL,
    NUM_SIDEBAR_CONTACTS,
    NUM_SIDEBAR_GROUP,
    NUM_SIDEBAR_SETTINGS,
    NUM_SIDEBAR_CHAT,
    NUM_SIDEBAR_DEFAULT
  } from '../../utility/Constants.js';



export default function Search({menu}) {
    const [result , setResult] = React.useState([]);
    const [isOpen , setisOpen] = React.useState(false);
    async function handleSearch(value) {
        if (menu == NUM_SIDEBAR_CHAT) {
          await Requests().SearchAll(value).then((res) => {
            setResult(res.data);
            // const c1 = 
          });
        }
      }
  return (
    <div className={`w-full ${isOpen && "h-screen"}`}>        
        <form dir="rtl" className="w-[100%] m-1">
            <div className="relative">
            <input
                type="search"
                id="default-search"
                onFocus={() => setisOpen(true)}
                onBlur={() => setisOpen(false)}
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
  </div>
  )
}
