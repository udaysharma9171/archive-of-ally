import React from 'react';
import './Modals.css';

const ModalVideo = ({ onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content video-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2 className="modal-title" style={{ color: '#fff', marginBottom: '1rem' }}>The Art of Loving You</h2>
        <div className="video-wrapper">
            {/* Placeholder video - replace with actual assets later */}
            <div className="video-placeholder">
                <span style={{ fontSize: '3rem', margin: '1rem' }}>▶</span>
                <p>Video Content Placeholder</p>
                <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>(Add your video file here)</p>
            </div>
            {/* 
            <video controls autoPlay className="main-video">
                <source src="/path/to/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            */}
        </div>
      </div>
    </div>
  );
};

export default ModalVideo;
