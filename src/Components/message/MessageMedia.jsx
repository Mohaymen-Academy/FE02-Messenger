import { Files } from '../LeftSideBar/ProfileParts';
import MessageVoice from './MessageVoice';
import { UilArrowCircleDown } from '@iconscout/react-unicons';
function MessageMedia({ src, handleClick }) {
  //  console.log(src)
  return (
    <>
      {src.contentType.startsWith('video') ? (
        <div className="w-full media-img" onClick={handleClick}>
          <video
            src={`data:video/mp4;base64,${src.preLoadingContent}`}
            poster="/images/play.png"
            className="cursor-pointer w-[200px] h-auto"
            autoPlay
          />
        </div>
      ) : src.contentType.startsWith('audio') ? (
        <MessageVoice />
      ) : src.contentType.startsWith('image') ? (
        <div
          className="flex flex-nowrap justify-center items-center rounded-md media-img"
          onClick={handleClick}>
          {src.goodquality ? null : <UilArrowCircleDown className={'absolute text-color4'} />}
          <img
            src={`data:image/jpeg;base64,${src.preLoadingContent}`}
            className="cursor-pointer w-[200px] h-[200px]"
          />
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
