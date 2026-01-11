import React, { useState, useRef, useEffect } from 'react';
import './AudioPlayer.css';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Placeholder audio - royalty free Kevin MacLeod or similar recommended
  // For now using a sample lofi track URL or empty
  const audioSrc = "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112778.mp3"; 

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
