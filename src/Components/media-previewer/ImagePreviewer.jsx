import { useEffect, useState } from 'react';
import { UilStepForward } from '@iconscout/react-unicons';
import { useSelector, useDispatch } from 'react-redux';
import Avatar from '../ChatComps/Avatar';
import Requests from '../../API/Requests';
import { ReplaceImage } from '../../features/SelectedInfo';
import { GetSharedMedia, resetPreview, setPreview } from '../../features/SharedMediaSlice.js';

// const images = [
//   './images/profile.jpg',
//   './images/person.png',
//   './images/setting.png',
//   './images/profile.jpg'
// ];
function ImagePreviewer({  massageId, imageshow }) {
  console.log(massageId , imageshow)
  const [image, setImage] = useState([]);
  const dispatch = useDispatch();
  const info = useSelector((state) => state.selectedProf);
  console.log(info);
  const req = async () => {
    // if massagId is not in downloaded
    // if (!info.downloaded.includes(massageId)) {
      const res = await Requests().GetOriginalImage(imageshow.mediaId);
      console.log('nmn');
      setImage(res.content);
      dispatch(ReplaceImage({ massageId, image: res.content }));
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
    <div className="absolute left-0 top-0 flex h-full w-full flex-col justify-center bg-black bg-opacity-60 text-white">
      <button onClick={handleClose}>close</button>
      <div className="flex h-2/3 w-full justify-center opacity-100">
        {/* <button onClick={() => setImageToShow((perv) => (perv + 1) % images.length)}>
          <UilStepForward />
        </button> */}
        {/* {images.map((image, index) => ( */}
        <img
          src={`data:image/jpeg;base64,${image}`}
          className={'block object-cover opacity-100'}
          // key={index}
        />
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
