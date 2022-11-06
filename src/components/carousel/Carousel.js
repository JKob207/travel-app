import React from "react";
import Slider from "react-slick";
import TravelCard from "../travel-card/TravelCard";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import data from "../../travelData";

export default function Carousel()
{
    const [travelData, setTravelData] = React.useState(
        data.map(travel => {
            return <TravelCard
                id={travel.id}
                key={travel.id}
                place={travel.place}
                country={travel.country}
                description={travel.description}
                imgSrc={travel.imgSrc}
            />
        })
    ); 

    const carouselSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    }

    return(
        <div>
        <Slider {...carouselSettings}>
            {travelData}
        </Slider>
      </div>
    );
}