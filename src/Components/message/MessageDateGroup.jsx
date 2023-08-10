function MessageDateGroup({ children }) {
  return (
    <div className="w-full">
      <span className="pointer-events-none sticky top-1 z-10 my-[1rem] rounded-xl bg-opacity-60 opacity-100">
        امروز
      </span>
      {children}
    </div>
  );
}

export default MessageDateGroup;
