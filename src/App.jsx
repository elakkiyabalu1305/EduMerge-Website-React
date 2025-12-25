import React from 'react'
import { Navbar } from './Components/NavBar/Navbar'
import { Home } from './Components/Home/Home'
import { Courses } from './Components/Courses/Courses'
import { Title } from './Components/Title/Title'
import { About } from './Components/About/About'
import { Campus } from './Components/Campus/Campus'
import { Testimonials } from './Components/Testimonials/Testimonials'
import { Contact } from './Components/Contact/Contact'
import { Footer } from './Components/Footer/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <div className='container'>
        <Title subTitle='Our Courses' title='What We Offer'/>
        <Courses/>
        <About/>
        <Title subTitle='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subTitle='Testimonials' title='What Student Says'/>
        <Testimonials/>
        <Title subTitle='Contact Us' title='Get in touch'/>
        <Contact/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
