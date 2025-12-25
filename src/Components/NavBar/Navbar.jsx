import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
                                                                                   

export const Navbar = () => { 

     const [sticky, setSticky] = useState(false);

     useEffect(() => {
       window.addEventListener('scroll', () =>{
           window.scrollY > 50 ? setSticky(true) : setSticky(false);
       })
     },[]);

     const [mobileMenu, setMobileMenu] = useState(false);
     const toggleMenu = () => {
         mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
     }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <div className='logo'><FontAwesomeIcon icon={faGraduationCap} />EduMerge</div>
        <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
            <li><Link to='home' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='courses' smooth={true} offset={-260} duration={500}>Course</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
            <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-130} duration={500}>Testimonials</Link></li>
            <li><Link to='contact' smooth={true} offset={0} duration={-260}><button className='btn'>Contact Us</button></Link></li> 
        </ul>
        <div><FontAwesomeIcon icon={faBars} onClick={toggleMenu} className='menu-icon' /></div>
    </nav>
  )
}

