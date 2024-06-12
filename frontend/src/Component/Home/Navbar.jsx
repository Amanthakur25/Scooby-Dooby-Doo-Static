import React from 'react';
import Logo from "../../assets/logo.svg";
import { Link } from 'react-router-dom';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";

const Navbar = () => {
    return (
        <header className="bg-gray-200 shadow-md">
            <div className="container mx-auto flex items-center justify-between p-4">
                <div className="flex items-center w-1/5">
                    <Link to="/">
                        <img src={Logo} alt="Logo" className="pl-4 h-20" />
                    </Link>
                </div>
                <div className="flex flex-col w-4/5">
                    <div className="flex justify-end space-x-4 mb-2 pr-4">
                        <div className="flex items-center text-gray-700">
                            <div className="border cursor-pointer border-gray-700 rounded-full p-2">
                                <FaPhoneAlt />
                            </div>
                            <span className="ml-2">7702564422</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                            <div className="border cursor-pointer border-gray-700 rounded-full p-2">
                                <IoMailSharp />
                            </div>
                            <span className="ml-2">scoobydoobypethouse@gmail.com</span>
                        </div>
                    </div>
                    <nav className="bg-gray-200 p-2 rounded-lg">
                        <ul className="flex flex-col md:flex-row md:space-x-4">
                            <li>
                                <Link to="/" className="block hover:border-orange-800 border-b-2 cursor-pointer p-2 text-lg text-gray-700 hover:text-orange-800 rounded transition-colors duration-300 relative">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <div className="block hover:border-orange-800 border-b-2 p-2 cursor-pointer text-lg text-gray-700 hover:text-orange-800 rounded transition-colors duration-300 relative">
                                    About Us
                                </div>
                            </li>
                            <li className="relative group">
                                <div className="block p-2 hover:border-orange-800 border-b-2 cursor-pointer text-lg text-gray-700 hover:text-orange-800 rounded transition-colors duration-300 relative">
                                    Accommodations
                                </div>
                                <ul className="absolute left-0 hidden text-lg group-hover:block text-white bg-black shadow-lg mt-1 rounded w-40">
                                    <li>
                                        <Link to="/friendlyAccommodations">
                                            <div className="block p-2 cursor-pointer text-lg text-white hover:text-orange-800 hover:bg-white rounded">
                                                Friendly
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/seprateAccomadations">
                                            <div className="block p-2 cursor-pointer text-lg text-white hover:text-orange-800 hover:bg-white rounded">
                                                Separate
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/deckAccomadations">
                                            <div className="block p-2 cursor-pointer text-lg text-white hover:text-orange-800 hover:bg-white rounded">
                                                Deck
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="relative group">
                                <div className="block hover:border-orange-800 border-b-2 p-2 cursor-pointer text-lg text-gray-700 hover:text-orange-800 rounded transition-colors duration-300 relative">
                                    Services
                                </div>
                                <ul className="absolute left-0 hidden text-lg group-hover:block bg-black shadow-lg mt-1 rounded w-40">
                                    <li>
                                        <Link to="/doggyDayCare">
                                            <div className="block p-2 cursor-pointer text-lg text-white hover:text-orange-800 hover:bg-white rounded">
                                                Doggy Day Care Service
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/dogBoarding">
                                            <div className="block p-2 cursor-pointer text-lg text-white hover:text-orange-800 hover:bg-white rounded">
                                                Boarding
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/dogWalk">
                                            <div className="block p-2 cursor-pointer text-lg text-white hover:text-orange-800 hover:bg-white rounded">
                                                Dog Walk
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/dogPickupNDrop">
                                            <div className="block p-2 cursor-pointer text-lg text-white hover:text-orange-800 hover:bg-white rounded">
                                                Dog Pickup/Drop within City
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="relative group">
                                <div className="block hover:border-orange-800 border-b-2 p-2 text-lg cursor-pointer text-gray-700 hover:text-orange-800 rounded transition-colors duration-300 relative">
                                    Gallery
                                </div>
                                <ul className="absolute left-0 hidden text-lg group-hover:block bg-black shadow-lg mt-1 rounded w-40">
                                    <li>
                                    <Link to="/photo-galary">
                                        <div className="block p-2 cursor-pointer text-lg text-white hover:text-orange-800 hover:bg-white rounded">
                                            Photo Gallery
                                        </div>
                                        </Link>
                                    </li>
                                    <li>
                                    <Link to="/video-galary">
                                        <div className="block p-2 cursor-pointer text-lg text-white hover:text-orange-800 hover:bg-white rounded">
                                            Video Gallery
                                        </div>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                            <Link to="/faq">
                                <div className="block p-2 hover:border-orange-800 border-b-2 text-lg cursor-pointer text-gray-700 hover:text-orange-800 rounded transition-colors duration-300 relative">
                                    FAQ's
                                </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/blogs">
                                    <div className="block hover:border-orange-800 border-b-2 p-2 text-lg cursor-pointer text-gray-700 hover:text-orange-800 rounded transition-colors duration-300 relative">
                                        Blogs
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/contactus">
                                    <div className="block hover:border-orange-800 border-b-2 p-2 text-lg cursor-pointer text-gray-700 hover:text-orange-800 rounded transition-colors duration-300 relative">
                                        Contact
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/enquiry">
                                    <div className="block hover:border-orange-800 border-b-2 p-2 text-lg cursor-pointer text-gray-700 hover:text-orange-800 rounded transition-colors duration-300 relative">
                                        Quick Enquiry
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
