import React from 'react'
import './Courses.css'
import courses_1 from '../../assets/courses-1.jpg'
import courses_2 from '../../assets/courses-2.jpg'
import courses_3 from '../../assets/courses-3.jpg'
import course_icon_1 from '../../assets/course-icon-1.png'
import course_icon_2 from '../../assets/course-icon-2.png'
import course_icon_3 from '../../assets/course-icon-3.png'

export const Courses = () => {
  return (
    <div className="courses" id='courses'>
       <div className="course">
         <img src={courses_1} alt="" width='200px' height='200px'/>
         <div className="caption">
            <img src={course_icon_1} alt="" />
            <p>Engineering</p>
         </div>
       </div>
       <div className="course">
         <img src={courses_2} alt=""  width='200px' height='200px'/>
         <div className="caption">
            <img src={course_icon_2} alt="" />
            <p>Arts & Science</p>
         </div>
       </div>
       <div className="course">
         <img src={courses_3} alt=""  width='200px' height='200px'/>
         <div className="caption">
            <img src={course_icon_3} alt="" />
            <p>Post Graduation</p>
         </div>
       </div>
    </div>    
    
  )
}
