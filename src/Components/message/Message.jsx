import { UilCheck } from '@iconscout/react-unicons';
import { useEffect, useState, useRef } from 'react';
import MessageMenu from './MessageMenu';

function Message({ content, isSeen, id, forewardedFrom }) {
  // const [rightClicked, setRightClicked] = useState(false);
  // const [points, setPoints] = useState({
  //   x: 0,
  //   y: 0
  // });
  // useEffect(() => {
  //   if (rightClicked) {
  //     const handleClick = () => setRightClicked(false);
  //     window.addEventListener('click', handleClick);
  //     return () => {
  //       window.removeEventListener('click', handleClick);
  //     };
  //   }
  // }, [rightClicked]);
  // function handleContex(e) {
  //   e.preventDefault();
  //   setRightClicked(true);
  //   setPoints({ x: e.pageX, y: e.pageY });
  // }
  const [openContextMenu, setOpenContextMenu] = useState(false);
  const [mousepositoin, setmousepositoin] = useState({ x: 0, y: 0 });
  let y_mouse = useRef(0);
  let x_mouse = useRef(0);
  function handleRightClick(event, index) {
    event.preventDefault();
    event.stopPropagation();
    x_mouse = event.clientX;
    y_mouse = event.clientY;
    setmousepositoin({ x_mouse, y_mouse });
  }

  return (
    <div
      className={`relative flex w-full ${id === 'you' ? 'justify-start' : 'justify-end'} `}
      onContextMenu={handleRightClick}>
      <div
        className={` my-3 max-w-[50%] justify-end rounded-md bg-gradient-to-r ${
          id === 'you' ? ' from-blue-500 to-cyan-400' : 'from-indigo-500 via-purple-500 to-pink-500'
        } p-2 text-white `}>
        <div>
          {forewardedFrom ? (
            <div className="text-left flex flex-row-reverse">
              <p className="opacity-30 italic">Forwarded from</p>
              &nbsp;&nbsp;&nbsp;
              <span className="font-semibold italic opacity-100">zarp</span>
            </div>
          ) : null}
        </div>
        <p>{content}</p>
        <div className=" flex w-full items-end justify-between text-sm text-zinc-400">
          <p className="text-color1">23:00</p>
          <div className="text-color1">
            {id === 'you' && isSeen ? (
              <div className="flex flex-row">
                <UilCheck className={'relative left-[-18px]'} />
                <UilCheck />
              </div>
            ) : (
              <UilCheck />
            )}
          </div>
        </div>
      </div>
      {mousepositoin.x != 0 ? (
        <MessageMenu
          x_pos={x_mouse.current}
          y_pos={y_mouse.current}
          positions={mousepositoin}
          setposition={setmousepositoin}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default Message;
