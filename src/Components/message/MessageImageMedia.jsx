function MessageImageMedia({ src }) {
  return (
    <div className="w-full rounded-md">
      <img src={src} className="cursor-pointer" />
    </div>
  );
}

export default MessageImageMedia;
