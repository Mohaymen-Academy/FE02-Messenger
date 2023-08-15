import React from 'react';

function MessageBody({ Isforme, children }) {
  return (
    <div
      className={`relative my-3 max-w-[60%] justify-end text-start bg-gradient-to-r ${
        Isforme
          ? ' after: rounded-lg rounded-tr-none bg-bgmymassage after:absolute  after:-right-4 after:top-[0%] after:w-0 after:border-r-[20px] after:border-t-[20px] after:border-x-transparent after:border-t-bgmymassage'
          : 'rounded-lg rounded-tl-none bg-bgyoumassage after:absolute after:right-full after:top-[0%] after:w-0 after:border-l-[20px] after:border-t-[20px] after:border-x-transparent after:border-t-bgyoumassage'
      } p-2 text-text1 `}>
      {children}
    </div>
  );
}

export default MessageBody;
