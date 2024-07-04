import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { FaXmark } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { Link } from 'react-scroll';
import backgroundImage from '../assets/gate2.png';

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
            <img src={backgroundImage} alt="Background" className="w-full h-screen object-cover" />

            {/* Content Overlay */}
            <div className='absolute top-0 flex items-center justify-center w-full h-screen text-white flex-col'>
                <div className='text-center'>
                    <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-4'>
                        Welcome to <br className="sm:hidden" />
                        <span className='text-5xl sm:text-6xl md:text-7xl text-blue-200'>
                            Petit Seminaire <br /> Virgo Fidelis de Butare
                        </span>
                    </h1>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl pt-5'>PARAVI LUCERNAM CHRISTO MEO</h2>
                </div>
                <div className='flex relative top-10 gap-6 text-sm sm:text-base md:text-lg'>
                    <li>I prepare a lamp for my Christ</li>
                    <li>Je prépare une lampe pour mon Christ</li>
                </div>
                <div className='flex relative top-24 justify-center'>
                    <a href="" className="inline-block px-5 py-3 sm:px-7 sm:py-4 bg-[#325AAB] text-white font-semibold rounded-sm shadow-md">
                        Apply Now
                    </a>
                </div>
            </div>

            {/* Navbar */}
            <nav className='bg-transparent px-4 md:px-14 w-full fixed top-0 z-50'>
                <div className='container mx-auto flex justify-between items-center font-medium'>
                    <div className='flex space-x-4 md:space-x-14 items-center'>
                        <a href="/" className='text-2xl md:text-3xl font-semibold flex items-center space-x-3 text-white'>
                            <img src={logo} alt="Logo" className='w-8 md:w-12' />
                        </a>
                        <ul className='hidden md:flex space-x-8 lg:space-x-12'>
                            {navItems.map(({ link, path }) => (
                                <li key={link}>
                                    <Link
                                        activeClass='active'
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        className='block text-white hover:text-gray-300 cursor-pointer'
                                        to={path}
                                    >
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='hidden md:flex space-x-4 lg:space-x-12 items-center'>
                        <a href="/" className='flex items-center text-white hover:text-secondary'>
                            <FaPhoneAlt className='mr-2' />Contact us
                        </a>
                    </div>

                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-white text-xl focus:outline-none'>
                            {isMenuOpen ? <FaXmark className='w-6 h-6 text-black' /> : <FaBars className='w-6 h-6' />}
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
                                    className='block text-blue-500 hover:text-gray-300 cursor-pointer'
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
