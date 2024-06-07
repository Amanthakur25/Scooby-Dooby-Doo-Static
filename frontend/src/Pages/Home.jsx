import React from 'react'
import Navbar from '../Component/Home/Navbar'
import AccomationSection from '../Component/Home/AccomationSection'
import HeroSection from '../Component/Home/HeroSection'
import Welcome from '../Component/Home/Welcome'

const Home = () => {
  return (
    <div>
     <HeroSection/>
     <Welcome/>
    <AccomationSection/>
    </div>
  )
}

export default Home
