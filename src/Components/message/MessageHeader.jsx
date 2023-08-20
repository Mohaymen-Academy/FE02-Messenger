import { UilCornerUpRightAlt } from '@iconscout/react-unicons';

const MessageHeader = ({ isReciver, forewardedFrom, repliedTo }) => (
  <div>
    {forewardedFrom ? (
      <div className={`flex  ${isReciver ? 'justify-start' : 'justify-end'} text-opacity-80`}>
        <span className="font-semibold italic opacity-100">{forewardedFrom}</span> پیام هدایت شده از
        طرف
        <UilCornerUpRightAlt />
      </div>
    ) : null}
    {repliedTo ? (
      <div dir="auto" className="line-clamp-1 text-xs p-1 border-r-2 border-white bg-color3 bg-opacity-25 ">
        {repliedTo}
      </div>
    ) : null}
  </div>
);

export default MessageHeader;
