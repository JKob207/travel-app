import React from "react";
import "./Header.scss";
import LOGO from "./Travel_app_logo.png"

export default function Header()
{
    return(
        <header className="header">
            <div className="header--logo">
                <img src={LOGO} alt="Travel app logo" />
            </div>
            <div className="header--profile">

            </div>
        </header>
    );
}