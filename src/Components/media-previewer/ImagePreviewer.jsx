import { useEffect, useState } from 'react';
import { UilStepForward } from '@iconscout/react-unicons';
import { useSelector, useDispatch } from 'react-redux';
import Avatar from '../ChatComps/Avatar';
import Requests from '../../API/Requests';
import { ReplaceImage } from '../../features/SelectedInfo';
import { GetSharedMedia, resetPreview, setPreview } from '../../features/SharedMediaSlice.js';
import { UilTimes } from '@iconscout/react-unicons';
function ImagePreviewer({ massageId, imageshow }) {
  const [image, setImage] = useState([]);
  const dispatch = useDispatch();
  const info = useSelector((state) => state.selectedProf);
  const req = async () => {
    // if massagId is not in downloaded -- downledded is an array of {id , image}
    const img = info.downloaded.find((item) => item.id === massageId);
    if (img) {
      setImage(img.image);
      dispatch(ReplaceImage({ massageId, image: img.image }));
    } else {
      const res = await Requests().GetOriginalImage(imageshow.mediaId);
      setImage(res.content);
      dispatch(ReplaceImage({ massageId, image: res.content }));
    }

    // if massagId is not in downloaded
    // if (!info.downloaded.includes(massageId)) {
    //   const res = await Requests().GetOriginalImage(imageshow.mediaId);
    //   console.log('nmn');
    //   setImage(res.content);
    //   dispatch(ReplaceImage({ massageId, image: res.content }));
    // } else {
    //   setImage(imageshow.preLoadingContent);
    // }
  };
  const handleClose = () => {
    dispatch(resetPreview());
  };
  useEffect(() => {
    req();
  }, []);
  // const [imagToShow, setImageToShow] = useState(imageId);
  return (
    <div className="absolute z-20 left-0 top-0 flex h-full w-full flex-col bg-black bg-opacity-60 text-white">
      <div className="flex w-full justify-between items-center px-2 py-3 opacity-100 bg-black">
        <button onClick={handleClose}>
          <UilTimes />
        </button>
      </div>

      <div className="flex h-2/3 w-full justify-center opacity-100">
        {/* <button onClick={() => setImageToShow((perv) => (perv + 1) % images.length)}>
          <UilStepForward />
        </button> */}
        {/* {images.map((image, index) => ( */}
        {imageshow.contentType.startsWith('image') && (
          <img
            src={`data:image/jpeg;base64,${image}`}
            className={'block object-contain opacity-100 max-w-full'}
            // key={index}
          />
        )}
        {imageshow.contentType.startsWith('video') && (
          <video
            src={`data:video/mp4;base64,${image}`}
            className={'block object-cover opacity-100'}
            autoPlay
            controls
          />
        )}
        {/* ))} */}
        {/* <button
          onClick={() => {
            setImageToShow((perv) => (perv - 1 + images.length) % images.length);
            console.log(imagToShow);
          }}>
          next
        </button> */}
      </div>
    </div>
  );
}

export default ImagePreviewer;
