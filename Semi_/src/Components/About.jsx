import React from 'react';
import { FaCircleCheck } from "react-icons/fa6";
import house from '../assets/house.png'
import { FaArrowRight } from "react-icons/fa";
import About1 from '../assets/about1.png';
import About2 from '../assets/about2.png'
import { MdOutlineFlag } from 'react-icons/md'

const About = () => {
    return (
        <div className="px-4">
            <div className='flex justify-center'>
                <div className='w-full sm:w-[700px] h-[58px] bg-white shadow-2xl relative bottom-6 rounded-lg'>
                    <ul className='flex flex-wrap justify-evenly pt-3'>
                        <li className='flex gap-2.5'><FaCircleCheck className='text-[#325AAB]' /> Ordinary level</li>
                        <li className='flex gap-2.5'><FaCircleCheck className='text-[#325AAB]' />Advanced level</li>
                        <li className='flex gap-2.5'><FaCircleCheck className='text-[#325AAB]' />Lorem Ipsum</li>
                    </ul>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row justify-evenly'>
                <div className="flex justify-center lg:justify-start mb-8 lg:mb-0">
                    <img src={house} alt="" className='w-full lg:w-[700px] rounded-lg' />
                </div>
                <div className="lg:w-1/2 lg:ml-10">
                    <h1 className='text-[#325AAB] font-extrabold text-4xl mb-4'>ABOUT US</h1>
                    <h3 className='font-bold text-2xl mb-4'>Get to know more about our seminary</h3>
                    <p className='mb-4'>
                        Petit Seminare Saint Leon Kabgayi is a distinguished educational institution known for its commitment to academic excellence and holistic development. Located in Kabgayi, it has a rich history of nurturing students both academically and morally. The school fosters a conducive learning environment, encouraging intellectual growth and character formation.
                    </p>
                    <p className='mb-8'>
                        With a dedicated faculty and modern facilities, Petit Seminare Saint Leon Kabgayi is a beacon of educational quality, consistently producing well-rounded individuals who excel in various fields.
                    </p>
                    <a href="#" className="inline-block px-7 py-4 bg-[#325AAB] text-white font-semibold rounded-lg shadow-md flex items-center gap-2">
                        Read more <FaArrowRight />
                    </a>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row justify-evenly mt-16'>
                <div className='lg:w-1/2 lg:pr-14 mb-8 lg:mb-0'>
                    <h1 className='text-[#325AAB] font-extrabold text-2xl mb-4'>LOREM IPSUM</h1>
                    <h3 className='font-bold text-xl mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                    <p className='mb-4'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.
                    </p>
                    <p className='mb-4'>
                        Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.
                    </p>
                    <p>
                        Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.
                    </p>
                </div>
                <div className="flex flex-col items-center lg:items-start gap-4">
                    <img src={About1} alt="" className='w-full lg:w-[400px] mb-4' />
                    <img src={About2} alt="" className='w-full lg:w-[400px]' />
                </div>
            </div>

            <div className='text-center mt-16'>
                <h1 className='text-[#325AAB] font-extrabold text-2xl mb-4'>LOREM IPSUM</h1>
                <p className='font-bold text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>

            <div className='w-full h-[150px] bg-[#325AAB] flex justify-evenly items-center mt-16'>
                <div className='text-center'>
                    <h1 className='text-white text-5xl font-extrabold'>+ 50</h1>
                    <p className='text-white'>Years of foundation</p>
                </div>
                <div className='text-center'>
                    <h1 className='text-white text-5xl font-extrabold'>+ 50</h1>
                    <p className='text-white'>Years of foundation</p>
                </div>
                <div className='text-center'>
                    <h1 className='text-white text-5xl font-extrabold'>+ 50</h1>
                    <p className='text-white'>Years of foundation</p>
                </div>
                <div className='text-center'>
                    <h1 className='text-white text-5xl font-extrabold'>+ 50</h1>
                    <p className='text-white'>Years of foundation</p>
                </div>
            </div>

            <div className='text-center mt-16'>
                <h1 className='text-[#325AAB] font-extrabold text-2xl mb-4'>LOREM IPSUM</h1>
                <p className='font-bold text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>

            <div className='flex flex-wrap justify-evenly mt-16'>
                <div className='w-full sm:w-[400px] h-[280px] bg-[#F1F3F8] p-4 rounded-md mb-4'>
                    <MdOutlineFlag className='text-6xl text-[#325AAB] mb-4' />
                    <h1 className='text-2xl font-bold mb-4'>Mission</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
                    </p>
                </div>
                <div className='w-full sm:w-[400px] h-[280px] bg-[#F1F3F8] p-4 rounded-md mb-4'>
                    <MdOutlineFlag className='text-6xl text-[#325AAB] mb-4' />
                    <h1 className='text-2xl font-bold mb-4'>Mission</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
                    </p>
                </div>
                <div className='w-full sm:w-[400px] h-[280px] bg-[#F1F3F8] p-4 rounded-md'>
                    <MdOutlineFlag className='text-6xl text-[#325AAB] mb-4' />
                    <h1 className='text-2xl font-bold mb-4'>Mission</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
                    </p>
                </div>
            </div><br /><br /><br />
        </div>
    );
};

export default About;
