import { UilPause, UilMessage } from '@iconscout/react-unicons';
import { useState } from 'react';
import Requests from '../../API/Requests';

function VoiceControl({ id, recorderState, handlers }) {
  const { recordingMinutes, recordingSeconds, initRecording } = recorderState;
  const { startRecording, sendRecording, cancelRecording, saveRecording } = handlers;
  const [media, setmedia] = useState({});
  console.log(media);
  return (
    <div className="flex h-auto max-h-[50px] w-[90%] flex-row text-white bg-blue-500 rounded-full justify-between">
      <div>
        {initRecording ? (
          <button
            title="Save recording"
            disabled={recordingSeconds === 0}
            onClick={() => saveRecording()}>
            <UilMessage />
          </button>
        ) : (
          <button title="Start recording" onClick={startRecording}>
            start
          </button>
        )}
      </div>
      <div>
        <span>{recordingMinutes}</span>
        <span>:</span>
        <span>{recordingSeconds}</span>
      </div>
      <div>
        {initRecording && (
          <button onClick={saveRecording}>
            <UilPause />
          </button>
        )}
      </div>
    </div>
  );
}

export default VoiceControl;
