import React from 'react';
import LinkPreview from '../media-previewer/LinkPreview';
export default function Links() {
  return (
    <div
    className='h-[80%] flex flex-col gap-2 pt-3 overflow-y-scroll'>
      <LinkPreview></LinkPreview>
      <LinkPreview></LinkPreview>
      <LinkPreview></LinkPreview>
      <LinkPreview></LinkPreview>
      <LinkPreview></LinkPreview>
      <LinkPreview></LinkPreview>
      <LinkPreview></LinkPreview>
      <LinkPreview></LinkPreview>
    </div>
  );
}
