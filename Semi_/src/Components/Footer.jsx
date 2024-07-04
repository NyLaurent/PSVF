import React from 'react'
import logo from '../assets/logo.png'
import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
        <footer className='bg-[#325AAB] text-white font-light'>
            <div className='flex flex-row justify-evenly p-5'>
            <div>
                <img src={logo} alt="" />
                <p className='text-[10px]'>PETIT SEMINAIRE <br />SAINT-LEON DE KABGAYI</p>
                <ul className='text-[white] flex gap-4'>
                    <li><FaInstagram/></li>
                    <li><FaFacebook/></li>
                    <li><FaEnvelope/></li>
                    <li><FaInstagram/></li>
                </ul>
            </div>
            <div>
                <h1 className='text-[white] font-extrabold'>Lorem ipsum</h1>
                <ul className='flex flex-col'>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                </ul>
            </div>
            <div>
                <h1 className='text-[white] font-extrabold'>Lorem ipsum</h1>
                <ul className='flex flex-col'>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                </ul>
            </div>
            <div>
                <h1 className='text-[white] font-extrabold'>Lorem ipsum</h1>
                <ul className='flex flex-col'>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                </ul>
            </div>
            </div>
          
        </footer>
    </div>
  )
}

export default Footer