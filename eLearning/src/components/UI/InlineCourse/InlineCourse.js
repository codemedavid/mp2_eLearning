import React from 'react'
import InlineCourseCard from '../CourseCard/InlineCourseCard/InlineCourseCard'
function InlineCourse() {
  return (
    <div>
        <h3 className='m-2 mt-4 fs-4 text-white fw-bold'>Welcome To The 1% Freelancer Formula Accelerator</h3>
             
             <p className='text-white mx-2 lh-sm'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Repellat modi illum quae ullam porro, repudiandae pariatur nulla suscipit debitis quas,
                    unde, ducimus dicta iusto tenetur nihil hic earum. Ea, dolores.
            </p>
          <InlineCourseCard />
          <InlineCourseCard />
    </div>
  )
}

export default InlineCourse
