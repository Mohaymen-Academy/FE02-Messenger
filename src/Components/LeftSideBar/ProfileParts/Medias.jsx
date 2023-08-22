import React from 'react';
import { useSelector } from 'react-redux';

export default function Medias() {
  const medias = useSelector((state) => state.SharedMedia.images)
  console.log(medias)

  return (
    <div className="flex flex-row flex-wrap pr-2 pt-2">
      {medias.map((media) => (
        <div
          className='m-0.5 flex w-[32%] items-center justify-center rounded-sm bg-color2 '
          key={media.media.midiaId}
        >
          <img
            src={`data:image/jpeg;base64,${media.media.content}`}
            className='aspect-[1/1] h-full w-full rounded-sm object-cover hover:opacity-70 '
          />
        </div>
      ))}
    </div>
  );
}
