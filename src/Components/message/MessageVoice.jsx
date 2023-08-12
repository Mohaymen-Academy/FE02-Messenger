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
    console.log(sliderValue);
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

  let buttonStateComponent;

  if (!mediaLoaded && !error) {
    buttonStateComponent = <div>loading...</div>;
  } else if (isPlaying && !error) {
    buttonStateComponent = <UilPause onClick={pause} />;
  } else if (!isPlaying && !error) {
    buttonStateComponent = <UilPlay onClick={play} />;
  } else {
    buttonStateComponent = <UilRedo onClick={loadAudioAgain} />;
  }
  return (
    <MessageBody id={id}>
      <div className="flex h-10 w-full items-center justify-between gap-3">
        <div className="rounded-full bg-blue-500 p-3 text-white">{buttonStateComponent}</div>
        <div className="relative flex h-4 w-full items-center">
          <span
            style={{
              width: sliderPlayedWidth
            }}
            className="absolute left-0 z-[2] h-1 rounded-sm rounded-r-none bg-blue-500"></span>
          <input
            type="range"
            min="1"
            max="100"
            value={sliderValue}
            onChange={inputChange}
            className="AudioSlider"
            style={{
              background: 'linear-gradiant(to right ,blue, blue ) no-repeat center',
              backgroundSize: `calc((var(--value, ${sliderValue}) / 100) * 100%) 100%`
            }}
          />
        </div>
      </div>
      <span className="ml-[2px] mr-2 inline-block min-w-[35px] text-sm">{duration}</span>
    </MessageBody>
  );
}

export default MessageVoice;
