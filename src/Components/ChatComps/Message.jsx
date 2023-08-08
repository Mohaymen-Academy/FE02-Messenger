import { UilCheck } from '@iconscout/react-unicons';
import { useEffect, useState } from 'react';
import MessageMenu from './MessageMenu';

function Message({ content, isSeen, id }) {
  const [rightClicked, setRightClicked] = useState(false);
  const [points, setPoints] = useState({
    x: 0,
    y: 0
  });
  useEffect(() => {
    if (rightClicked) {
      const handleClick = () => setRightClicked(false);
      window.addEventListener('click', handleClick);
      return () => {
        window.removeEventListener('click', handleClick);
      };
    }
  }, [rightClicked]);
  function handleContex(e) {
    e.preventDefault();
    setRightClicked(true);
    setPoints({ x: e.pageX, y: e.pageY });
  }
  return (
    <div
      className={`relative flex w-full ${id === 'you' ? 'justify-start' : 'justify-end'} `}
      onContextMenu={handleContex}>
      <div
        className={` my-3 max-w-[50%] justify-end rounded-md bg-gradient-to-r ${
          id === 'you' ? ' from-blue-500 to-cyan-400' : 'from-indigo-500 via-purple-500 to-pink-500'
        } p-2 text-white`}>
        <p>{content}</p>
        <div className=" flex w-full items-end justify-between text-sm text-zinc-400">
          <p>23:00</p>
          <div>{id === 'you' && isSeen ? <UilCheck /> : null}</div>
        </div>
      </div>
      {rightClicked ? <MessageMenu /> : null}
    </div>
  );
}

export default Message;
