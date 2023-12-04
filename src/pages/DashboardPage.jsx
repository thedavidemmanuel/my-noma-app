// DashboardPage.js

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import FieldComponent from '../components/farm/FieldComponent';
import CropsAndFieldsPage from './CropsAndFieldsPage';
import FarmingActivitiesPage from './FarmingActivitiesPage';
import ReportsPage from './ReportsPage';
import '../assets/styles/dashboard.scss';
import HarvestingPage from './HarvestingPage';

const DashboardPage = () => {
  const [fields, setFields] = useState([]);
  const [activities, setActivities] = useState([]);
  const [activeSection, setActiveSection] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from Firebase or other sources
    // setIsLoading and setError as appropriate
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/signin');
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  const handleSectionToggle = (section) => {
    setActiveSection((prevSection) => (prevSection === section ? null : section));
  };

  const handleAddCropAndField = (newCropAndField) => {
    setFields((prevFields) => [...prevFields, newCropAndField]);
  };
  

  const handleAddActivity = (newActivity) => {
    setActivities((prevActivities) => [...prevActivities, newActivity]);
  };
  const [harvests, setHarvests] = useState([]);

  const handleAddHarvest = (newHarvest) => {
    setHarvests((prevHarvests) => [...prevHarvests, newHarvest]);
  };

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <h4>Welcome to your Dashboard</h4>
      <div className="dashboard-fields">
        {fields.map((field, index) => (
          <FieldComponent key={index} field={field} updateField={() => {}} />
        ))}
      </div>
      <div className="dashboard-options">
        <button
          className={`dashboard-elements ${activeSection === 'cropsAndFields' && 'active'}`}
          onClick={() => handleSectionToggle('cropsAndFields')}
        >
          Crops and Fields
        </button>
        <button
          className={`dashboard-elements ${activeSection === 'farmingActivities' && 'active'}`}
          onClick={() => handleSectionToggle('farmingActivities')}
        >
          Farming Activities
        </button>
        <button
          className={`dashboard-elements ${activeSection === 'reports' && 'active'}`}
          onClick={() => handleSectionToggle('reports')}
        >
          Reports
        </button>
        <button
          className={`dashboard-elements ${activeSection === 'harvesting' && 'active'}`}
          onClick={() => handleSectionToggle('harvesting')}
        >
          Harvesting
        </button>
      </div>

      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>

      {activeSection === 'cropsAndFields' && <CropsAndFieldsPage onAddCropAndField={handleAddCropAndField} />}
      {activeSection === 'farmingActivities' && (
        <FarmingActivitiesPage onAddActivity={handleAddActivity} />
      )}
      {activeSection === 'reports' && <ReportsPage fields={fields} activities={activities} harvests={harvests}/>}
      {activeSection === 'harvesting' && <HarvestingPage onAddHarvest={handleAddHarvest} />}

    </div>
  );
};

export default DashboardPage;
