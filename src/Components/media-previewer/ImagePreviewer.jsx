import { useState } from 'react';
import { UilStepForward } from '@iconscout/react-unicons';
import Avatar from '../ChatComps/Avatar';

const images = [
  './images/profile.jpg',
  './images/person.png',
  './images/setting.png',
  './images/profile.jpg'
];
function ImagePreviewer({ handleClose }) {
  const [imagToShow, setImageToShow] = useState(0);

  return (
    <div className="absolute left-0 top-0 flex h-full w-full flex-col justify-center bg-black bg-opacity-60 text-white">
      <button onClick={handleClose}>close</button>
      <div className="flex h-2/3 w-full justify-between opacity-100">
        <button onClick={() => setImageToShow((perv) => (perv + 1) % images.length)}>
          <UilStepForward />
        </button>
        {images.map((image, index) => (
          <img
            src={image}
            className={`${imagToShow === index ? 'block' : 'hidden'} object-cover opacity-100`}
            key={index}
          />
        ))}
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
