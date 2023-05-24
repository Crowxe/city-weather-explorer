import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CityCard from './CityCard';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const CityCarousel = ({ cities }) => (
  <Carousel 
    responsive={responsive}
    centerMode={true}
    infinite={true}
    autoPlay={false}
    containerClass="carousel-container"
    itemClass="carousel-item-padding-40-px"
    removeArrowOnDeviceType={["tablet", "mobile"]}
  >
    {cities.map(city => (
      <CityCard key={city.id} city={city} />
    ))}
  </Carousel>
);

export default CityCarousel;
