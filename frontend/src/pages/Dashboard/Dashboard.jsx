import React, { useState, useEffect } from 'react';
//import SquareDisplay from '../../components/SquareDisplay/SquareDisplay';
import UserDisplay from '../../components/UserDisplay/UserDisplay';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import PhoneDisplay from '../../components/PhoneDisplay/PhoneDisplay';
import "./style.css";

const getProfileData = async (req, res) => {
    const baseURL = "http://localhost:5501/profile";
    try {
        const userData = await fetch(baseURL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (userData.ok) {
            console.log(userData);
            const userObject = await userData.json();
            console.log('User data received successfully\n', userObject);
            return userObject;

        } else {
            console.log("user data unable to be fetched");
            return null;
        }
    } catch (err) {
        console.log(err);
        return null;
    }
}

const getPossibleMatches = async (req, res) => {
    const baseURL = "http://localhost:5501/dashboard";
    try {
        const possibleMatches = await fetch(baseURL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (possibleMatches.ok) {
            const matchesObject = await possibleMatches.json();
            console.log("Possible matches:", matchesObject);
            return matchesObject;
        }
    } catch (err) {
        console.log(err);
        return null;
    }
}

export default function MainPage() {
    const [userData, setUserData] = useState(null);
    const [possibleMatchData, setPossibleMatchData] = useState(null);
    const [profilePicture, setProfilePicture] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getProfileData();
            const matchData = await getPossibleMatches();
            const new_profilepic = data?.profilePic[0];
            setProfilePicture(new_profilepic);
            setUserData(data);
            setPossibleMatchData(matchData);
            console.log("possibled matches check:", possibleMatchData);
        };
        fetchData();
    }, []);

    return (
        <div className="main-page">
            <div className="overlap-wrapper">
                <div className="overlap">
                    <div className="profilepic-box-dashboard">
                        <img className="profilepic-dashboard" alt={`${userData?.username}'s picture`} src={profilePicture || "https://c.animaapp.com/I2nDhD6p/img/ellipse-7@2x.png"} />
                    </div>
                    <div className="sidebar-dashboard">
                        <Sidebar possibleMatches={possibleMatchData}/>
                    </div>
                    <UserDisplay userData={userData} />
                </div>
            </div>
        </div>
    );
};
