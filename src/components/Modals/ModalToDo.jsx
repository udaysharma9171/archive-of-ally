import React, { useState } from 'react';
import './Modals.css';

const ModalToDo = ({ onClose }) => {
  const [items, setItems] = useState([
    { id: 1, text: "The 'Meal & Deal' Ritual: Hum wapas jayenge aur wahi Honey Chilli Potato aur Cold Coffee order karenge...", done: false },
    { id: 2, text: "Aunty ke Momos: Wahi purani jagah, wahi taste, aur tumhara wahi khana khakar sar hilana...", done: false },
    { id: 3, text: "The Music & Game Marathon: Ek poora din jahan sirf hum honge, hamara favourite music hoga...", done: false },
    { id: 4, text: "'Jab We Met' Rewatch: Wahi movie jo humne saath dekhi thi, usse phir se dekhna hai...", done: false },
    { id: 5, text: "The Morning Chai: Is baar tapri se chai main launga, aur tum mere saath baith kar sukoon se peena...", done: false },
  ]);

  const toggleItem = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, done: !item.done } : item
    ));
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content todo-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2 className="modal-title">Our Unwritten Chapters</h2>
        <h4 className="modal-subtitle">Jab Hum Phir Milenge...</h4>
        <p className="todo-intro">
          Baby, ye wo list hai jo mere dimaag mein tabse chal rahi hai jabse tum gayi ho. 
          Maine in chizoon ko tabse 'pause' pe rakha hai kyunki tumhare bina inka koi matlab nahi hai.
        </p>
        <div className="todo-list">
          {items.map(item => (
            <div key={item.id} className={`todo-item ${item.done ? 'done' : ''}`} onClick={() => toggleItem(item.id)}>
              <div className="heart-checkbox">
                {item.done ? '❤️' : '♡'}
              </div>
              <span className="todo-text">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModalToDo;
