import React, { useState, useEffect } from 'react';
import CitySelector from './CitySelector';
import axios from 'axios';



const StateSelector = ({ selectedCountry }) => {
  const [selectedState, setSelectedState] = useState('selectedState');
  const [stateList, setStateList] = useState([]);
  const [showcity, setShowcity] = useState(false);

  // Replace this with real state data for each country
  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.post('https://countriesnow.space/api/v0.1/countries/states', { country: selectedCountry });
        setStateList(response.data.data.states);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchData();
  }, [selectedCountry]);

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setShowcity(true);
  };

  return (
    <div>
      <h2>Select a State</h2>
      <select value={selectedState} onChange={handleStateChange}>
        <option value="">Select State</option>
        {stateList.map(state => (
          <option value={state.name}>
            {state.name}
          </option>
        ))}
      </select>
      {showcity && <CitySelector state={selectedState} />}
    </div>
  );
};

export default StateSelector;
