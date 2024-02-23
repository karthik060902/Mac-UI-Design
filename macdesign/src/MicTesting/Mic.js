// import React from 'react'
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// function Mic() {
//     const {transcript,listening,resetTranscript,browserSupportsSpeechRecognition } = useSpeechRecognition();

//       if (!browserSupportsSpeechRecognition) {
//         return <span>Browser doesn't support speech recognition.</span>;
//       }
//   return (
//     <div>
//       <div>Microphone: {listening ? 'on' : 'off'}</div>
//       <div><button onClick={SpeechRecognition.startListening}>Start</button></div>
//      <div> <button onClick={SpeechRecognition.stopListening}>Stop</button></div>
//      <div> <button onClick={resetTranscript}>Reset</button></div>
//      <div>{transcript}</div>
//     </div>
//   )
// }

// export default Mic;
import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


function Mic() {
  
    const { transcript,listening } = useSpeechRecognition();
    
  return (
    <div>
    <p>Microphone:{listening?"on":"off"}</p>
        <textarea value={transcript}></textarea>
        <button onClick={SpeechRecognition.startListening}>Start Listening</button>
      <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
      <p>{transcript}</p>
  
    </div>
  )
}

export default Mic

