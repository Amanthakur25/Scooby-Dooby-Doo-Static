import React from 'react';
import Dogimg from '../../assets/dogs.jpg';

const HeroSection = () => {
  return (
    <div className=" w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${Dogimg})` }}>
      <div className="flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-50">
        <h1 className="text-2xl md:text-5xl lg:text-4xl text-white font-bold mb-4 text-center">
          Luxury Dog Boarding and Daycare Facility
        </h1>
        <button className="px-6 py-3 bg-transparent border-2 border-slate-700 text-white font-semibold rounded-md hover:bg-white hover:text-black h-26 w-60">
          Find Out More
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
