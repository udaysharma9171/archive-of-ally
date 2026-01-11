import React, { useState, useRef } from 'react';
import './Modals.css';
import videoSrc from '../../assets/video_rap.mp4'; // Importing the moved video

const ModalVideo = ({ onClose }) => {
  const [step, setStep] = useState('letter'); // 'letter' or 'video'
  const [isCrumpled, setIsCrumpled] = useState(true);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Letter Reveal Handler
  const handlePaperClick = () => {
    if (isCrumpled) {
      setIsCrumpled(false);
    }
  };

  // Video Controls
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const skipTime = (seconds) => {
    if (videoRef.current) {
      videoRef.current.currentTime += seconds;
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className={`modal-content video-modal-container ${step === 'letter' ? 'letter-mode' : 'video-mode'}`} 
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>&times;</button>

        {step === 'letter' && (
          <div className={`wrapped-letter-container ${isCrumpled ? 'crumpled' : 'open'}`} onClick={handlePaperClick}>
            <div className="fold-crease"></div>
            {isCrumpled ? (
              <div className="crumpled-text">
                <span className="scramble-hint">Click to Unwrap</span>
              </div>
            ) : (
              <div className="revealed-content">
                <h3 className="rap-intro-title">My Comfortable Chaos</h3>
                <div className="rap-letter-body">
                  <p>
                    Babiy aap toh janti ho ki I am into Rap from the start, aur wahi mera comfort zone bhi hai. 
                    Par aaj tumhara din hai, aur mujhe pata hai ki tumhe Melody aur Singing zyada pasand hai. 
                    Isliye maine socha ki agar main tumhare liye kuch khaas bana raha hoon, toh wo tumhare taste ka hona chahiye, mera nahi.
                  </p>
                  <p>
                    Toh maine koshish ki hai pehli baar song write and sing krne ki. 
                    I know, meri awaaz thodi cringy lag sakti hai aur obv mei singer nahi hoon jitna bada main rapper hoon (haha!) 
                    but I just wanted to do this for you my love.
                  </p>
                  <p className="final-note">
                     So aap meri besuri awaaz ko ignore karna and Enjoy this &lt;3
                  </p>
                </div>
                <button className="continue-btn" onClick={() => setStep('video')}>
                  Watch Performance &rarr;
                </button>
              </div>
            )}
          </div>
        )}

        {step === 'video' && (
          <div className="custom-video-player">
            <h2 className="now-playing-title">The Art of Loving You</h2>
            <div className="video-frame">
              <video 
                ref={videoRef} 
                src={videoSrc} 
                className="main-video-element"
                onEnded={() => setIsPlaying(false)}
                onClick={togglePlay}
              />
              <div className="video-controls">
                <button onClick={() => skipTime(-10)} className="control-btn" title="-10s">
                  ⏪ 10s
                </button>
                <button onClick={togglePlay} className="control-btn play-btn">
                  {isPlaying ? '❚❚' : '▶'}
                </button>
                <button onClick={() => skipTime(10)} className="control-btn" title="+10s">
                  10s ⏩
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ModalVideo;
