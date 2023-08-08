import { UilCheck } from '@iconscout/react-unicons';

function Message() {
  function handleContexr(e) {
    e.preventDefault();
    console.log('hello ');
  }

  return (
    <div className=" my-3 max-w-md rounded-md bg-gradient-to-r from-blue-500 to-cyan-400 p-2 text-white">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ex.</p>
      <div className=" flex w-full items-end justify-between text-sm text-zinc-400">
        <p>23:00</p>
        <div>
          <UilCheck />
        </div>
      </div>
    </div>
  );
}

export default Message;
