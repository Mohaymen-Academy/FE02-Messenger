function MessageDateGroup({ date, children }) {

  return (
    <div className="my-[1rem] w-full text-center">
      <span className="pointer-events-none sticky top-1 z-10  rounded-full bg-black bg-opacity-60 px-2 py-1 font-iRANSans text-white">
        {getRelativeDate(date)}
      </span>
      {children}
    </div>
  );
}

export default MessageDateGroup;
