import React from 'react';
import LinkPreview from '../../media-previewer/LinkPreview';
export default function Links() {
  return (
    <div
    className='flex flex-col pt-3 overflow-y-scroll'>
      <LinkPreview></LinkPreview>
      <LinkPreview></LinkPreview>
      <LinkPreview></LinkPreview>

    </div>
  );
}
