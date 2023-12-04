// HarvestingPage.js

import React, { useState } from 'react';
import './HarvestingPage.scss';

const HarvestingPage = ({ onAddHarvest }) => {
  const [harvestDate, setHarvestDate] = useState('');
  const [harvestTime, setHarvestTime] = useState('');

  const handleAddHarvest = () => {
    const newHarvest = {
      harvestDate,
      harvestTime,
    };

    onAddHarvest(newHarvest);

    setHarvestDate('');
    setHarvestTime('');
  };

  return (
    <div className="harvesting-container">
      <h1>Harvesting</h1>
      <div className="input-container">
        <label>
          Harvest Date:
          <input
            type="date"
            value={harvestDate}
            onChange={(e) => setHarvestDate(e.target.value)}
            className="custom-input"
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Harvest Time:
          <input
            type="time"
            value={harvestTime}
            onChange={(e) => setHarvestTime(e.target.value)}
            className="custom-input"
          />
        </label>
      </div>
      <button onClick={handleAddHarvest} className="custom-button">
        Add Harvest
      </button>
    </div>
  );
};

export default HarvestingPage;
