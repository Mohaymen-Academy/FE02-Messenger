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
export function saveRecording(recorder, blob) {
  if (recorder.state !== 'inactive') recorder.stop();
  const reader = new FileReader();
  reader.readAsDataURL(blob);
  reader.onloadend = () => {
    const audioBase64 = reader.result.split(',')[1];
    // call the api here
    const body = {};
  };
}
