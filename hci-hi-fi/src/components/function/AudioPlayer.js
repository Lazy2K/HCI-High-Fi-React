import FalconAudio from "./../../assets/sounds/falcontext.mp3";

import React, { useState, useEffect } from "react";

export default function Sound(audioFile) {
  const audio = new Audio(FalconAudio); // This is hardcoded rn bc
  audio.loop = false;

  const [isPaused, setIsPaused] = useState(false);

  const handlePlay = () => {
    audio.play();
    setIsPaused(false);
  };

  const handlePause = () => {
    audio.pause();
    setIsPaused(true);
  };

  const handleStop = () => {
    audio.pause();
    audio.currentTime = 0;
    setIsPaused(false);
  };

  return (
    <div>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}
