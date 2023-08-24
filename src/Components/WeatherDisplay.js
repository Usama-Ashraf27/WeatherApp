import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherDisplay = ({ city }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const API_KEY = '66af054ddeef1665f008cc07cbaf66f1';
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
  axios.get(API_URL)
      .then((response) => {
        setWeather(response.data);
      })
} catch (error) {
   console.error('Error fetching weather data:', error);
}
    
  }, [city]);

  return (
    <div>
      <h2>Weather Information</h2>
      {weather ? (
        <>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Feels Like: {weather.main.feels_like}°C</p>
          <p>Description: {weather.weather[0].description}</p>
        </>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default WeatherDisplay;
