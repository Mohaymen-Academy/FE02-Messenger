import { useEffect, useState } from 'react';
import { UilStepForward } from '@iconscout/react-unicons';
import Avatar from '../ChatComps/Avatar';
import Requests from '../../API/Requests';
import { useSelector, useDispatch } from 'react-redux';
import { ReplaceImage } from '../../features/SelectedInfo';
// const images = [
//   './images/profile.jpg',
//   './images/person.png',
//   './images/setting.png',
//   './images/profile.jpg'
// ];
function ImagePreviewer({ handleClose , imageId, chatId , massageId , imageshow }) {
  const [image, setImage] = useState([]);
  const dispatch = useDispatch();
  const info = useSelector((state) => state.selectedProf);
  console.log(info)
  const req = async() => {
    //if massagId is not in downloaded
    if(!info.downloaded.includes(massageId)){
      const res = await Requests().GetOriginalImage(imageId);
      console.log("nmn")
      setImage(res.content);
      dispatch(ReplaceImage({massageId :massageId, image :res.content}));
    }
    else
    {
      setImage(imageshow.preLoadingContent);
    }

  };
  useEffect( () => {
    req();
  }
  , []  )
  const [imagToShow, setImageToShow] = useState(imageId);
  return (
    <div className="absolute left-0 top-0 flex h-full w-full flex-col justify-center bg-black bg-opacity-60 text-white">
      <button onClick={handleClose}>close</button>
      <div className="flex h-2/3 w-full justify-between opacity-100">
        <button onClick={() => setImageToShow((perv) => (perv + 1) % images.length)}>
          <UilStepForward />
        </button>
        {/* {images.map((image, index) => ( */}
        <img
          src={`data:image/jpeg;base64,${image}`}
          className={`block object-cover opacity-100`}
          // key={index}
        />
        {/* ))} */}
        <button
          onClick={() => {
            setImageToShow((perv) => (perv - 1 + images.length) % images.length);
            console.log(imagToShow);
          }}>
          next
        </button>
      </div>
    </div>
  );
}

export default ImagePreviewer;
