import { UilCornerUpRightAlt } from '@iconscout/react-unicons';

const MessageHeader = ({ sender, isReciver, forewardedFrom, repliedTo, handlerreply }) => {
  // console.error(handlerreply)
  
  return (
    <div>
      {sender ? <p className="pb-3 text-blue-500">{sender}</p> : <></>}
      {forewardedFrom ? (
        <div
          dir="auto"
          className={`flex flex-row gap-1  ${
            isReciver ? 'justify-start' : 'justify-end'
          } text-opacity-80`}>
          <span className="font-semibold italic opacity-100">
            {/* <br /> */}
            {forewardedFrom}
          </span>
          <p>پیام هدایت شده</p>
          {/* <UilCornerUpRightAlt /> */}
        </div>
      ) : null}
      {repliedTo ? (
        <div
          onClick={handlerreply}
          dir="auto"
          className="line-clamp-1 cursor-pointer text-xs p-1 border-r-2 border-white bg-color3 bg-opacity-25 ">
          {repliedTo.text}
        </div>
      ) : null}
    </div>
  );
};

export default MessageHeader;
