function MessageImageMedia({ src, handleClick }) {
  return (
    <div className="w-full rounded-md" onClick={handleClick}>
      <img src={src} className="cursor-pointer" />
    </div>
  );
}

export default MessageImageMedia;
