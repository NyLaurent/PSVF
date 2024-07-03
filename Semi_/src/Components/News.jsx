import React from 'react'
import People from '../assets/people.png'
import { FaArrowRight } from "react-icons/fa";

const News = () => {
  return (
    <div>
         <div className=' justify-center text-center'>
                <h1 className='text-[#325AAB] font-extrabold text-2xl'>NEWS & ARTICLES</h1><br />
                <p className='font-bold text-1.5xl'>Lorem ipsum dolor sit amet, consectetur adipiscing eli</p>
            </div><br />


            <div className='flex flex-row justify-evenly'>
                <div className=''>
                    <img src={People} alt="" />
                    <div className='w-[420px] h-[150px] bg-[#F1F3F8] rounded-lg p-2 '>
                    <h2 className='text-2xl font-bold'>Seminaire Saint-Leon student ranks <br />
                    TOP 10 in National Exam.</h2><br />
                    <a href="#" className=" justify-evenly w-40 h-11 bg-[#325AAB] text-white
                            font-semibold rounded-lg  shadow-md flex ">
            <span className='flex gap-4 pt-2'>Read more <FaArrowRight /> </span></a>
                    </div>
                    
                </div>
                <div className=''>
                    <img src={People} alt="" />
                    <div className='w-[420px] h-[150px] bg-[#F1F3F8] rounded-lg p-2 '>
                    <h2 className='text-2xl font-bold'>Seminaire Saint-Leon student ranks <br />
                    TOP 10 in National Exam.</h2><br />
                    <a href="#" className=" justify-evenly w-40 h-11 bg-[#325AAB] text-white
                            font-semibold rounded-lg  shadow-md flex ">
            <span className='flex gap-4 pt-2'>Read more <FaArrowRight /> </span></a>
                    </div>
                    
                </div>
                <div className=''>
                    <img src={People} alt="" />
                    <div className='w-[420px] h-[150px] bg-[#F1F3F8] rounded-lg p-2 '>
                    <h2 className='text-2xl font-bold'>Seminaire Saint-Leon student ranks <br />
                    TOP 10 in National Exam.</h2><br />
                    <a href="#" className=" justify-evenly w-40 h-11 bg-[#325AAB] text-white
                            font-semibold rounded-lg  shadow-md flex ">
            <span className='flex gap-4 pt-2'>Read more <FaArrowRight /> </span></a>
                    </div>
                    
                </div>
            </div><br /><br />
            <div className=' justify-center text-center'>
                <h1 className='text-[#325AAB] font-extrabold text-2xl'>LOREM IPSUM</h1><br />
                <p className='font-bold text-1.5xl'>Lorem ipsum dolor sit amet, consectetur adipiscing eli</p><br />
                <p>Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,<br />
                 ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, <br />
                  varius a, semper congue, euismod non, mi.</p>
            </div><br />

            <br />
            <div className='flex flex-row justify-around'>
                <div>
                    <h2 className='text-2xl font-bold text-[#325AAB]'>Lorem ipsum dolor sit amet, consectetur <br />
                    adipiscing eli</h2>
                    <p className='font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. <br />
                     Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,<br />
                    ultricies sed, dolo</p>
                </div>
                <div>
                    <h1 className='text-8xl font-extrabold text-[#c4c7cf]'>01</h1>
                </div>
            </div><br /><br /><br />
            <div className='flex flex-row-reverse justify-around'>
                <div>
                    <h2 className='text-2xl font-bold text-[#325AAB]'>Lorem ipsum dolor sit amet, consectetur <br />
                    adipiscing eli</h2>
                    <p className='font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. <br />
                     Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,<br />
                    ultricies sed, dolo</p>
                </div>
                <div>
                    <h1 className='text-8xl font-extrabold text-[#c4c7cf]'>02</h1>
                </div>
            </div><br /><br />
            <div className='flex flex-row justify-around'>
                <div>
                    <h2 className='text-2xl font-bold text-[#325AAB]'>Lorem ipsum dolor sit amet, consectetur <br />
                    adipiscing eli</h2>
                    <p className='font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. <br />
                     Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,<br />
                    ultricies sed, dolo</p>
                </div>
                <div>
                    <h1 className='text-8xl font-extrabold text-[#c4c7cf]'>03</h1>
                </div>
            </div><br /><br />
            <div className='flex flex-row-reverse justify-around'>
                <div>
                    <h2 className='text-2xl font-bold text-[#325AAB]'>Lorem ipsum dolor sit amet, consectetur <br />
                    adipiscing eli</h2>
                    <p className='font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. <br />
                     Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,<br />
                    ultricies sed, dolo</p>
                </div>
                <div>
                    <h1 className='text-8xl font-extrabold text-[#c4c7cf]'>04</h1>
                </div>
            </div><br /><br />
            <div className=' justify-center text-center'>
                <h1 className='text-[#325AAB] font-extrabold text-2xl'>NEWS & ARTICLES</h1><br />
                <p className='font-bold text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing eli <br />
                Lorem ipsum dolor sit amet</p>
            </div><br />
            <br />

            <form action="">
                <div className='flex justify-center gap-12'>
                <div className="mb-4">
          <input
            type="text"
            className="mt-1 p-2 border border-gray-300 rounded w-[400px]"
            placeholder="Full names"
          />
        </div>
        <div className=''>
        <input
            type="text"
            className="mt-1 p-2 border border-gray-300 rounded w-[400px]"
            placeholder="Email adress"
          />
        </div>
                </div>

                <div className='flex justify-center'>
                <input
            type="text"
            className="mt-1 p-2 border border-gray-300 rounded w-[850px]"
            placeholder="Email adress"
          />
                </div><br />

                <div className='flex justify-center'>
                <textarea
            id="textBox"
            className="mt-1 p-2 border border-gray-300 rounded w-[850px] h-[200px]"
            rows="4"
            placeholder="Enter additional information"
          ></textarea>
                </div><br />
                <div className='flex justify-center'>
                <button
            type="submit"
            className="px-4 py-2 w-[850px] bg-blue-500 text-white font-semibold rounded shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Submit
          </button>
                </div>
      
      </form><br /><br /><br /><br />
           
    </div>


  )
}

export default News