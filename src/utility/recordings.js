export async function startRecording(setRecorderState) {
  console.log('fuck you');
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    setRecorderState((prevState) => ({
      ...prevState,
      initRecording: true,
      mediaStream: stream
    }));
  } catch (err) {
    console.log(err);
  }
}
export function saveRecording(recorder) {
  if (recorder.state !== 'inactive') recorder.stop();
}
