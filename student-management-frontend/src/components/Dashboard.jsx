import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Student Course Management System</h1>
      <div>
        <h3>Quick Links</h3>
        <ul>
          <li><Link to="/students">Manage Students</Link></li>
          <li><Link to="/courses">Manage Courses</Link></li>
          <li><Link to="/enrollments">Manage Enrollments</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;