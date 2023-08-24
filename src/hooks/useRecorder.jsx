import { useState, useEffect } from 'react';
import { startRecording, saveRecording } from '../utility/recordings';
import Requests from '../API/Requests';

const initialState = {
  recordingMinutes: 0,
  recordingSeconds: 0,
  initRecording: false,
  mediaStream: null,
  mediaRecorder: null,
  audio: null
};

export default function useRecorder(id) {
  const [recorderState, setRecorderState] = useState(initialState);

  useEffect(() => {
    const MAX_RECORDER_TIME = 5;
    let recordingInterval = null;
    console.log('hello');
    if (recorderState.initRecording) {
      recordingInterval = setInterval(() => {
        setRecorderState((prevState) => {
          if (
            prevState.recordingMinutes === MAX_RECORDER_TIME &&
            prevState.recordingSeconds === 0
          ) {
            clearInterval(recordingInterval);
            return prevState;
          }

          if (prevState.recordingSeconds >= 0 && prevState.recordingSeconds < 59) {
            return {
              ...prevState,
              recordingSeconds: prevState.recordingSeconds + 1
            };
          }

          if (prevState.recordingSeconds === 59) {
            return {
              ...prevState,
              recordingMinutes: prevState.recordingMinutes + 1,
              recordingSeconds: 0
            };
          }
        });
      }, 1000);
    } else clearInterval(recordingInterval);

    return () => clearInterval(recordingInterval);
  });

  useEffect(() => {
    if (recorderState.mediaStream) {
      setRecorderState((prevState) => ({
        ...prevState,
        mediaRecorder: new MediaRecorder(prevState.mediaStream)
      }));
    }
  }, [recorderState.mediaStream]);

  useEffect(() => {
    const recorder = recorderState.mediaRecorder;
    let chunks = [];

    if (recorder && recorder.state === 'inactive') {
      recorder.start();

      recorder.ondataavailable = (e) => {
        chunks.push(e.data);
      };

      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'audio/ogg; codecs=opus' });
        chunks = [];

        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          const audioBase64 = reader.result.split(',')[1];
          Requests().sendFiles(id, {
            content: audioBase64,
            text: '',
            'media-type': 'audio/ogg',
            fileName: 'the Audio',
            size: 0
          });
        };
        setRecorderState((prevState) => {
          if (prevState.mediaRecorder) {
            return {
              ...initialState,
              audio: window.URL.createObjectURL(blob)
            };
          }
          return initialState;
        });
      };
    }

    return () => {
      if (recorder) recorder.stream.getAudioTracks().forEach((track) => track.stop());
    };
  }, [recorderState.mediaRecorder]);

  return {
    recorderState,
    startRecording: () => startRecording(setRecorderState),
    cancelRecording: () => setRecorderState(initialState),
    saveRecording: () => saveRecording(recorderState.mediaRecorder)
  };
}
