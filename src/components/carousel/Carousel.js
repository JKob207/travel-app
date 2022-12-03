import React from "react";
import Slider from "react-slick";
import TravelCard from "../travel-card/TravelCard";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import data from "../../travelData";

export default function Carousel({searchPlace})
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
const [filterOn, setFilterOn] = React.useState(false); 

  React.useEffect(() => {
    searchPlaceFunc(searchPlace);
  }, [searchPlace]);

  const searchPlaceFunc = (place) =>
  {
    if(place !== "")
    {
      setTravelData(() => {
        return data
        .filter(travel => {
          return travel.place === place
        })
        .map(travel => {
          return <TravelCard
              id={travel.id}
              key={travel.id}
              place={travel.place}
              country={travel.country}
              description={travel.description}
              imgSrc={travel.imgSrc}
          />
        });
      });
      setFilterOn(true);
    }else
    {
      setTravelData(() => {
        return data
        .map(travel => {
          return <TravelCard
              id={travel.id}
              key={travel.id}
              place={travel.place}
              country={travel.country}
              description={travel.description}
              imgSrc={travel.imgSrc}
          />
        });
      });
      setFilterOn(false);
    }
  }

  const carouselSettings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: filterOn ? 1 : 3,
      slidesToScroll: filterOn ? 1 : 3,
      initialSlide: 0,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: filterOn ? 1 : 3,
              slidesToScroll: filterOn ? 1 : 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: filterOn ? 1 : 2,
              slidesToScroll: filterOn ? 1 : 2,
              initialSlide: filterOn ? 1 : 2
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