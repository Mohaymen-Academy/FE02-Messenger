function VoiceControl({ recorderState, startRecording, sendRecording, cancelRecording }) {
  const { recordingMinutes, recordingSeconds, initRecording } = recorderState;
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
          <button
            className="start-button"
            title="Save recording"
            disabled={recordingSeconds === 0}
            onClick={sendRecording}>
            send
          </button>
        ) : (
          <button className="start-button" title="Start recording" onClick={startRecording}>
            start
          </button>
        )}
      </div>
    </div>
  );
}

export default VoiceControl;
