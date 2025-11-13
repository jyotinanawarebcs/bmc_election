import React from 'react';
import profileImg from '../../assets/profile.webp';

const PersonaCard = () => (
  <div className="persona-card">
    <img src={profileImg} alt="Rohan Patil" className="avatar" />
    <h2>Rohan Patil</h2>
    <p className="subtitle">The Aspirational Millennial</p>
  </div>
);

export default PersonaCard;
