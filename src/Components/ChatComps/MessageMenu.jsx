const items = ['delete', 'pin', 'forward'];

function MessageMenu({ top = 0, left = 0 }) {
  return (
    <ul className="absolute left-1/3 top-3/4 z-10 w-52 rounded-sm bg-white opacity-70">
      {items.map((item, index) => (
        <li
          className="flex h-10 w-full cursor-pointer items-center justify-center text-center hover:bg-slate-500"
          key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default MessageMenu;
