function MessageMedia({ src, handleClick }) {
//  console.log(src)
  return (
    <div className="w-full rounded-md" onClick={handleClick}>
      <img src={`data:image/jpeg;base64,${src}`} className="cursor-pointer w-[200px] h-[200px]" />
    </div>
  );
}

export default MessageMedia;
