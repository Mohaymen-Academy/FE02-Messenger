import { Files } from '../LeftSideBar/ProfileParts';
import { UilStepForward, UilArrowCircleDown } from '@iconscout/react-unicons';
function MessageMedia({ src, handleClick }) {
  return (
    <>
      {src.contentType.startsWith('video') ? (
        <div className="rounded-md media-img" onClick={handleClick}>
          <video
            src={`data:video/mp4;base64,${src.preLoadingContent}`}
            poster="/images/play.png"
            className="media"
            autoPlay
          />
        </div>
      ) : src.contentType.startsWith('audio') ? (
        <audio src={`data:audio/mpeg;base64,${src.preLoadingContent}`} className="media" controls />
      ) : src.contentType.startsWith('image') ? (
        <div
          className="flex flex-nowrap justify-center items-center rounded-md media-img"
          onClick={handleClick}>
          {/* {src.goodquality ? null : <UilArrowCircleDown className={'absolute text-color4'} />} */}
          <img src={`data:image/jpeg;base64,${src.preLoadingContent}`} className="w-[100%]" />
        </div>
      ) : (
        <div className="w-[100%] rounded-md">
          <Files
            file={src}
            filename={src.mediaName}
            size={src.contentSize}
            download={true}
            mediaID={src.mediaId}
          />
        </div>
      )}
    </>
  );
}

export default MessageMedia;
