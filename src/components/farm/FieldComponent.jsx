// components/FieldModal.jsx

import React, { useState } from 'react';
import Modal from './Modal'; // Adjust the path

const FieldModal = ({ addNewField }) => {
  const [fieldName, setFieldName] = useState('');
  const [fieldType, setFieldType] = useState('');

  const handleAddField = () => {
    // Perform any validation as needed
    if (fieldName && fieldType) {
      addNewField({
        id: Date.now(),
        name: fieldName,
        type: fieldType,
        crops: [],
        activities: [],
      });

      // Reset the form and close the modal
      setFieldName('');
      setFieldType('');
    }
  };

  return (
    <Modal
      title="Add New Field"
      onClose={() => {
        // Reset the form when the modal is closed
        setFieldName('');
        setFieldType('');
      }}
    >
      <label>
        Field Name:
        <input
          type="text"
          value={fieldName}
          onChange={(e) => setFieldName(e.target.value)}
        />
      </label>
      <label>
        Field Type:
        <input
          type="text"
          value={fieldType}
          onChange={(e) => setFieldType(e.target.value)}
        />
      </label>
      <button onClick={handleAddField}>Add Field</button>
    </Modal>
  );
};

export default FieldModal;
