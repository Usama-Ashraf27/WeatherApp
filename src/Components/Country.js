import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StateSelector from './StateSelector';

function CountryDropdown() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data);
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
      });
  }, []);

  const handleCountryChange = event => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div>
      <h2>Select a country:</h2>
      <select value={selectedCountry} onChange={handleCountryChange}>
        <option value="">Select a country</option>
        {countries.map(country => (
          <option value={country.name.common}>
            {country.name.common}
          </option>
        ))}
      </select>
      {selectedCountry && (
        <div>
          <StateSelector selectedCountry={selectedCountry} />
        </div>
      )}
    </div>
  );
}

export default CountryDropdown;
