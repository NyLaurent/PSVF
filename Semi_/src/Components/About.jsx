import React from 'react';
import { FaCircleCheck } from "react-icons/fa6";
import house from '../assets/house.png'

const About = () => {
    return (
        <div>
            <div className='flex justify-center'>
            <div className='w-[700px] h-[58px] bg-[white] shadow-lg relative bottom-6 rounded-lg'>
            <ul className='flex justify-evenly pt-3'>
                <li className='flex gap-2.5 '><li><FaCircleCheck className='text-[#325AAB]'/></li> Ordinary level</li>
                <li className='flex gap-2.5'> <li><FaCircleCheck className='text-[#325AAB]'/></li>Advanced level</li>
                <li className='flex gap-2.5'> <li><FaCircleCheck className='text-[#325AAB]'/></li>Lorem Ipsum</li>
            </ul>
        </div>
            </div>

            <div>
                <img src={house} alt="" />
            </div>
       
        </div>
    );
};

export default About;
