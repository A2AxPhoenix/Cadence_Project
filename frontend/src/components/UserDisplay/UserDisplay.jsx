import React, { useState, useEffect } from 'react';
import Controls from '../Controls/Controls'; 
import './style.css'; // Make sure to create a MusicCard.css file for your styles

import "./style.css";
import NextSVGButton from '../../components/NextPicture/NextPicture';
import PrevSVGButton from '../../components/PrevPicture/PrevPicture';
import { useNavigate } from 'react-router-dom';


export default function SquareDisplay({ userData }) {
    const [similarUsers, setSimilarUsers] = useState([]);
    const [currentUserIndex, setCurrentUserIndex] = useState(0);
    const [currentPictures, setCurrentPictures] = useState([]);
    const [currentPictureIndex, setCurrentPictureIndex] = useState(0);
    const [isShaking, setIsShaking] = useState(false);
    const navigate = useNavigate();

    // Effect to handle updates based on userData
    useEffect(() => {
        if (userData && userData.similarUsers) {
            setSimilarUsers(userData.similarUsers);
            // any other initialization based on userData
        }
    }, [userData]);

    useEffect(() => {
        if (similarUsers[currentUserIndex]) {
            const user = similarUsers[currentUserIndex];
            const userPictures = user.profilePic || default_pictures; // Assuming profilePic is an array of picture URLs
            setCurrentPictures(userPictures);
            setCurrentPictureIndex(0); // Reset picture index to show the first picture of the new user
        }
    }, [currentUserIndex, similarUsers]);

    // Conditional rendering logic or additional effects here
    if (!userData || !userData.similarUsers) {
        return null; // or return null;
    }

    console.log("similarUsers:", similarUsers);

    const default_pictures = [
        'https://c.animaapp.com/I2nDhD6p/img/rectangle-17.png',
        'https://c.animaapp.com/I2nDhD6p/img/ellipse-8@2x.png',
        'https://c.animaapp.com/I2nDhD6p/img/ellipse-10@2x.png',
    ];

    const handleNextUser = () => {
        console.log("Next button clicked!");
        console.log("currentUser:", similarUsers[currentUserIndex], "Index:", currentUserIndex);
        if (currentUserIndex < similarUsers.length - 1) {
            setCurrentUserIndex(currentUserIndex + 1);
        }
    };

    const handlePrevUser = () => {
        console.log("Prev button clicked!");
        console.log("currentUser:", similarUsers[currentUserIndex], "Index:", currentUserIndex);
        if (currentUserIndex > 0) {
            setCurrentUserIndex(currentUserIndex - 1);
        }
    };

    console.log("profilePic:", userData?.proflePic)
    const pictures = userData?.profilePic || default_pictures;

    const handleClick = (event) => {
        const { clientX, currentTarget } = event;
        const { left, width } = currentTarget.getBoundingClientRect();
        const half = width / 2;
        const isLeftSide = clientX - left < half;

        if ((isLeftSide && currentPictureIndex === 0) || (!isLeftSide && currentPictureIndex === pictures.length - 1)) {
            triggerShake();
            return; // Prevent navigation if it's an invalid direction
        }

        if (isLeftSide) {
            handlePrevButtonClick();
        } else {
            handleNextButtonClick();
        }
    };

    const triggerShake = () => {
        setIsShaking(true);
        setTimeout(() => {
            setIsShaking(false);
        }, 500); // Ensure this matches the duration of the animation
    };

    const handlePrevButtonClick = (event) => {
        if (currentPictureIndex > 0) {
            setCurrentPictureIndex(currentPictureIndex - 1);
        }
    };

    const handleNextButtonClick = (event) => {
        if (currentPictureIndex < pictures.length - 1) {
            setCurrentPictureIndex(currentPictureIndex + 1);
        }
    };

    const handleHeartButtonClick = async (event) => {
        const likedUserId = similarUsers[currentUserIndex].username;
        console.log("likedUserId:", likedUserId);

        const url = '/dashboard';
        const payload = {
            otherUserUsername: likedUserId, // Ensure this is a string and not an object
            likedUser: true,
        };

        console.log("Payload:", payload);

        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                console.log("Liked user!");
            } else {
                const errorMsg = await response.text();
                console.error("Failed to create account", errorMsg);
            }
        } catch (error) {
            console.error("Error making the PUT request:", error);
        }
    };

    const handleEditInfoClick = () => {
        navigate('/profile/edit');
        console.log("Navigating to Edit Info");
    };


    return (
        <div className="userdisplay">
            <div className="userdiplay-wrapper">
                <div className="userdisplay-overlap">
                    <div className="userdisplay-group">
                        <div className='ProfileViewBackground'>
                            <div className='NameBackGround'></div>
                            <div className='text-wrapper'>{similarUsers[currentUserIndex]?.username || "Matthew"}, {similarUsers[currentUserIndex]?.age || "32"}</div>
                            <img className="ProfilePicture1" alt="Profile" src={currentPictures[currentPictureIndex]} />
                            {currentPictureIndex > 0 && (
                                <button className="prev-button" onClick={handlePrevButtonClick} aria-label="Previous">
                                    <PrevSVGButton />
                                </button>
                            )}
                            {currentPictureIndex < pictures.length - 1 && (
                                <button className="next-button" onClick={handleNextButtonClick} aria-label="Next">
                                    <NextSVGButton />
                                </button>
                            )}
                            <div className="controls">
                                <Controls onNextUser={handleNextUser} onPrevUser={handlePrevUser} onHeartUser={handleHeartButtonClick} />
                            </div>
                        </div>
                        <div className="PhoneFrame">
                            <div className="PhoneBackGround">
                                <button className="edit-info-button" onClick={handleEditInfoClick}>
                                    Edit Info
                                </button>
                            </div>
                            <div className="frame">
                                <div className="BioFrame">
                                    <div className="BioBackGround" />
                                    <div className="BioTitle">About me</div>
                                    <p className="Bio">
                                        Passionate about music—every genre speaks to me. From Beethoven to The Beatles, my soul dances to
                                        every beat and melody. Life&#39;s better with tunes.
                                    </p>
                                </div>
                                <div className="GenreBox">
                                    <div className="GenreTitle">Favorite Genres</div>
                                    <div className="Genre1Outline">
                                        <div className="Genre1">Rock</div>
                                    </div>
                                    <div className="Genre2Outline">
                                        <div className="Genre2">Pop</div>
                                    </div>
                                    <div className="Genre3Outline">
                                        <div className="Genre3">Reggae</div>
                                    </div>
                                    <div className="Genre4Outline">
                                        <div className="Genre4">Hip-hop</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

