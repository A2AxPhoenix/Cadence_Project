import './style.css'; 
import React, { useState, useEffect } from 'react';

const Sidebar = ({ possibleMatches }) => {
    const users = possibleMatches && possibleMatches.matchedUsers ? possibleMatches.matchedUsers : [];
    //const users = possibleMatches; 
    console.log("users in sidebar:", users);
    console.log("user0:", users[0]);
    const defaultImage = "uploads/default.jpeg"; 

    return (
        <div className="sidebar">
            {users.map((user, index) => (
                <div key={index} className="user">
                    <img src={(user.profilePic && user.profilePic.length > 0) ? user.profilePic[0] : defaultImage} alt={user.name || "User"} className="avatar" />
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
