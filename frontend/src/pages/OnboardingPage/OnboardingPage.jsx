import React, { useState } from 'react';
import "./style.css";
import GenderSelection from "../../components/Gender/GenderSelection";
import AudienceSelection from '../../components/ShowMe/showme';
import GenresPopup from '../../components/Genres/GenresPopup';
import ProfilePictureUploader from '../../components/ProfilePictureUploader/ProfilePictureUploader';
import NavigateToLandingButton from '../../components/NavToLanding/NavToLanding';
import { useNavigate } from 'react-router-dom';

export default function OnboardingPage () {
  const navigate = useNavigate();

  // Function to handle the navigation
  const navigateToDashboard = () => {
    navigate('/dashboard'); // The '/dashboard' is the path you want to navigate to
  };
  const [images, setImages] = useState([null, null, null]); // for three placeholders
  const [selectedImage, setSelectedImage] = useState(null);
  const [someValue, setSomeValue] = useState(''); // Initialize it with an empty string or any default value

  const handlePictureSelected = (file, index) => {
    const fileUrl = URL.createObjectURL(file);
    setImages(images.map((img, i) => (i === index ? fileUrl : img)));
  };

  

  // Your handleInputChange function (if needed)
  const handleInputChange = (event) => {
    setSomeValue(event.target.value);

  };
  const handleGenderSelect = (gender) => {
    console.log('Selected gender:', gender);
    // You can handle the selected gender here, such as setting state or making API calls
    setIsPopupVisible(false);
  };
  const handleAudienceSelect = (audience) => {
    console.log(audience); // Or update the state, etc.
  };
  const handleGenresSelect = (selectedGenres) => {
    console.log('Selected genres:', selectedGenres);
    // Do something with the selected genres
    handleClosePopup(); // Call the function to close the popup
  };
  const genresList = ['Pop', 'Rock', 'Jazz', 'Blues', 'Hip-Hop', 'Country', 'EDM', 'Classical', 'Reggae', 'R&B', 'Punk', 'Metal', 'Alternative', 'Soul', 'Indie Rock'];

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const onClose = () => {
    // Logic to close the popup, typically setting a state variable
    setIsPopupVisible(false);
  };
  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };
  return (
    <div className="registration">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
        
         
          
          <div className="box"></div>         
    <img className="vector" alt="Vector" src="OnboardingSVG.svg" />
          <img className="img" alt="Vector" src="OnboardingSVG2.svg" />
          <div className="show-me-title">Show me</div>
          <AudienceSelection onSelect={handleAudienceSelect} />
         
          

          
          <div className="music-genres-title">Music Genres</div>
          <button className="genres-button" onClick={() => setIsPopupVisible(true)}>+ Genres</button>
          {isPopupVisible && (
      <GenresPopup
        className="genres-button"
        genres={genresList}
        onSelect={handleGenresSelect}
        onClose={() => setIsPopupVisible(false)}
      />
    )}
           
          
          
          <div className="gender-title">Gender</div>
          <GenderSelection className="gender-selection" onSelect={handleGenderSelect} />
          
          <div className="top-half-box" />
          <div className="profile-picture">Profile Pictures</div>
          <div className="birthday-text-box">
          <input
          type="text"
          id="YearInput"
          className="YearTextBox"
          placeholder="YYYY"
          name="Year"
          style={{
            width: '90px', // Set the width as desired
            height: '35px', // Set the height as desired
            padding: '10px', // Set the padding as desired
            fontSize: '16px' // Set the font size as desired
          }}
  // ...other props like value, onChange
          />
          </div>
          <div className="birthday-text-box-MM">
          <input
          type="text"
          id="MonthInput"
          className="MonthTextBox"
          placeholder="MM"
          name="Month"
          style={{
            width: '90px', // Set the width as desired
            height: '35px', // Set the height as desired
            padding: '10px', // Set the padding as desired
            fontSize: '16px' // Set the font size as desired
          }}
  // ...other props like value, onChange
          />
          </div>
          <div className="birthday-text-box-DD">
          <input
          type="text"
          id="DayInput"
          className="DayTextBox"
          placeholder="DD"
          name="Day"
          style={{
            width: '90px', // Set the width as desired
            height: '35px', // Set the height as desired
            padding: '10px', // Set the padding as desired
            fontSize: '16px' // Set the font size as desired
          }}
  // ...other props like value, onChange
          />          
          </div>
          <div className="birthday-title">Birthday</div>
          <div className="email-address-text">
          <input
          type="text"
          id="email"
          className="text-wrapper"
          placeholder="Email Address"
          name="email"
  // ...other props like value, onChange
          />
          </div>
          <div className="email-address-title">Email Address</div>
          <div className="first-name-text-box">
          
          <input
          type="text"
          id="firstName"
          className="text-wrapper"
          placeholder="First Name"
          name="firstName"
  // ...other props like value, onChange
          />


          </div>
          <div className="cadence-title">cadence</div>
          <img className="cadence-logo" alt="Cadence logo" src="untitled-1-recovered-1@2x.png" />
          <img className="vector-2" alt="Vector" src="OnboardingSVG2.svg" />
          <div className="create-button" onClick={navigateToDashboard}>
      Create Account
    </div>
<div className="first-name-title">First Name</div>
         

          
          
    <div className="first-name-title">First Name</div>
          
    <div style={{ position: 'absolute', left: '799px', top: '195px' }}>
    </div>

    <div style={{ position: 'absolute', left: '949px', top: '195px' }}>
    </div>

    <div style={{ position: 'absolute', left: '1099px', top: '195px' }}>
    </div>
     
      {selectedImage && <img src={selectedImage} alt="Selected Profile" />}

      {images.map((image, index) => (
  <div key={index} style={{ position: 'absolute', left: `${799 + 150 * index}px`, top: '195px' }}>
    <ProfilePictureUploader 
      onPictureSelected={(file) => handlePictureSelected(file, index)}
      uploadedImageUrl={image} 
      index={index} // Pass index here
    />
  </div>
))}

    </div>
     </div>
    </div>
  );
};
