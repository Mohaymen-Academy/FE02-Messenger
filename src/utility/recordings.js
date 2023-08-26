export async function startRecording(setRecorderState) {
  console.log('hi');
  try {
    console.log('hi');
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    console.log('try');
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
