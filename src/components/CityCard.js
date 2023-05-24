import React from 'react';
import getWeatherIcon from '../utils/getWeatherIcon';

const CityCard = ({ city }) => (
  <div key={city.id} className="city-card">
    <h2>{city.localizedName}</h2>
    {getWeatherIcon(city.weatherText)}
    <p>{city.temperatureValue} {city.temperatureUnit}</p>
  </div>
);

export default CityCard;
