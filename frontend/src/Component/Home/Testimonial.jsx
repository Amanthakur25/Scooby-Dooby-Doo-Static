import {React} from "react";
import { GiSittingDog } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import {Link} from "react-router-dom"

const Testimonial = () => {
  return (
    <div className="flex flex-col items-center">
      <div className=" text-4xl text-orange-500 flex justify-center items-center ">
        <h1>Testimonials</h1>
      </div>
      <div className=" text-2xl flex justify-center items-center">
        <h3>Hear What Our Happy Clients Have To Say</h3>
      </div>

      <div className=" bg-orange-500 font-bold  text-black text-xl h-52 w-full relative mt-20 xl:mt-60  flex justify-center items-center">
      <Link to="https://maps.app.goo.gl/6iWaa8jVXbXauzcB7?g_st=iwb"> Sell All The Google Reviews</Link>
     
      </div>
      <div  className="flex justify-center items-center flex-col xl:flex-row gap-10 xl:absolute xl:mt-28  max-xl:w-full max-xl:py-5">

         <div className=" bg-slate-50  rounded-lg shadow-lg p-6 w-96 ">
        <div className="flex flex-row items-center ">
          <div className="logo text-black mb-40 mr-4">
            <img src="https://lh3.googleusercontent.com/a-/ALV-UjUJsgAYV6LIP-vfDM4_Fv2EM-ivpbqQ4jE8tVG5GYoBRA2Ik7Y=w75-h75-p-rp-mo-br100" alt="" className=" h-12 w-32" />
          </div>
          <div className="text-wrap  text-justify">
            <p>
            Have opted walking service for my baby, Rio (Shihtzu) and he absolutely loving Hallahan (Walker) ,very much experienced and professional in handling and caring Rio (mine is little spoiled and having so much of tantrums). <a  href="https://maps.app.goo.gl/keh8HU8XANkq1fPq6"> <div className=" text-blue-400 hover:text-blue-600 cursor-pointer hover:underline ">
              
              Read more 
            </div>
            </a>
            </p>
            
            <div className="flex  mt-2 ">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-yellow-500" size={20} />
              ))}
            </div>
            <div className="mt-2 font-semibold">
            Hollohon Daulagupu
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-slate-50 rounded-lg shadow-lg p-6 w-96 ">
        <div className="flex flex-row items-center ">
          <div className="logo text-black mb-40 mr-4">
            <img src="https://lh3.googleusercontent.com/a-/ALV-UjW4Ed-wKuyLkzp21Xl9WRPPmVWccKRaUaDislNjcS7M7T8sunku=w75-h75-p-rp-mo-br100" alt="" className=" h-12 w-32" />
          </div>
          <div className="text-wrap  text-justify">
            <p>
            I have never left my fur baby Muffin with anyone in the last 3 years and last two days were his first time at a boarding without us. Day1 was somehow new to Muffin but Priya and his staff ensured he eats and walks in time.
            <a  href="https://maps.app.goo.gl/b6TqYTunzv8Bybd7A"> <div className=" text-blue-400 hover:text-blue-600 cursor-pointer hover:underline ">
              
              Read more 
            </div>
            </a>
            </p>
            <div className="flex  mt-2 ">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-yellow-500" size={20} />
              ))}
            </div>
            <div className="mt-2 font-semibold">
            Akash Roy
            </div>
          </div>
        </div>
      </div>  
      
      <div className=" bg-slate-50  rounded-lg shadow-lg p-6 w-96 ">
        <div className="flex flex-row items-center ">
          <div className="logo text-black mb-40 mr-4">
           <img src="https://lh3.googleusercontent.com/a-/ALV-UjUbXtoHIFDvqyKxfN4_aHMsqLHt9DzGwPgm4LrUXBCeWmwDcoc0=w75-h75-p-rp-mo-br100" alt="" className=" h-12 w-32" />
          </div>
          <div className="text-wrap  text-justify">
            <p>
            Our not-very-social Shih Tzu felt at home when we left him for a few days at Scooby Doo Doo. The staff and management ensured that his stay was comfortable. They even gave us constant updates on how our little pooch was doing
            <a  href="https://maps.app.goo.gl/X8mMruWnXvimTrJ28"> <div className=" text-blue-400 hover:text-blue-600 cursor-pointer hover:underline ">
              
              Read more 
            </div>
            </a>
            </p>
            <div className="flex  mt-2 ">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-yellow-500" size={20} />
              ))}
            </div>
            <div className="mt-2 font-semibold">
            Aakansha Kapoor
            </div>
          </div>
        </div>
      </div>

      </div>
     
    </div>
  );
};

export default Testimonial;