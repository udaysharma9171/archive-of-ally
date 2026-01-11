import React, { useState, useRef, useEffect } from 'react';
import './AudioPlayer.css';
import backgroundMusic from './she_dont_give_a.mp3';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const audioSrc = backgroundMusic; 

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log("Audio play failed:", e));
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (audioRef.current) {
        audioRef.current.volume = 0.4;
    }
  }, []);

  return (
    <div className="audio-player-container">
      <audio ref={audioRef} src={audioSrc} loop />
      <button className="audio-toggle" onClick={togglePlay}>
        {isPlaying ? (
          <span role="img" aria-label="Pause">❚❚</span> 
        ) : (
          <span role="img" aria-label="Play">▶</span>
        )}
        <span className="audio-label">{isPlaying ? "Pause Music" : "Play Music"}</span>
      </button>
    </div>
  );
};

export default AudioPlayer;
