import React from 'react';
import { FaCircleCheck } from "react-icons/fa6";
import house from '../assets/house.png'
import { FaArrowRight } from "react-icons/fa";
import About1 from '../assets/about1.png';
import About2 from '../assets/about2.png'
import { MdOutlineFlag } from 'react-icons/md'

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

            <div className='flex flex-row justify-evenly'>
                <div>
                <img src={house} alt="" className='w-[700px] rounded-lg ' />
                </div>
                <div >
                    <h1 className='text-[#325AAB] font-extrabold text-4xl'>ABOUT US</h1><br />
                    <h3 className='font-bold text-2xl'>Get to know more about our seminary</h3><br />
                    <p>Petit Seminare Saint Leon Kabgayi is a distinguished educational <br />
                        institution known for its commitment to academic excellence and <br />
                         holistic development. Located in Kabgayi, it has a rich history of <br />
                          nurturing students both academically and morally. The school fosters
                         a  <br />conducive learning environment, encouraging intellectual 
                         growth and <br /> character formation.</p><br /> <br />
                         <p>With a dedicated faculty and modern facilities, Petit Seminare <br />
                          Saint Leon Kabgayi is a beacon of educational quality,<br />
                           consistently producing well-rounded individuals who excel in <br />
                           various field</p>

                           <div className='pt-10'>
                            <div className=''>
                            <a href="#" className=" justify-evenly w-40 h-11 bg-[#325AAB] text-white
                            font-semibold rounded-lg  shadow-md flex ">
            <span className='flex gap-4 pt-2'>Read more <FaArrowRight /> </span></a>
            
                            </div>
                          
       
                           </div>
                </div>
               
              
            </div>
            <div className='flex flex-row justify-evenly'>
            <div className='pt-7 pr-14'>
                        <h1 className='text-[#325AAB] font-extrabold text-2xl'>LOREM IPSUM</h1><br />
                        <h3 className='font-bold text-1.5xl'>Lorem ipsum dolor sit amet, consectetur adipiscing eli</h3><br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse <br />
                         lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum  <br />
                         ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.</p><br /> <br />

                         <p>
                         Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam <br />
                         nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, <br />
                          pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras <br />
                           vestibulum bibendum augue. Praesent egestas leo in pede.
                         </p><br /><br />

                         <p> Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam <br />
                          nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, <br />
                           pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras <br />
                           vestibulum bibendum augue. Praesent egestas leo in pede</p>
                    </div>
                    <div>
                        <img src={About1} alt="" className='w-[400px]' />
                        <img src={About2} alt=""  className='w-[400px]'/>

                    </div>
            </div><br /><br />

            <div className=' justify-center text-center'>
                <h1 className='text-[#325AAB] font-extrabold text-2xl'>LOREM IPSUM</h1><br />
                <p className='font-bold text-1.5xl'>Lorem ipsum dolor sit amet, consectetur adipiscing eli</p>
            </div><br />

            <div className='w-screen h-[150px] bg-[#325AAB] flex justify-evenly'>
                <div className='pt-9'>
                    <h1 className='text-white text-5xl font-extrabold'> + 50</h1>
                    <p className='text-white'>Years of foundation</p>
                </div>
                <div className='pt-9' >
                    <h1 className='text-white text-5xl font-extrabold'>+ 50</h1>
                    <p className='text-white'>Years of foundation</p>
                </div>
                <div className='pt-9'>
                    <h1 className='text-white text-5xl font-extrabold'>+ 50</h1>
                    <p className='text-white'>Years of foundation</p>
                </div>
                <div className='pt-9'>
                    <h1 className='text-white text-5xl font-extrabold'>+ 50</h1>
                    <p className='text-white'>Years of foundation</p>
                </div>

            </div><br /><br />
            <div className=' justify-center text-center'>
                <h1 className='text-[#325AAB] font-extrabold text-2xl'>LOREM IPSUM</h1><br />
                <p className='font-bold text-1.5xl'>Lorem ipsum dolor sit amet, consectetur adipiscing eli</p>
            </div><br />

            <div className='flex flex-row justify-evenly'>
                <div className='w-[400px] h-[280px] bg-[#F1F3F8] p-4 rounded-md'>
                <MdOutlineFlag className='text-6xl text-[#325AAB]'/>
                    <h1 className='text-2xl font-bold'>Mission</h1><br />
                    <p>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Sed non risus. Suspendisse 
                     lectus tortor, dignissim sit amet, adipiscing nec,
                      ultricies sed, dolor.</p>
                </div>
                <div className='w-[400px] h-[280px] bg-[#F1F3F8] p-4 rounded-md'>
                <MdOutlineFlag className='text-6xl text-[#325AAB]'/>
                    <h1 className='text-2xl font-bold'>Mission</h1><br />
                    <p>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Sed non risus. Suspendisse 
                     lectus tortor, dignissim sit amet, adipiscing nec,
                      ultricies sed, dolor.</p>
                </div>
                <div className='w-[400px] h-[280px] bg-[#F1F3F8] p-4 rounded-md'>
                <MdOutlineFlag className='text-6xl text-[#325AAB]'/>
                    <h1 className='text-2xl font-bold'>Mission</h1><br />
                    <p>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Sed non risus. Suspendisse 
                     lectus tortor, dignissim sit amet, adipiscing nec,
                      ultricies sed, dolor.</p>
                </div>
               
            </div>
           
       
        </div>
    );
};

export default About;
