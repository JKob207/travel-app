import React from "react";
import "./TravelCard.scss";
import photo from "./test.png"

export default function TravelCard(props)
{
    return(
        <div className="travel-card">
            <img className="card--image" src={photo} />
            <div className="card--desc">
                <h3 className="card--place">
                    {props.place}
                </h3>
                <h4 className="card--country">
                    {props.country}
                </h4>
            </div>
            <button className="card--view-more-btn">
                Discover Now
            </button>
        </div>
    )
}