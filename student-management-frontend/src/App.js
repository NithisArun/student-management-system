
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import StudentManagement from './components/StudentManagement';
import CourseManagement from './components/CourseManagement';
import EnrollmentManagement from './components/EnrollmentManagement';

function App() {
  return (
    <Router>
      <div>
        <nav style={{ padding: '1rem', background: '#f0f0f0' }}>
          <Link to="/" style={{ marginRight: '1rem' }}>Dashboard</Link>
          <Link to="/students" style={{ marginRight: '1rem' }}>Students</Link>
          <Link to="/courses" style={{ marginRight: '1rem' }}>Courses</Link>
          <Link to="/enrollments">Enrollments</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/students" element={<StudentManagement />} />
          <Route path="/courses" element={<CourseManagement />} />
          <Route path="/enrollments" element={<EnrollmentManagement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;