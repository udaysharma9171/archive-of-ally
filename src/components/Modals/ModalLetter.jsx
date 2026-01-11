import React from 'react';
import './Modals.css';

const ModalLetter = ({ onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content letter-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <div className="parchment-texture">
          <h2 className="letter-heading">My Ally,</h2>
          <div className="letter-body">
            <p>
              <span className="drop-cap">F</span>inally aapka birthday aayaaaaaaaaa.
            </p>
            <p>
              Pata hai, log kehte hain ki duniya bahut matlabi hai, par shayad wo kabhi tumse nahi mile. Maine aaj tak tumse zyada hardworking aur selfless ladki nahi dekhi. Tumhara har decision, har soch hamesha is baate pe shuru hoti hai ki kisi aur ka nuksan na ho chahe wo aunty ji ho, ya main.
            </p>
            <p>
              Pta babu the way you show your love is umbeatable yrr, mujhe bht acha lgti tha jb hum sath they Mere uthne se pehle hi tumhara tapri wale uncle se wo chai lekar aana... sirf isliye kyunki tumhe pata tha ki uthte hi mera gala dard karega. Tumhare saath wo sukoon hai jo duniya ki kisi aur cheez mein nahi hai. Aur wo jo tum khana khakar apna sar left-to-right hilati ho na? bhyiii theeeee cutest gesture hai .Main ghanto baith kar tumhe bas wo karte hue dekh sakta hoon.
            </p>
            <p>
              Tum sirf ek partner nahi ho, tum meri best friend aur gamer bhi ho aur meri favourite person bhi. Mujhe pata hai pichla saal mushkil tha aur main tumhare birthday par kuch nhi kiya jo tum deserve karti thi, par is saal main tumhe batana chahta hoon ki tum mere liye kya maayne rakhti ho.
            </p>
            <p>
              Tumhari kindness, tumhara har kisi ki parvah karna, aur wo choti-choti baatein jo sirf main notice karta hoon—yehi sab tumhein sabse alag banata hai. Main bas us din ka intezar kar raha hoon jab hum wapas saath honge, wahi music sessions honge, wahi games honge aur wahi purani yaadein fir se jee uthengi.
            </p>
            <p>
              Tum jaisi ho, bas waisi hi rehna. Kyunki 'The Archive of Ally' mein har chapter sirf tumhari khubsurti aur tumhare bade dil se bhara hai.
            </p>
            <p className="signature">
              Happy Birthday, my hardworking and cutest girl!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalLetter;
