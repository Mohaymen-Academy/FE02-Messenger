import React, { useRef } from 'react';
import Requests from '../API/Requests';

export default function UploadFile({ id, fileuploaded }) {
  const captionRef = useRef(null);
  function handleChange(event) {
    captionRef.current.value = event.target.value;
  }
  function sendMedia() {
    if (captionRef !== null) {
      Requests().sendFiles(id, { ...fileuploaded, text: captionRef.current.value });
    } else {
      Requests().sendFiles(id, fileuploaded);
    }
  }
  return (
    <div>
      <img
        src={`data:image/jpeg;base64,${fileuploaded}`}
        className="h-[250px] w-[250px] rounded-lg"
      />
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
