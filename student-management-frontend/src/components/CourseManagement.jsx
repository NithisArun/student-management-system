import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CourseManagement() {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({ title: '', description: '' });

  useEffect(() => {
    axios.get('http://localhost:8080/api/course')
      .then(res => setCourses(res.data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/course', newCourse)
      .then(res => {
        setCourses([...courses, res.data]);
        setNewCourse({ title: '', description: '' });
      });
  };

  return (
    <div>
      <h2>Courses</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={newCourse.title}
          onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newCourse.description}
          onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
        />
        <button type="submit">Add Course</button>
      </form>
      
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <tr key={course.id}>
              <td>{course.title}</td>
              <td>{course.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CourseManagement;