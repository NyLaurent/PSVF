import gate from '../../assets/article.png'
import { IoCalendarNumber } from "react-icons/io5";
import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';
import { FaLongArrowAltLeft } from "react-icons/fa";
import logo from '../../assets/logo.png'
import Footer from '../Landing Page/Footer';
import one from '../../assets/newPics/image.png'
import joy from '../../assets/newPics/joy.jpg'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';

const Articles = () => {
  const [currentImage, setCurrentImage] = useState(gate);
  const images = [gate, joy, one];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => {
        const currentIndex = images.indexOf(prev);
        return images[(currentIndex + 1) % images.length];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div>
      <div className="relative">
        <div>
          <img src={currentImage} alt="" className="h-[400px] w-full opacity-100" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="absolute top-4 left-4 text-white">
          <Link to={'/'}>
            <FaLongArrowAltLeft className="text-3xl cursor-pointer" />
          </Link>

        </div>
        <div className="absolute top-[70%] left-[10%] lg:left-[5%] text-center md:text-left">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-white">
            Saint Leon <span className="font-extrabold text-5xl md:text-6xl lg:text-7xl text-fill-transparent text-stroke">News & Articles</span>
          </h1>
        </div>
      </div>
      <br /><br />

      <div className='flex flex-col flex-wrap md:flex-row justify-center md:justify-evenly'>
        <div className='w-full md:w-3/5 p-4'>
          <h1 className='text-3xl font-bold'>
            Seminaire Saint-Leon student ranks in the TOP 10 in the National Exam.
          </h1>
          <div className="w-full mt-2">
            <p className="text-center sm:text-left leading-relaxed">
              Our students have demonstrated exceptional performance in the recent National Exam, showcasing their dedication and hard work. We are proud of their achievements and commitment to excellence. The Seminaire Saint-Leon community continues to thrive, with students actively participating in various extracurricular activities that enhance their learning experience and personal growth.
            </p>
          </div>
          <div className="flex mt-2">
            <p className="text-center sm:text-left leading-relaxed">
              We invite parents and guardians to join us for our upcoming open house, where you can learn more about our programs and meet our dedicated staff. Together, we can foster an environment of learning and growth for our students.
            </p>
          </div>
        </div>

        <div className='w-full max-w-[500px] md:w-[400px] h-[560px] border-4 border-[#80838a] px-4 md:px-8 rounded-md overflow-y-auto'>
          <div>
            <h1 className='font-bold text-2xl px-3'>More news</h1>
          </div>
          <br />

          <div className='flex flex-col gap-4'>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div key={num} className='flex flex-row gap-2 border-b border-gray-300 pb-2 hover:bg-gray-100 transition duration-200 p-2 rounded-md'>
                <div className='flex-shrink-0'>
                  <img src={gate} alt="" className='w-[100px] md:w-[150px] rounded-md shadow-lg' />
                </div>
                <div className='flex-grow'>
                  <p className='font-semibold text-md'> - Student Achievements</p>
                  <div className='flex gap-1 flex-row text-gray-600 text-sm'>
                    <IoCalendarNumber /> March 2023
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-8"></div>

      <Footer></Footer>
    </div>
  )
}

export default Articles