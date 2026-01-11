import React, { useState } from 'react';
import './Vault.css';
import Book from '../Book/Book';

const Vault = ({ onUnlock }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isUnlocking, setIsUnlocking] = useState(false);

  // Placeholder password: "ally" or "birthday"
  const CORRECT_PASSWORD = "ally";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.toLowerCase() === CORRECT_PASSWORD) {
      setIsUnlocking(true);
      // Wait for animation before notifying App
      setTimeout(() => {
        onUnlock();
      }, 1500); // 1.5s for unlock animation
    } else {
      setError(true);
      // Shake animation ref trigger
      setTimeout(() => setError(false), 500);
    }
  };

  return (
    <div className={`vault-container ${isUnlocking ? 'unlocking' : ''}`}>
      <div className="vault-header">
        <h1 className="vault-title">The Archive of Ally</h1>
        <span className="vault-subtitle">LIMITED EDITION</span>
      </div>

      <div className="bookshelf-blurred">
        <Book title="The Girl with the Kindest Soul" variant={1} style={{ pointerEvents: 'none' }} />
        <Book title="Our Unwritten Chapters" variant={2} style={{ pointerEvents: 'none' }} />
        <Book title="The Art of Loving You" variant={3} style={{ pointerEvents: 'none' }} />
      </div>

      <div className="password-section">
        <form onSubmit={handleSubmit} className="password-form">
          <input
            type="password"
            className={`password-input ${error ? 'error' : ''}`}
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
          />
          <button type="submit" className="unlock-btn">
            Unlock
          </button>
        </form>
      </div>
    </div>
  );
};

export default Vault;
