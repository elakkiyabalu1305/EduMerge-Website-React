import React from 'react'
import './About.css'
import about_video from '../../assets/about-video.mp4'

export const About = () => {
  return (
    <div className='about' id='about'>
       <div className="about-left">
          <video src={about_video} width='300px' height='500px' controls autoPlay muted playsInline loop  ></video>
       </div>
       <div className="about-right">
          <h3>About EduMerge</h3>
          <h2>Nurturing Tomorrow's Leaders Today</h2>
          <p>Embark on a transformative educational journey our
             university's comprehensive education programs. Our cutting-edge
             curriculam is designed to empower students with the knowledge,
             skills, and experiences needed to excel in the dynamic field of
             education.
          </p>
          <p>With a focus on innovation, hands-on learning, and personalized
             mentorship, our courses prepare aspiring educators to make a
             meaningful impact in classrooms, schools and communities.
          </p>
          <p>Whether you aspire to become a teacher, administrator,
             counselor or educational leader, our diverse range of programs
             offers the perfect pathway to achieve your goals and unlock your
             full potential in shaping the future of education.
          </p>
        
       </div>
    </div>
  )
}
