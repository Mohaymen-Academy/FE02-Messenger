function VoiceControl({ recorderState, handlers }) {
  const { recordingMinutes, recordingSeconds, initRecording } = recorderState;
  const { startRecording, saveRecording, cancelRecording } = handlers;
  return (
    <div>
      <div>
        <span>{recordingMinutes}</span>
        <span>:</span>
        <span>{recordingSeconds}</span>
      </div>
      <div>{initRecording && <button onClick={cancelRecording}>pause</button>}</div>
      <div>
        {initRecording ? (
          <button title="Save recording" disabled={recordingSeconds === 0} onClick={saveRecording}>
            send
          </button>
        ) : (
          <button title="Start recording" onClick={startRecording}>
            start
          </button>
        )}
      </div>
    </div>
  );
}

export default VoiceControl;
