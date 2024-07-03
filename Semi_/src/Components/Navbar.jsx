import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { FaXmark } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { Link } from 'react-scroll';
import backgroundImage from '../assets/gate2.png'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        { link: "Home", path: "home" },
        { link: "About Us", path: "feature" },
        { link: "News", path: "about" },
        { link: "How to join", path: "pricing" },
    ];

    return (
        <div className='relative'>
            {/* Background Image */}
            <img src={backgroundImage} alt="Background" className="w-full h-screen object-cover  " />

            {/* Content Overlay */}
            <div className='absolute top-5 flex items-center justify-center w-full h-screen text-white flex-col'>
                <div className='text-center'>
                    <h1 className='text-4xl md:text-6xl sm:text-4xl font-bold mb-4'>
                        Welcome to <br className="sm:hidden" /> 
                        <span className='text-6xl md:text-7xl sm:text-5xl text-blue-200'>
                            Petit Seminaire <br /> Virgo Fidelis de Butare
                        </span>

                    </h1>
                    <h2 className='text-center justify-center pt-5 text-4xl '>PARAVI LUCERNAM CHRISTO MEO</h2>
                </div>
                <div className='flex relative top-10 gap-6'>
                    <li>I prepare a lamp for my Christ</li> 
                    <li>Je prépare une lampe pour mon Christ</li>
                </div>
                <div className='flex relative top-24 justify-center align-center'>
                <a href="#" className="inline-block px-7 py-4 bg-[#325AAB] text-white font-semibold rounded-sm  shadow-md ">
            Apply Now
        </a>
                </div>
            </div>

            {/* Navbar */}
            <nav className='bg-transparent md:px-14 p-4 w-full fixed top-0 z-50'>
                <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
                    <div className='flex space-x-14 items-center'>
                        <a href="/" className='text-3xl font-semibold flex items-center space-x-3 text-white'>
                            <img src={logo} alt="" className='w-12 inline-block items-center' />
                        </a>
                        <ul className='md:flex space-x-12 hidden'>
                            {navItems.map(({ link, path }) => (
                                <li key={link}>
                                    <Link
                                        activeClass='active'
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        className='block text-white'
                                        to={path}
                                    >
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='space-x-12 hidden md:flex items-center'>
                        <a href="/" className='hidden lg:flex items-center text-white hover:text-secondary'>
                            <FaPhoneAlt className='mr-2' />Contact us
                        </a>
                    </div>

                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-white text-xl focus:outline-none focus:text-gray-300'>
                            {isMenuOpen ? <FaXmark className='w-6 h-6 text-black' /> : <FaBars className='w-6 h-6 text-white' />}
                        </button>
                    </div>
                </div>

                {/* Responsive Menu */}
                <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} fixed top-16 right-0 left-0 z-50 space-y-4 px-4 pt-24 pb-5 bg-secondary`}>
                    <ul className='flex flex-col space-y-4'>
                        {navItems.map(({ link, path }) => (
                            <li key={link}>
                                <Link
                                    activeClass='active'
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    className='block text-blue-500 hover:text-gray-300'
                                    to={path}
                                    onClick={toggleMenu}
                                >
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
