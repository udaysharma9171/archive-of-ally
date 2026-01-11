import React, { useState } from 'react';
import './App.css';
import DustMotes from './components/Background/DustMotes';
import AudioPlayer from './components/AudioPlayer/AudioPlayer';
import Vault from './components/Vault/Vault';
import Library from './components/Library/Library';

function App() {
  const [isLocked, setIsLocked] = useState(true);

  return (
    <div className="app-container">
      <DustMotes />
      <AudioPlayer />
      
      <main className="main-content">
        {isLocked ? (
          <Vault onUnlock={() => setIsLocked(false)} />
        ) : (
          <Library />
        )}
      </main>

      <footer className="footer-signature">
        Property of UDAY sharma — For your eyes only my ally
      </footer>
    </div>
  );
}

export default App;
