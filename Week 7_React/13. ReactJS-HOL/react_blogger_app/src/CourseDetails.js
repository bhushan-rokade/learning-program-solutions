import React from 'react';

function CourseDetails({ courses }) {
  return (
    <div className='course-section'>
      <h2 className='section-title'>🎓 Course Details</h2>
      {courses.map((course) => (
        <div key={course.id} className='course-card'>
          <h3 className='course-name'>{course.name}</h3>
          <p className='course-date'>Start Date: {course.date}</p>
        </div>
      ))}
    </div>
  );
}

export default CourseDetails;
