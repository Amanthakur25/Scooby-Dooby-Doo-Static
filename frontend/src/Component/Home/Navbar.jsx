import React from 'react';
import Logo from "../../assets/logo.svg";
import { Link } from 'react-router-dom';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";

const Navbar = () => {
    return (
        <header className="bg-gray-100 shadow-md  ">
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
                    <nav className="bg-gray-100 p-2 rounded-lg">
                        <ul className="flex flex-col md:flex-row md:space-x-4">
                            <li>
                                <div to="/" className="block cursor-pointer p-2 text-lg hover:border-b-orange-800 text-gray-700 hover:text-orange-800 rounded transition-colors duration-300 relative">
                                    Home

                                </div>
                            </li>
                            <li>
                                <div to="#about" className="block p-2 cursor-pointer  text-lg text-gray-700 hover:border-b-orange-800 hover:text-orange-800 rounded transition-colors duration-300 relative">
                                    About Us

                                </div>
                            </li>
                            <li className="relative group">
                                <div to="#accommodations" className="block p-2 cursor-pointer text-lg text-gray-700 hover:border-b-orange-800 hover:text-orange-800 rounded transition-colors duration-300 relative">
                                    Accommodations
                                </div>
                                <ul className="absolute left-0 hidden text-lg group-hover:block bg-white shadow-lg mt-1 rounded w-40">
                                    <li><div to="#friendly" className="block p-2 cursor-pointer text-lg text-gray-700 hover:bg-gray-200 rounded">Friendly</div></li>
                                    <li><div to="#separate" className="block p-2 cursor-pointer text-lg  text-gray-700 hover:bg-gray-200 rounded">Separate</div></li>
                                    <li><div to="#deck" className="block p-2 cursor-pointer text-lg text-gray-700 hover:bg-gray-200 rounded">Deck</div></li>
                                </ul>
                            </li>
                            <li className="relative group">
                                <div to="#services" className="block p-2 cursor-pointer text-lg text-gray-700 hover:border-b-orange-800 hover:text-orange-800 rounded transition-colors duration-300 relative">
                                    Services
                                </div>
                                <ul className="absolute left-0 hidden text-lg group-hover:block bg-white shadow-lg mt-1 rounded w-40">
                                    <li><div to="#daycare" className="block p-2 text-lg cursor-pointer text-gray-700 hover:bg-gray-200 rounded">Doggy Day Care Service</div></li>
                                    <li><div to="#boarding" className="block p-2 text-lg cursor-pointer text-gray-700 hover:bg-gray-200 rounded">Boarding</div></li>
                                    <li><div to="#dogwalk" className="block p-2 text-lg cursor-pointer text-gray-700 hover:bg-gray-200 rounded">Dog Walk</div></li>
                                    <li><div to="#pickup" className="block p-2 text-lg cursor-pointer text-gray-700 hover:bg-gray-200 rounded">Dog Pickup/Drop within City</div></li>
                                </ul>
                            </li>
                            <li className="relative group">
                                <div to="#gallery" className="block p-2 text-lg cursor-pointer hover:border-b-orange-800 text-gray-700 hover:text-orange-800 rounded transition-colors duration-300 relative">
                                    Gallery
                                </div>
                                <ul className="absolute left-0 hidden text-lg group-hover:block bg-white shadow-lg mt-1 rounded w-40">
                                    <li><div to="#photo-gallery" className="block p-2 cursor-pointer text-lg text-gray-700 hover:bg-gray-200 rounded w-full">Photo Gallery</div></li>
                                    <li><div to="#video-gallery" className="block p-2 text-lg cursor-pointer text-gray-700 hover:bg-gray-200 rounded w-full">Video Gallery</div></li>
                                </ul>
                            </li>

                            <li>
                                <div to="#faqs" className="block p-2 text-lg hover:border-b-orange-800 cursor-pointer text-gray-700 hover:text-orange-800 rounded transition-colors duration-300 relative">
                                    FAQ's
                                </div>
                            </li>
                            <li>
                                <div to="#blogs" className="block p-2 text-lg hover:border-b-orange-800 cursor-pointer text-gray-700 hover:text-orange-800 rounded transition-colors duration-300 relative">
                                    Blogs
                                </div>
                            </li>
                            <li>
                                <div to="#contact" className="block p-2 text-lg cursor-pointer hover:border-b-orange-800 text-gray-700 hover:text-orange-800 rounded transition-colors duration-300 relative">
                                    Contact
                                </div>
                            </li>
                            <li>
                                <div to="#enquiry" className="block p-2 text-lg cursor-pointer hover:border-b-orange-800 text-gray-700 hover:text-orange-800 rounded transition-colors duration-300 relative">
                                    Quick Enquiry
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
