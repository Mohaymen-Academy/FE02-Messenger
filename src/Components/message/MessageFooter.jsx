import { UilCheck } from '@iconscout/react-unicons';

function MessageFooter({ id, isSeen, Isforme, time, isEdited }) {
  const date = new Date(time);
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const extractedTime = `${hours}:${minutes}`;
  return (
    <div className=" flex w-full items-end justify-between text-sm text-zinc-400">
      <p className="text-text1">{extractedTime}</p>
      <div className="text-bluetext1 flex flex-row-reverse">
        {Isforme ? (
          isSeen ? (
            <div className="flex flex-row w-15">
              <UilCheck className={'relative left-[-18px]'} />
              <UilCheck />
            </div>
          ) : (
            <UilCheck />
          )
        ) : (
          <></>
        )}
        {isEdited ? 'ویرایش شده' : <></>}
      </div>
    </div>
  );
}

export default MessageFooter;
