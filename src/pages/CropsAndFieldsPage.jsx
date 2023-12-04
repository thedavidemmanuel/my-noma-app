// CropsAndFieldsPage.js

import React, { useState } from 'react';
import './CropsAndFieldsPage.scss';

const CropsAndFieldsPage = ({ onAddCropAndField }) => {
  const [cropName, setCropName] = useState('');
  const [fieldName, setFieldName] = useState('');

  const handleAddCropAndField = () => {
    const newCropAndField = {
      cropName,
      fieldName,
    };

    onAddCropAndField(newCropAndField);

    setCropName('');
    setFieldName('');
  };

  return (
    <div className="crops-and-fields-container">
      <h1>Crops and Fields</h1>
      <div className="input-container">
        <label>
          Crop Name:
          <input
            type="text"
            value={cropName}
            onChange={(e) => setCropName(e.target.value)}
            className="custom-input"
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Field Name:
          <input
            type="text"
            value={fieldName}
            onChange={(e) => setFieldName(e.target.value)}
            className="custom-input"
          />
        </label>
      </div>
      <button onClick={handleAddCropAndField} className="custom-button">
        Add Crop and Field
      </button>
    </div>
  );
};

export default CropsAndFieldsPage;
