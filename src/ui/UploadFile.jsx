import React, { useRef } from 'react';
import Requests from '../API/Requests';
import FilePreviewer from './FilePreviewer';
import { Files } from '../Components/LeftSideBar/ProfileParts';
import { useDispatch } from 'react-redux';
import { savemsgMedia } from '../features/SelectedInfo';
import MessageVoice from '../Components/message/MessageVoice'
export default function UploadFile({ id, fileuploaded, setIsModalOpen }) {
  const captionRef = useRef(null);
  function handleChange(event) {
    captionRef.current.value = event.target.value;
  }
  const dispatch = useDispatch();
  function sendMedia() {
    // Requests()
    //   .sendFiles(id, { ...fileuploaded, text: captionRef.current.value })
    //   .then((res) => console.error(res.data, fileuploaded))
    //   .catch((err) => console.error(err));

    dispatch(savemsgMedia({ id, fileuploaded, value: captionRef.current.value }));
    setIsModalOpen(false);
  }
  return (
    <div className="flex flex-col justify-center">
      {fileuploaded['media-type'].startsWith('image/') && (
        <img
          src={`data:image/jpeg;base64,${fileuploaded.content}`}
          className=" w-full rounded-lg place-content-center justify-center flex"
        />
      )}
      {fileuploaded['media-type'].startsWith('video/') && (
        <video
          src={`data:video/mp4;base64,${fileuploaded.content}`}
          className=" w-full rounded-lg place-content-center justify-center flex"
          autoPlay
          controls
        />
      )}
      {
        fileuploaded['media-type'].startsWith('audio') && (
          <MessageVoice />)
      }
      {fileuploaded['media-type'].startsWith('application/') ? (
        fileuploaded['media-type'].startsWith('application/pdf') ? (
          <embed
            src={`data:application/pdf;base64,${fileuploaded.content}`}
            type="application/pdf"
            width="100%"
            height="600px"
          />
        ) : (
          <Files file={fileuploaded} />
        )
      ) : (
        fileuploaded['media-type'].startsWith('text/') && <Files file={fileuploaded} />
      )}
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
