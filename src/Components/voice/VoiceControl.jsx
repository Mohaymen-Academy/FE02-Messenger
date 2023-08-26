import { UilMessage, UilTimes } from '@iconscout/react-unicons';

function VoiceControl({ recorderState, handlers }) {
  const { recordingMinutes, recordingSeconds, initRecording } = recorderState;
  const { startRecording, saveRecording, cancelRecording } = handlers;
  return (
    <div className="flex h-auto max-h-[50px] w-[90%] flex-row rounded-full justify-between bg-color1 items-center py-2 px-1">
      <div>
        {initRecording ? (
          <button title="Save recording" disabled={recordingSeconds === 0} onClick={saveRecording}>
            <UilMessage />
          </button>
        ) : (
          <></>
        )}
      </div>

      <div>
        <span>{recordingMinutes}</span>
        <span>:</span>
        <span>{recordingSeconds}</span>
      </div>

      <div>
        {initRecording && (
          <button onClick={cancelRecording}>
            <UilTimes />
          </button>
        )}
      </div>
    </div>
  );
}

export default VoiceControl;
