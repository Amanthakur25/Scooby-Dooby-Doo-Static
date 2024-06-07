import React from 'react';
import DogImg from "../../assets/dogimg.webp";
import DogPawBackground from "../../assets/Untitled design.png";

const AccomationSection = () => {
  return (
    <div className="relative w-full text-center mt-80 mb-60">
      <div className="absolute inset-0">
        <img className="w-full h-auto min-h-screen" src={DogPawBackground} alt="Dog Paw Background" />
      </div>
      <img className="absolute top-[-31%] left-1/2 transform -translate-x-1/2 w-auto h-auto" src={DogImg} alt="Dog" />

      <div className="relative flex flex-col items-center justify-center py-16">
        <h2 className="text-4xl text-white font-bold mb-4">Accommodation</h2>
        <p className="text-lg text-white mb-8">Best pet accommodation facility in Hyderabad.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-10/12 mx-auto">
          <div className="bg-transparent p-6  hover:bg-black rounded-lg shadow-lg">
            <img src="https://scoobydoobydoopethouse.com/wp-content/uploads/2024/03/01-1.jpg" alt="Friendly" className="w-full h-auto mb-4 rounded-lg" />
            <h3 className="text-2xl text-white font-semibold mb-2">Friendly</h3>
            <hr className="border-gray-300 mb-4" />
            <p className='text-white'>Friendly Accommodations</p>
            <button className="mt-4 px-4 py-2 bg-white text-orange-600 rounded-lg">Read More</button>
          </div>
          <div className="bg-transparent p-6 hover:bg-black rounded-lg shadow-lg">
            <img src="https://scoobydoobydoopethouse.com/wp-content/uploads/2024/03/02-1.jpg" alt="Deck" className="w-full h-auto mb-4 rounded-lg" />
            <h3 className="text-2xl text-white font-semibold mb-2">Deck</h3>
            <hr className="border-gray-300 mb-4" />
            <p className='text-white'>Deck Accommodations</p>
            <button className="mt-4 px-4 py-2 bg-white text-orange-600 rounded-lg">Read More</button>
          </div>
          <div className="bg-transparent p-6 hover:bg-black rounded-lg shadow-lg">
            <img src="https://scoobydoobydoopethouse.com/wp-content/uploads/2024/03/03-1.jpg" alt="Separate" className="w-full h-auto mb-4 rounded-lg" />
            <h3 className="text-2xl text-white font-semibold mb-2">Separate</h3>
            <hr className="border-gray-300 mb-4" />
            <p className='text-white'>Separate Accommodations</p>
            <button className="mt-4 px-4 py-2 bg-white text-orange-600 rounded-lg">Read More</button>
          </div>
        </div>
        
        <button className={`absolute bottom-[-8%] right-1/2 mb-4 mr-4 p-4 border-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110`}>Call Us @7702564422</button>

     

      </div>

     
    </div>
  );
}

export default AccomationSection;
