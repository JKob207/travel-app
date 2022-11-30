import React from "react";
import "./TravelCard.scss";
import photo from "./test.png"
import ReactModal from "react-modal";

export default function TravelCard(props)
{
    const [showModal, setShowModal] = React.useState(false);
    const [visitedPlace, setVisitedPlace] = React.useState(false);

    const handleVisitClick = () => {
       setVisitedPlace((prev) => {
        return !prev;
       });
    };

    return(
        <div className="travel-card">
            <img className="card--image" src={require("../../images/"+props.imgSrc)} />
            <div className="card--desc">
                <h3 className="card--place">
                    {props.place}
                </h3>
                <h4 className="card--country">
                    {props.country}
                </h4>
            </div>
            <button className="card--view-more-btn" onClick={() => setShowModal(true)}>
                Discover Now
            </button>
            <ReactModal
                isOpen={showModal}
                contentLabel="modal"
                ariaHideApp={showModal}
                className="card--modal"
            >
                <img className="modal--img" src={require("../../images/"+props.imgSrc)}/>
                <h3 className="modal-place">
                    {props.place}
                </h3>
                <h4 className="modal--country">
                    {props.country}
                </h4>
                <p className="modal--description">
                    {props.description}
                </p>
                <button className="modal--visited" 
                    style={visitedPlace ? {backgroundColor: "#808000"} : {}}
                    onClick={handleVisitClick}>
                    {
                        visitedPlace ? "Place visited" : "Add to visited"
                    }
                </button>
                <button className="modal--close-btn" onClick={() => setShowModal(false)}>
                    X
                </button>
            </ReactModal>
        </div>
    )
}