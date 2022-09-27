import React from 'react';
import {GoogleLogout} from "react-google-login";

const Profile = ({userInfo, clientId, logOut}) => {



    return (
        <div>
            <img src={userInfo.imageUrl} alt="userImage" />
            <h3>User Logged in</h3>
            <p>Name: {userInfo.name}</p>
            <p>Email Address: {userInfo.email}</p>
            <br />
            <br />
            <GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut} />
        </div>
    );
};

export default Profile;
