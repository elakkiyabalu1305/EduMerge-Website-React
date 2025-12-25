import React from 'react'
import './Campus.css'
import gallary_1 from '../../assets/gallery-1.png'
import gallary_2 from '../../assets/gallery-2.png'
import gallary_3 from '../../assets/gallery-3.png'
import gallary_4 from '../../assets/gallery-4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


export const Campus = () => {
  return (
    <div className='campus' id='campus'>
        <div className="gallery">
            <img src={gallary_1} alt="" width='200px' height='300px'/>
            <img src={gallary_2} alt="" width='200px' height='300px'/>
            <img src={gallary_3} alt="" width='200px' height='300px' />
            <img src={gallary_4} alt="" width='200px' height='300px' />
        </div>
        <button className='btn dark-btn'>See more here<FontAwesomeIcon icon={faArrowRight} className='icon' /></button>
    </div>
  )
}
