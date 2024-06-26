import React from 'react';
import {dayimg} from "../../constants/imageConstant";
import {untitledDesign} from "../../constants/imageConstant";
import { Link } from 'react-router-dom';
import {Accomadation} from '../../constants/imageConstant'
import banner from "../../assets/PhotoGallery/banner.jpeg"
const Frendly=Accomadation.Frendly;
const Deck=Accomadation.Deck;
const Separate=Accomadation.Seperate;

const AccomationSection = () => {
  return (
    <div className="relative w-full text-center h-full  md:h-[1000px] lg:h-[1130px] bg-[#e2740b] ">
      <div className=" hidden md:block absolute inset-0">
        <img className="w-full h-auto min-h-screen" src={banner} loading='lazy' alt="Dog Paw Background" />
      </div>

      <div className=' block md:hidden absolute h-full  inset-0'>
        <img className="w-full h-full object-cover" src={untitledDesign} loading='lazy' alt="untitled" />

      </div>

      <div className="relative flex flex-col items-center justify-center md:top-[275px] py-16">
        <h2 className="text-4xl text-white font-bold mb-4">Accommodation</h2>
        <p className="text-lg text-white mb-8">Best pet accommodation facility in Hyderabad.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-10/12 mx-auto ">
          <div className="bg-transparent p-6  hover:bg-black rounded-lg shadow-lg">
            <img src={Frendly} alt="Friendly" className="w-full h-auto mb-4 rounded-lg" />
            <h3 className="text-2xl text-white font-semibold mb-2">Friendly</h3>
            <hr className="border-gray-300 mb-4" />
            <p className='text-white'>Friendly Accommodations</p>
            <Link to="/friendlyAccommodations">
            <button className="mt-4 px-4 py-2 bg-white text-orange-600 rounded-lg">Read More</button>
            </Link>
          </div>
          <div className="bg-transparent p-6 hover:bg-black rounded-lg shadow-lg">
            <img src={Deck} alt="Deck" className="w-full h-auto mb-4 rounded-lg" />
            <h3 className="text-2xl text-white font-semibold mb-2">Deck</h3>
            <hr className="border-gray-300 mb-4" />
            <p className='text-white'>Deck Accommodations</p>
            <Link to="/deckAccomadations">
            <button className="mt-4 px-4 py-2 bg-white text-orange-600 rounded-lg">Read More</button>
            </Link>
          </div>
          <div className="bg-transparent p-6 hover:bg-black rounded-lg shadow-lg">
            <img src={Separate} alt="Separate" className="w-full h-auto mb-4 rounded-lg" />
            <h3 className="text-2xl text-white font-semibold mb-2">Separate</h3>
            <hr className="border-gray-300 mb-4" />
            <p className='text-white'>Separate Accommodations</p>
            <Link to="/seprateAccomadations">
            <button className="mt-4 px-4 py-2 bg-white text-orange-600 rounded-lg">Read More</button>
            </Link>
          </div>
        </div>
        <a href="tel:7702564422">
        <button className=" mt-5 p-4 border-2 bg-white text-orange-600 rounded-lg transition duration-500 ease-in-out hover:-translate-y-1 hover:text-white hover:scale-110 hover:bg-slate-900 ">
          Call Us @7702564422
        </button> 
     
</a>
      </div>

     
    </div>
  );
}

export default AccomationSection;
