import React from 'react';
import { useSelector } from 'react-redux';
import { GetSharedMedia, setPreview , resetPreview } from '../../../features/SharedMediaSlice.js';

import { useDispatch } from 'react-redux';
export default function Medias() {
  const images = useSelector((state) => state.SharedMedia.images)
  const info = useSelector((state) => state.selectedProf);

  // console.log(images)
  const dispatch = useDispatch()

  const handleClick = (image) =>
  {
    console.log(image)
    dispatch(setPreview({ open: true, media: image.media, messageID: image.messageID }))
  }
  function getImage(media) {
    console.log("getImage", media)
    const img = info.downloaded.find((item) => item.id === media.messageID);
    if (img) {
      return img.image;
    } else {
      return (media.media.preLoadingContent)
    }
  }
  return (
    <div className="flex flex-row flex-wrap pr-2 pt-2">
      {images.map((image) => (
        <div
          className='m-0.5 flex w-[32%] items-center justify-center rounded-sm bg-color2 '
          key={image.media.midiaId}
          onClick={() => handleClick(image)}
          >
          <img
            src={`data:image/jpeg;base64,${getImage(image)}`}
            className='aspect-[1/1] h-full w-full rounded-sm object-cover hover:opacity-70 '
          />
        </div>
      ))}
    </div>
  );
}
