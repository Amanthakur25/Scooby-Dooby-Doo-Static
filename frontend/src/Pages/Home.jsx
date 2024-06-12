import React from 'react'
import AccomationSection from '../Component/Home/AccomationSection'
import HeroSection from '../Component/Home/HeroSection'
import Welcome from '../Component/Home/Welcome'
import Testimonial from '../Component/Home/Testimonial'
import Blog from './Blog'
import WhyChooseUs from '../Component/Home/WhyChooseUs'
import SeprateAccomadations from '../Component/Accomadations/SeprateAccomadations'
import DeckAccomadations from '../Component/Accomadations/DeckAccomadations'
import DogBoarding from '../Component/Services/DogBoarding'
import DoggyDayCare from '../Component/Services/DoggyDayCare'
import DogWalk from '../Component/Services/DogWalk'
import DogPickupNDrop from '../Component/Services/DogPickupNDrop'
import FriendlyAccommodations from '../Component/Accomadations/FrendlyAccomadations'
import PhotoGallery from '../Component/galary/PhotoGalary'



const Home = () => {
  return (
    <div>

    
   
     <HeroSection/> 
     <Welcome/>
    <AccomationSection/>  
     <WhyChooseUs/>
 

  
    </div>
  )
}

export default Home
