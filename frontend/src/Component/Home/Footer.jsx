import React from 'react';
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { AiFillFacebook, AiFillYoutube, AiFillInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between py-6">
          <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0 w-full md:w-auto">
            <img src={Logo} alt="Your Logo" className="md:ml-16 w-32 h-auto text-white md:mr-32" style={{ filter: 'invert(1)' }} />
            <div className="mt-6 md:mt-0 text-center md:text-left">
              <h3 className="text-xl font-bold hover:text-orange-400 cursor-pointer">Quick Contact</h3>
              <div className="flex items-center mt-2 justify-center md:justify-start hover:text-orange-400 cursor-pointer">
                <FaPhone className="mr-2" /> 7702564422 / 8017447299
              </div>
              <div className="flex items-center mt-2 justify-center md:justify-start hover:text-orange-400 cursor-pointer">
                <FaWhatsapp className="mr-2" /> 96693384613
              </div>
              <div className="flex items-center mt-2 justify-center md:justify-start hover:text-orange-400 cursor-pointer">
                <FaEnvelope className="mr-2" /> scoobydoobydoopethouse@gmail.com
              </div>
              <div className="flex items-center mt-2 justify-center md:justify-start hover:text-orange-400 cursor-pointer">
                <FaMapMarkerAlt className="mr-2" /> New B Block, Prem Nagar, Hafeezpet, Kondapur, Telangana 500094, India
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-4 mr-8'>
          <p className=' font-bold text-xl'>Stay Conneted</p>
          <div className="flex space-x-4 justify-center md:justify-end w-full md:w-auto mt-4 md:mt-0">
          <Link to="link_to_facebook" className="text-white hover:text-orange-400 rounded-full border-2 p-1"><AiFillFacebook className="text-3xl" /></Link>
          <Link to="link_to_youtube" className="text-white hover:text-orange-400 rounded-full border-2 p-1"><AiFillYoutube className="text-3xl" /></Link>
          <Link to="link_to_instagram" className="text-white hover:text-orange-400 rounded-full border-2 p-1"><AiFillInstagram className="text-3xl" /></Link>
          <Link to="link_to_whatsapp" className="text-white hover:text-orange-400 rounded-full border-2 p-1"><FaWhatsapp className="text-3xl" /></Link>
        </div>
          </div>
          
          
        </div>
      </footer>
      <div className="bg-white text-gray-800 py-2 w-full">
        <div className="container mx-auto flex flex-col md:flex-row justify-evenly text-xs text-center md:text-left">
          <div className="mb-2 md:mb-0">2024 @ Scooby Dooby Doo</div>
          <div>
            <Link to="privacy_policy_link" className="hover:text-orange-400 cursor-pointer hover:underline">Privacy & Cookies</Link> | <Link to="terms_and_conditions_link" className="hover:underline cursor-pointer hover:text-orange-400">T&Cs</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
