import React from 'react';
import './SubjectFilters.css';

function SubjectFilters() {
  return (
    <div className="SubjectFilters">
      <h2>Filter by Subject</h2>
      <button>Math</button>
      <button>Science</button>
      <button>History</button>
    </div>
  );
}

export default SubjectFilters;