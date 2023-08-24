import React, { useState } from 'react';
import WeatherDisplay from './WeatherDisplay';

const CitySelector = ({ state }) => {
  const [selectedCity, setSelectedCity] = useState('');
  const [showweather, setshowweather] = useState(false);
  const cityData = {
    'Punjab': ['Sialkot', 'Lahore'],
    'Sindh': ['Karachi', 'Okara'],
    'New York': ['New York City', 'Buffalo'],
    'California': ['Los Angeles', 'San Francisco'],
    'Texas': ['Houston', 'Dallas'],
}

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
    setshowweather(true)
  };

  return (
    <div>
      <h2>Select a City</h2>
      <select value={selectedCity} onChange={handleCityChange}>
        <option value="">Select City</option>
        {cityData[state].map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      {showweather && <WeatherDisplay city={selectedCity} />}
    </div>
  );
};

export default CitySelector;
