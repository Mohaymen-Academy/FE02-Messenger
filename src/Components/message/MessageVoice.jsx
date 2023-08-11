import { useEffect, useRef, useState } from 'react';
import { UilPlay, UilRedo, UilPause, UilImport } from '@iconscout/react-unicons';
import MessageBody from './MessageBody.jsx';

function MessageVoice({ audioUrl, id, audioID, animState }) {
  const [error, setError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mediaLoaded, setMediaLoaded] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [metadataLoaded, setMetadataLoaded] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const [sliderPlayedWidth, setSliderPlayedWidth] = useState('0%');
  const [duration, setDuration] = useState('');
  const totalDuration = useRef('');
  const audio = useRef(new Audio(audioUrl));
  const interval = useRef();
  const uploading = useRef(audioUrl === 'uploading');

  function getCurrentTime() {
    // Calculate the time left and the total duration
    let currentMinutes = Math.floor(audio.current.currentTime / 60);
    let currentSeconds = Math.floor(audio.current.currentTime - currentMinutes * 60);

    // Add a zero to the single digit time values
    if (currentSeconds < 10) {
      currentSeconds = `0${currentSeconds}`;
    }
    if (currentMinutes < 10) {
      currentMinutes = `0${currentMinutes}`;
    }

    // Display the updated duration
    return `${currentMinutes}:${currentSeconds}`;
  }

  function seekUpdate() {
    let seekPosition = 0;
    // Check if the current track duration is a legible number
    if (!Number.isNaN(audio.current.duration)) {
      seekPosition = audio.current.currentTime * (100 / audio.current.duration);
      setSliderValue(seekPosition);
      setSliderPlayedWidth(`${seekPosition}%`);
      setDuration(getCurrentTime());
    }
  }
  function play() {
    audio.current.play();
    interval.current = setInterval(seekUpdate, 50);
    setIsPlaying(true);
  }

  function pause() {
    audio.current.pause();
    clearInterval(interval.current);
    setIsPlaying(false);
    setDuration(totalDuration.current);
  }

  function inputChange(e) {
    const { value } = e.target;
    if (mediaLoaded) {
      const seekto = audio.current.duration * (value / 100);
      audio.current.currentTime = seekto;
      setSliderValue(value);
      setSliderPlayedWidth(`${value - 5.7 * (value / 100)}%`);
    }
  }

  function loadAudioAgain() {
    audio.current.load();
    setError(false);
  }

  function calculateMediaDuration(media) {
    return new Promise((resolve) => {
      media.onloadedmetadata = function () {
        // set the mediaElement.currentTime  to a high value beyond its real duration
        media.currentTime = Number.MAX_SAFE_INTEGER;
        // listen to time position change
        media.ontimeupdate = function () {
          media.ontimeupdate = function () {};
          // setting player currentTime back to 0 can be buggy too, set it first to .1 sec
          media.currentTime = 0.1;
          media.currentTime = 0;
          // media.duration should now have its correct value, return it...
          resolve(media.duration);
        };
      };
    });
  }

  useEffect(() => {
    if (uploading.current === true && audioUrl !== 'uploading') {
      audio.current = new Audio(audioUrl);
      audio.current.load();
      setLoaded(true);
    } else if (uploading.current === false) {
      setLoaded(true);
    }
  }, [audioUrl]);

  useEffect(() => {
    if (loaded) {
      audio.current.addEventListener('error', () => {
        setError(true);
      });
      calculateMediaDuration(audio.current).then(() => {
        setMetadataLoaded(true);
      });
    }
  }, [loaded]);

  useEffect(() => {
    if (metadataLoaded) {
      audio.current.addEventListener('canplaythrough', async () => {
        if (totalDuration.current === '') {
          setMediaLoaded(true);
          let durationMinutes = Math.floor(audio.current.duration / 60);
          let durationSeconds = Math.floor(audio.current.duration - durationMinutes * 60);
          // Add a zero to the single digit time values
          if (durationSeconds < 10) {
            durationSeconds = `0${durationSeconds}`;
          }
          if (durationMinutes < 10) {
            durationMinutes = `0${durationMinutes}`;
          }
          // Display the updated duration
          totalDuration.current = `${durationMinutes}:${durationSeconds}`;
          setDuration(totalDuration.current);
        }
      });
      audio.current.addEventListener('ended', () => {
        clearInterval(interval.current);
        setDuration(totalDuration.current);
        setSliderValue(0);
        setSliderPlayedWidth('0%');
        setIsPlaying(false);
      });
    }
  }, [metadataLoaded]);

  useEffect(() => {
    if (audioID !== id) {
      audio.current.pause();
      setIsPlaying(false);
    }
  }, [audioID]);
  return (
    <MessageBody id={id}>
      <div className="flex h-10 w-full items-center justify-between">
        {!mediaLoaded && !error ? (
          <svg
            aria-hidden="true"
            className="mr-2 inline h-6 w-6 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        ) : isPlaying && !error ? (
          <UilPause className="pause" onClick={pause} />
        ) : !isPlaying && !error ? (
          <UilPlay onClick={play} />
        ) : (
          <UilImport onClick={loadAudioAgain} />
        )}
        <div className="relative flex h-4 items-center">
          <span
            style={{
              width: sliderPlayedWidth
            }}
            className="absolute left-0 z-[2] h-1 rounded-sm rounded-r-none bg-neutral-800"></span>
          <input
            type="range"
            min="1"
            max="100"
            value={sliderValue}
            onChange={inputChange}
            className="AudioSlider"
          />
        </div>
      </div>
      <span className="ml-[2px] mr-2 inline-block min-w-[35px] text-sm">{duration}</span>
    </MessageBody>
  );
}

export default MessageVoice;
