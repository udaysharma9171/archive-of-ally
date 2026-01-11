import React, { useMemo } from 'react';
import './DustMotes.css';

const DustMotes = () => {
  const motes = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 10}s`,
        animationDuration: `${10 + Math.random() * 20}s`,
        opacity: Math.random() * 0.5 + 0.1,
      },
    }));
  }, []);

  return (
    <div className="dust-container">
      {motes.map((mote) => (
        <div key={mote.id} className="dust-mote" style={mote.style} />
      ))}
    </div>
  );
};

export default DustMotes;
