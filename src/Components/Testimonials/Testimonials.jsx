import React, { useRef } from 'react'
import './Testimonials.css'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'


export const Testimonials = () => {

    const slider = useRef();
    const tx = useRef(0);


    const slideForward = () =>{
        if(tx.current > -50){
            tx.current -= 25;
        }
        slider.current.style.transform = `translateX(${tx.current}%)`
  
    }
    const slideBackward = () =>{
        if(tx.current < 0){
            tx.current += 25;
        }
        slider.current.style.transform = `translateX(${tx.current}%)`
    }

  return (
    <div className='testimonials' id='testimonials'>
       <div className='next-btn' onClick={slideForward}><FontAwesomeIcon icon={faArrowLeft} className='icon' /></div>
       <div className='prev-btn' onClick={slideBackward}><FontAwesomeIcon icon={faArrowRight} className='icon' /></div>
       <div className='slider'>
          <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Riya</h3>
                            <span>chennai, India</span>
                        </div>
                    </div>
                    <p>
                        "In my experience all the teachers are very supportive and friendly
                        and the placement processhas been very smooth throughout. I would 
                        always be very grateful for the lifelong connections I made."
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Shyam</h3>
                            <span>Bangalore, India</span>
                        </div>
                    </div>
                    <p>
                        "My experience at EduMerge university is great and memorable. The mentors
                        at Sharda University helped us enhance my academic and interpersonal
                        skills. I am thankful to Training & Placement cell."
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Divya</h3>
                            <span>Mumbai, India</span>
                        </div>
                    </div>
                    <p>
                       "The faculties here actually helped me grow into an ambitious person. 
                       The co-curricular activities organized by college helped me a lot in 
                       shaping my personality and grow as a person."
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Ashok</h3>
                            <span>Chennai, India</span>
                        </div>
                    </div>
                    <p>
                        "The courses, expert lecturers, the infrastructure, the Life skills 
                        classes and other co-curricular activities increase my knowledge in 
                        technical manner as well in other necessary life-long activities."
                    </p>
                </div>
            </li>
          </ul>

       </div>
    </div>
  )
}
