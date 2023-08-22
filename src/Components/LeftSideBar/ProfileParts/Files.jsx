import React from 'react'
import { UilFileQuestion } from '@iconscout/react-unicons'
export default function Files({file , filename , size}) {
  const fileName = filename || file.fileName; // If filename is not provided, use the name from the file object
  const fileSize = size || file.size; // If size is not provided, use the size from the file object
  // Function to convert file size from string to MB
  const convertSizeToMB = (sizeStr) => {
    const sizeInMB = parseFloat(sizeStr) / 1024000; // Assuming the sizeStr is in KB
    return sizeInMB.toFixed(2); // Limit to 2 decimal places
  };

  return (
    <div className="flex flex-row gap-3 my-1 hover:opacity-70 w-[95%] rounded-lg">
      <div className="flex w-[60px] h-[60px] cursor-default text-center items-center text-text1 justify-center text-lg rounded-lg">
        <UilFileQuestion className="text-text1 w-14 h-14 mx-1" />
      </div>
      <div className="flex flex-col text-color3 text-sm mt-3">
        <a>
          <p className="text-text1 font-bold">{fileName}</p>
        </a>
        <a>
          <p>{convertSizeToMB(fileSize)} مگابایت</p> {/* Convert and display size in MB */}
        </a>
      </div>
    </div>
  );
}
