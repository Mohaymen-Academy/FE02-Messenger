import { UilCornerUpRightAlt } from '@iconscout/react-unicons';

const MessageHeader = ({ isReciver, forewardedFrom, repliedTo }) => (
  <div>
    {forewardedFrom ? (
      <div className={`flex  ${isReciver ? 'justify-start' : 'justify-end'} text-opacity-80`}>
        <span className="font-semibold italic opacity-100">{forewardedFrom}</span> message forwarded
        from
        <UilCornerUpRightAlt />
      </div>
    ) : null}
    {repliedTo ? (
      <div className="line-clamp-1 border-x border-white bg-color3  px-1  opacity-60">
        {repliedTo}
      </div>
    ) : null}
  </div>
);

export default MessageHeader;
