import React from "react";
import Carousel from "../../components/carousel/Carousel";
import "./Main-page.scss";
import SEARCH_ICON from "./search.png";
import MAP from "../../images/map-dotted.png";

export default function MainPage()
{
    const [searchedPlaceInput, setSearchedPlaceInput] = React.useState("");
    const [searchPlace, setSearchPlace] = React.useState("");
    const [isFilter, setIsFilter] = React.useState(false);
    

    const handleChangeSearch = (event) =>
    {
        setSearchedPlaceInput(event.target.value);
    }

    const handleSearchPlace = () =>
    {
        setSearchPlace(searchedPlaceInput);
    }

    const isFilterOn = (filter) =>
    {
        if(filter)
        {
            setIsFilter(true);
            return;
        }
        setIsFilter(false);
    }

    return(
        <section className="main-page">
            <div className="main-page--search-bar">
                <input
                    type="text" 
                    placeholder='Try "Paris"' 
                    className="main-page--search-input"
                    onChange={handleChangeSearch}
                    name="searchedPlaceInput"
                    value={searchedPlaceInput}
                />
                <span className="search-icon" onClick={handleSearchPlace}>
                    <img src={SEARCH_ICON} alt="search icon" />
                </span>
            </div>
            <div className="main-page--discover-section">
                <h2>
                    {
                      isFilter ? "Place founded" : "Discover"  
                    }
                </h2>
                <div className="main-page--discover-slider">
                    <Carousel searchPlace={searchPlace} isFilterOn={isFilterOn} />
                </div>
            </div>
            <div className="main-page--destinations">
                <h2>Destinations</h2>
                <img className="destinations-world-map" src={MAP} alt="World map" />
            </div>
        </section>
    );
}