// App.js
import React, { useState } from 'react';
import axios from 'axios';

export const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cities, setCities] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8081/topCities/search?query=${searchTerm}`);
      setCities(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>City Weather Explorer</h1>
      <div>
        <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
      </div>
      <ul>
        {cities.map(city => (
          <li key={city.id}>
            {city.localizedName} - {city.temperatureValue} {city.temperatureUnit} - {city.weatherText}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
