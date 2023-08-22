import React from 'react';
import { UilFileQuestion } from '@iconscout/react-unicons';
import Requests from '../../../API/Requests';

export default function Files({ file, filename, size, download, mediaID }) {
  const fileName = filename || file.fileName;
  const fileSize = size || file.size;

  const convertSizeToMB = (sizeStr) => {
    const sizeInMB = parseFloat(sizeStr) / 1024000;
    return sizeInMB.toFixed(2);
  };

  const handleClick = () => {
    if (download) {
      Requests().GetOriginalImage(mediaID).then((res) => {
        console.log(res);

        const linkSource = `data:application/pdf;base64,${res.content}`;
        const downloadLink = document.createElement("a");
        const fileName = res.mediaName;
    
        downloadLink.href = linkSource;
        downloadLink.download = fileName;
        downloadLink.click();
    
      });
    }
  };

  return (
    <div
      className="flex flex-row gap-3 my-1 hover:opacity-70 w-[95%] rounded-lg hover:cursor-pointer"
      onClick={() => handleClick()}
    >
      <div className="flex w-[60px] h-[60px] cursor-default text-center items-center text-text1 justify-center text-lg rounded-lg">
        <UilFileQuestion className="text-text1 w-14 h-14 mx-1" />
      </div>
      <div className="flex flex-col text-color3 text-sm mt-3">
        <a>
          <p className="text-text1 font-bold">{fileName}</p>
        </a>
        <a>
          <p>{convertSizeToMB(fileSize)} مگابایت</p>
        </a>
      </div>
    </div>
  );
}
