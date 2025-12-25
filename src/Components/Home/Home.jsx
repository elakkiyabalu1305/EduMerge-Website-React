import React from 'react'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export const Home = () => {
  return (
    <div className='home container' id='home'>
       <div className="home-text">
          <h1>We ensure better education for a better world</h1>
          <p>Our cutting-edge curriculam is designed to empower students 
            with the knowledge, skills, and experiences needed to excel 
            in the dynamic field of education</p>
          <button className='btn'>Explore more<FontAwesomeIcon icon={faArrowRight} className='icon' /></button>
       </div>
    </div>
  )
}
