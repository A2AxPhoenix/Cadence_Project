// AudienceSelection.jsx
import React, { useState } from 'react';
import './style.css'; // Update with the correct path to your CSS file

const AudienceSelection = () => {
  const [selectedAudience, setSelectedAudience] = useState('');

  const handleSelectAudience = (audience) => {
    setSelectedAudience(audience);
    // Additional logic for when an audience is selected
  };

  return (
    <div className="audience-selection-container">
      <button
        className={`audience-button ${selectedAudience === 'men' ? 'selected' : ''}`}
        onClick={() => handleSelectAudience('men')}
      >
        Men
      </button>
      <button
        className={`audience-button ${selectedAudience === 'women' ? 'selected' : ''}`}
        onClick={() => handleSelectAudience('women')}
      >
        Women
      </button>
      <button
        className={`audience-button ${selectedAudience === 'everyone' ? 'selected' : ''}`}
        onClick={() => handleSelectAudience('everyone')}
      >
        Everyone
      </button>
    </div>
  );
};

export default AudienceSelection;
