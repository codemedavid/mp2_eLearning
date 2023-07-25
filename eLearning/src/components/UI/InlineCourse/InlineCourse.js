import React from 'react';
import InlineCourseCard from '../CourseCard/InlineCourseCard/InlineCourseCard';

function InlineCourse({ task }) {
  let i = 1;
  console.log(task);
  return (
    <div>
      <h3 className='m-2 mt-4 fs-4 text-white fw-bold'>{task.title}</h3>

      <p className='text-white mx-2 lh-sm'>
        This course gives us an insight about: {
          task.description
        }
      </p>

      {task.topics.map(topic => (
        <InlineCourseCard
          task={topic.title}
          name={`Step${i++} : `}
          img={` http://localhost:8000/${topic.img}`} // Update this line to access the img property directly from the topic object
          id={topic.id}
        />
      ))}
    </div>
  );
}

export default InlineCourse;
