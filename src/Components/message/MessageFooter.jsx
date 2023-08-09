import React from 'react';
import { UilCheck } from '@iconscout/react-unicons';

function MessageFooter({ id, isSeen }) {
  return (
    <div className=" flex w-full items-end justify-between text-sm text-zinc-400">
      <p className="text-color3">23:00</p>
      <div className="text-bluetext1">
        {id === 'you' && isSeen ? (
          <div className="flex flex-row">
            <UilCheck className={'relative left-[-18px]'} />
            <UilCheck />
          </div>
        ) : (
          <UilCheck />
        )}
      </div>
    </div>
  );
}

export default MessageFooter;
