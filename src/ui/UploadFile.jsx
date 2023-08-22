import React, { useRef } from 'react';
import Requests from '../API/Requests';
import FilePreviewer from './FilePreviewer';
import { Files } from '../Components/LeftSideBar/ProfileParts';
export default function UploadFile({ id, fileuploaded }) {
  const captionRef = useRef(null);
  function handleChange(event) {
    captionRef.current.value = event.target.value;
  }
  console.log(fileuploaded)
  function sendMedia() {
    if (captionRef !== null) {
      Requests().sendFiles(id, { ...fileuploaded, text: captionRef.current.value });
    } else {
      Requests().sendFiles(id, fileuploaded);
    }
  }
  return (
    <div className='flex flex-col justify-center'>
      {
      fileuploaded["media-type"].startsWith('image/') && (
          <img
             src={`data:image/jpeg;base64,${fileuploaded.content}`}
             className=" w-full rounded-lg place-content-center justify-center flex"
           />
        )
      }
      {
      fileuploaded["media-type"].startsWith('application/') && (
        fileuploaded["media-type"].startsWith('application/pdf') ? (
          <embed
              src={`data:application/pdf;base64,${fileuploaded.content}`}
              type="application/pdf"
              width="100%"
              height="600px"
            />)
            :
            <Files file={fileuploaded} />
        )
      }
      {/* <FilePreviewer file={fileuploaded} /> */}
      <label htmlFor="fileCaption" className="mt-3 block text-sm font-medium text-text1">
        توضیحات
      </label>
      <input
        type="text"
        id="fileCaption"
        ref={captionRef}
        className="input-div"
        onChange={handleChange}
      />
      <button
        onClick={sendMedia}
        className="w-full rounded-md bg-[rgb(0,132,105)] px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-[#7fc2cf] focus:bg-[#135461] focus:outline-none">
        فرستادن
      </button>
    </div>
  );
}
