import React from 'react';

export default function ShowEmoji({ text, textwithemoji }) {
  let emoji, type;
  if (text == '') {
    emoji = textwithemoji.split(';')[0];
    type = textwithemoji.split(';')[1];
    // console.error(textwithemoji);
  }
  return (
    <>
      {text != '' ? (
        text
      ) : (
        <div className="flex flex-row gap-1">
          <div
            dangerouslySetInnerHTML={{
              __html: `${emoji};`
            }}
          />
          {type}
        </div>
      )}{' '}
    </>
  );
}
