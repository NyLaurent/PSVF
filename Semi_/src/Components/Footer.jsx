import React from 'react'
import logo from '../assets/logo.png'
import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <footer className='bg-[#325AAB] text-white font-light p-5'>
        <div className='flex flex-col md:flex-row justify-evenly items-center md:items-start'>
          <div className='text-center md:text-left mb-4 md:mb-0'>
            <img src={logo} alt="" className="mx-auto md:mx-0" />
            <p className='text-[10px] mt-2'>PETIT SEMINAIRE <br /> SAINT-LEON DE KABGAYI</p>
            <ul className='flex justify-center md:justify-start gap-4 mt-2'>
              <li><FaInstagram /></li>
              <li><FaFacebook /></li>
              <li><FaEnvelope /></li>
              <li><FaInstagram /></li>
            </ul>
          </div>
          {[1, 2, 3].map((num) => (
            <div key={num} className='text-center md:text-left mb-4 md:mb-0'>
              <h1 className='font-extrabold'>Lorem ipsum</h1>
              <ul className='flex flex-col'>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </div>
  )
}

export default Footer
