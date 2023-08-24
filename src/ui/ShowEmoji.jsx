import React from 'react';

export default function ShowEmoji({ textwithemoji }) {
  const emoji = textwithemoji.split(';')[0];
  const type = textwithemoji.split(';')[1];
  return (
    <>
      <div className="flex flex-row gap-1">
        <div
          dangerouslySetInnerHTML={{
            __html: `${emoji};`
          }}
        />
        {type}
      </div>
    </>
  );
}
