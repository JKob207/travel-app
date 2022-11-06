import React from "react";
import Carousel from "../../components/carousel/Carousel";
import "./Main-page.scss";
import SEARCH_ICON from "./search.png";

export default function MainPage()
{
    return(
        <section className="main-page">
            <div className="main-page--search-bar">
                <input placeholder='Try "New York"' className="main-page--search-input" />
                <span className="search-icon"><img src={SEARCH_ICON} alt="search icon" /></span>
            </div>
            <div className="main-page--discover-section">
                <h2>Discover</h2>
                <div className="main-page--discover-slider">
                    <Carousel />
                </div>
            </div>
            <div className="main-page--destinations">
                <h2>Destinations</h2>
            </div>
        </section>
    );
}