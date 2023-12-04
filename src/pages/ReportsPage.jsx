// ReportsPage.js

import React from 'react';
import './ReportsPage.scss';

const ReportsPage = ({ fields, activities, harvests }) => {
  return (
    <div className="reports-container">
      <h3>Reports</h3>

      <div>
        <h4>Fields</h4>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Crop Name</th>
              <th>Field Name</th>
            </tr>
          </thead>
          <tbody>
            {fields.map((field, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{field.cropName}</td>
                <td>{field.fieldName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h4>Farming Activities</h4>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Activity Name</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{activity.activityName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h4>Harvests</h4>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Harvest Date</th>
              <th>Harvest Time</th>
            </tr>
          </thead>
          <tbody>
            {harvests.map((harvest, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{harvest.harvestDate}</td>
                <td>{harvest.harvestTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportsPage;
