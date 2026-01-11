import React from 'react';
import './Book.css';

const Book = ({ title, variant = 1, onClick, style }) => {
  // Variations for book spine colors/textures
  const getBookColor = (v) => {
    switch(v) {
      case 1: return '#2C3E50'; // Dark Blue-ish
      case 2: return '#5D4037'; // Brown
      case 3: return '#3E2723'; // Darker Brown
      default: return '#1A2F23';
    }
  };

  return (
    <div className="book-container" onClick={onClick} style={style}>
      <div className="book">
        <div className="book-cover" style={{ backgroundColor: getBookColor(variant) }}>
            <div className="book-spine-decor"></div>
            <div className="book-title-container">
               <h3 className="book-title">{title}</h3>
            </div>
        </div>
        <div className="book-pages"></div>
        <div className="book-back"></div>
      </div>
    </div>
  );
};

export default Book;
