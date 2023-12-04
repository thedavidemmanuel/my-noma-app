// FarmingActivitiesPage.js

import React, { useState } from 'react';
import './FarmingActivitiesPage.scss';

const FarmingActivitiesPage = ({ onAddActivity }) => {
  const [activityName, setActivityName] = useState('');

  const handleAddActivity = () => {
    const newActivity = {
      activityName,
    };

    onAddActivity(newActivity);

    setActivityName('');
  };

  return (
    <div className="farming-activities-container">
      <h1>Farming Activities</h1>
      <div className="input-container">
        <label>
          Activity Name:
          <input
            type="text"
            value={activityName}
            onChange={(e) => setActivityName(e.target.value)}
            className="custom-input"
          />
        </label>
      </div>
      <button onClick={handleAddActivity} className="custom-button">
        Add Activity
      </button>
    </div>
  );
};

export default FarmingActivitiesPage;
