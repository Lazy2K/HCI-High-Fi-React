import FalconAudio from "./../../assets/sounds/chaffinch_speach.mp3";
import playIcon from "./../../assets/icons/Play.png";
import pauseIcon from "./../../assets/icons/Pause.png";
import stopIcon from "./../../assets/icons/Stop.png";

import React, { useState, useEffect } from "react";

import "./style/AudioPlayer.css";

export default function Sound(props) {
  const audio = new Audio(FalconAudio); // This is hardcoded rn bc
  audio.loop = false;

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    audio.play();
  };

  const handlePause = () => {
    audio.pause();
  };

  const handleStop = () => {
    audio.pause();
    audio.currentTime = 0;
  };

  return (
    <div style={props.style} className="audioPlayer">
      <button onClick={handlePlay}>
        <img src={playIcon} alt="Play" />
      </button>
      <button onClick={handlePause}>
        <img src={pauseIcon} alt="Pause" />
      </button>
      <button onClick={handleStop}>
        <img src={stopIcon} alt="Stop" />
      </button>
    </div>
  );
}
