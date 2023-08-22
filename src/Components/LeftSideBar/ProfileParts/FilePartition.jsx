import React from 'react';
import { useSelector } from 'react-redux';
import { GetSharedMedia, setPreview , resetPreview } from '../../../features/SharedMediaSlice.js';
import Files from './Files.jsx';
import { useDispatch } from 'react-redux';
export default function FilePartition() {
  const files = useSelector((state) => state.SharedMedia.files)
  const info = useSelector((state) => state.selectedProf);
  console.log(files)

  return (
    <div className="flex flex-row flex-wrap pr-2 pt-2">
      {files.map((file) => (
        <Files file={file} filename={file.media.mediaName} size={file.media.contentSize} download={true} mediaID = {file.media.mediaId}/>
      ))}
    </div>
  );
}
