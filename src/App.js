import React, { useState, useEffect } from 'react';
import { fetchCities } from './services/cityService';
import CityCarousel from './components/CityCarousel';
import './App.css'

const App = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const getCities = async () => {
      const citiesData = await fetchCities();
      setCities(citiesData);
    };

    getCities();
  }, []);

  return (
    <div className="app">
      <h1>Top 150 Cities</h1>
      <CityCarousel cities={cities} />
    </div>
  );
};

export default App;
