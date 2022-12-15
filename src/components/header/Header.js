import React from "react";
import "./Header.scss";
import LOGO from "./Travel_app_logo.png";
import PROFILE_PICTURE from "./profile-picture.png";

export default function Header(props)
{
    const styles = {
        backgroundColor: props.colorfulStyle ? "#F6AE2D" : "transparent" 
    }

    return(
        <header className="header" style={styles}>
            <div className="header--logo">
                <img src={LOGO} alt="Travel app logo" />
            </div>
            {
                props.colorfulStyle &&
                <div className="header--profile">
                    <span className="header--profile--user-welcome">Hi, User</span>
                    <img className="header--profile--icon" src={PROFILE_PICTURE} alt="Profile picture" />
                </div>
            }
        </header>
    );
}