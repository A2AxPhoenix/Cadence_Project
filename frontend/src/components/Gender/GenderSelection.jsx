import React, { useState } from 'react';
import './style.css'; // Ensure this path is correct for your CSS file

const GenderSelection = () => {
  const [selectedGender, setSelectedGender] = useState('');
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  // Introduced a new state to explicitly track if a 'More' gender was selected
  const [moreGenderSelected, setMoreGenderSelected] = useState(false);

  const handleSelectGender = (gender) => {
    setSelectedGender(gender);
    // Close the dropdown if any gender is selected
    setShowMoreOptions(false);

    if (gender === 'More') {
      // Toggle dropdown without changing selected gender unless closing
      setShowMoreOptions(current => !current);
      if (!showMoreOptions) {
        // Do not unset selectedGender here to keep 'More' active
        setMoreGenderSelected(false); // Reset when opening the dropdown
      }
    } else {
      // For any selection from the 'More' dropdown, keep 'More' highlighted
      setMoreGenderSelected(gender !== 'Man' && gender !== 'Woman');
    }
  };

  const moreGenders = ['Non-binary', 'Transgender', 'Genderqueer', 'Other'];

  return (
    <div className="gender-selection-container">
      <button
        className={`gender-button ${selectedGender === 'Man' && !moreGenderSelected ? 'selected' : ''}`}
        onClick={() => handleSelectGender('Man')}
      >
        Man
      </button>
      <button
        className={`gender-button ${selectedGender === 'Woman' && !moreGenderSelected ? 'selected' : ''}`}
        onClick={() => handleSelectGender('Woman')}
      >
        Woman
      </button>
      <button
        className={`gender-button ${moreGenderSelected || showMoreOptions ? 'selected' : ''}`}
        onClick={() => handleSelectGender('More')}
      >
        More
      </button>

      {showMoreOptions && (
        <ul className="more-genders-dropdown">
          {moreGenders.map((gender) => (
            <li
              key={gender}
              className={`dropdown-item ${selectedGender === gender ? 'selected' : ''}`}
              onClick={() => handleSelectGender(gender)}
            >
              {gender}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GenderSelection;
