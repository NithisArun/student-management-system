import React, { useEffect, useState } from 'react';
import axios from 'axios';

function EnrollmentManagement() {
  const [enrollments, setEnrollments] = useState([]);
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [newEnrollment, setNewEnrollment] = useState({ 
    studentId: '', 
    courseId: '' 
  });

  useEffect(() => {
    // Fetch existing data
    axios.get('http://localhost:8080/api/enrollment')
      .then(res => setEnrollments(res.data));
      
    axios.get('http://localhost:8080/api/students')
      .then(res => setStudents(res.data));

    axios.get('http://localhost:8080/api/course')
      .then(res => setCourses(res.data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/enrollment', newEnrollment)
      .then(res => {
        setEnrollments([...enrollments, res.data]);
        setNewEnrollment({ studentId: '', courseId: '' });
      });
  };

  // Helper function to get student/course details
  const getDetail = (id, collection) => {
    const item = collection.find(item => item.id === id);
    return item ? item.name || item.title : 'Unknown';
  };

  return (
    <div>
      <h2>Enrollments</h2>
      <form onSubmit={handleSubmit}>
        <select
          value={newEnrollment.studentId}
          onChange={(e) => setNewEnrollment({ ...newEnrollment, studentId: e.target.value })}
        >
          <option value="">Select Student</option>
          {students.map(student => (
            <option key={student.id} value={student.id}>
              {student.name}
            </option>
          ))}
        </select>

        <select
          value={newEnrollment.courseId}
          onChange={(e) => setNewEnrollment({ ...newEnrollment, courseId: e.target.value })}
        >
          <option value="">Select Course</option>
          {courses.map(course => (
            <option key={course.id} value={course.id}>
              {course.title}
            </option>
          ))}
        </select>

        <button type="submit">Enroll Student</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Student</th>
            <th>Course</th>
          </tr>
        </thead>
        <tbody>
          {enrollments.map(enrollment => (
            <tr key={enrollment.id}>
              <td>{getDetail(enrollment.studentId, students)}</td>
              <td>{getDetail(enrollment.courseId, courses)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EnrollmentManagement;