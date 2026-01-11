import React, { useState, useEffect } from 'react';
import './Library.css';
import Book from '../Book/Book';
// Modals will be imported here later
import ModalLetter from '../Modals/ModalLetter';
import ModalToDo from '../Modals/ModalToDo';
import ModalVideo from '../Modals/ModalVideo';

const Library = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Parallax Effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleBookClick = (id) => {
    setActiveModal(id);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="library-container">
      <div 
        className="bookshelf"
        style={{
          transform: `perspective(1000px) rotateX(${mousePos.y * 0.5}deg) rotateY(${mousePos.x * 0.5}deg)`
        }}
      >
        <Book 
          title="The Girl with the Kindest Soul" 
          variant={1} 
          onClick={() => handleBookClick('letter')} 
          style={{ transform: `translateZ(${Math.abs(mousePos.x) * 2}px)` }}
        />
        <Book 
          title="Our Unwritten Chapters" 
          variant={2} 
          onClick={() => handleBookClick('todo')}
          style={{ transform: `translateZ(${Math.abs(mousePos.y) * 2}px)` }} 
        />
        <Book 
          title="The Art of Loving You" 
          variant={3} 
          onClick={() => handleBookClick('video')}
          style={{ transform: `translateZ(${Math.abs(mousePos.x) * 2}px)` }} 
        />
      </div>

      {activeModal === 'letter' && <ModalLetter onClose={closeModal} />}
      {activeModal === 'todo' && <ModalToDo onClose={closeModal} />}
      {activeModal === 'video' && <ModalVideo onClose={closeModal} />}
    </div>
  );
};

export default Library;
