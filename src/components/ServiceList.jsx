import React from 'react';
import './ServiceList.css';

function ServiceList() {
  return (
    <div className="service-list">
      <h2>Services</h2>
      <ul>
        <li>Haircut</li>
        <li>Coloring</li>
        <li>Manicure</li>
        <li>Pedicure</li>
      </ul>
    </div>
  );
}

export default ServiceList;
