import People from '../../assets/people.png'
import { FaArrowRight } from "react-icons/fa";
import Gang from '../../assets/newPics/gang.jpg'
import joy from '../../assets/newPics/joy.jpg'
import zigzag from '../../assets/Group 99.png'
import { Link } from 'react-router-dom'

const News = () => {
  const images = [People, Gang, joy];

  return (
    <div className="p-4" id='about'>
      <div className='text-center mb-8'>
        <h1 className='text-[#325AAB] font-extrabold text-2xl'>NEWS & ARTICLES</h1><br />
        <p className='font-bold text-xl'>Stay updated with the latest news and articles from our community.</p>
      </div>

      <div className='flex flex-col md:flex-row justify-evenly mb-8 gap-8'>
        {images.map((image, index) => (
          <div key={index} className='flex flex-col items-center'>
            <div className='w-full md:w-[420px] rounded-md overflow-hidden relative transition-transform duration-300 hover:scale-105'>
              <img src={image} alt="" className="object-cover w-full h-[250px]" />
              <div className='h-[165px] bg-[#F1F3F8] rounded-lg p-4 mt-0 shadow-md'>
                <h2 className='text-lg font-bold'>Latest Update: Seminaire Saint-Leon student ranks TOP 10 in National Exam.</h2><br />
                <Link to={'/Articles'} className="w-full md:w-40 h-11 bg-[#325AAB] text-white font-semibold rounded-lg shadow-md flex justify-center items-center hover:bg-[#1e4a8d]">
                  <span className='flex gap-4 items-center'>Read more <FaArrowRight /></span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='text-center mb-8'>
        <h1 className='text-[#325AAB] font-extrabold text-2xl'>LOREM IPSUM</h1><br />
        <p className='font-bold text-xl mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing eli</p>
        <p>Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,<br /> ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa,<br />
          varius a, semper congue, euismod non, mi.</p>
      </div>

      <div className='flex justify-center mb-8'>
        <img src={zigzag} alt="" />
      </div>

      {[1, 2, 3, 4].map((num, index) => (
        <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} justify-around items-center mb-8`}>
          <div className='md:w-1/2 p-4'>
            <h2 className='text-2xl font-bold text-[#325AAB]'>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing eli</h2>
            <p className='font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Sed non risus. Suspendisse lectus tortor, dignissim sit amet,<br /> adipiscing nec, ultricies sed, dolo</p>
          </div>
          <div className='md:w-1/4 text-center'>
            <h1 className='text-8xl font-extrabold text-[#c4c7cf]'>{`0${num}`}</h1>
          </div>
        </div>
      ))}

      <div className='text-center mb-8'>
        <h1 className='text-[#325AAB] font-extrabold text-2xl'>NEWS & ARTICLES</h1><br />
        <p className='font-bold text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing eli <br /> Lorem ipsum dolor sit amet</p>
      </div>
      <div id='pricing'>
        <form>
          <div className='flex flex-col md:flex-row justify-center gap-12 mb-4'>
            <input type="text" className="mt-1 p-2 border border-gray-300 rounded w-full md:w-[400px]" placeholder="Full names" />
            <input type="text" className="mt-1 p-2 border border-gray-300 rounded w-full md:w-[400px]" placeholder="Email address" />
          </div>

          <div className='flex justify-center mb-4'>
            <input type="text" className="mt-1 p-2 border border-gray-300 rounded w-full md:w-[850px]" placeholder="Email address" />
          </div>

          <div className='flex justify-center mb-4'>
            <textarea id="textBox" className="mt-1 p-2 border border-gray-300 rounded w-full md:w-[850px] h-[200px]" rows="4" placeholder="Enter additional information"></textarea>
          </div>

          <div className='flex justify-center'>
            <button type="submit" className="px-4 py-2 w-full md:w-[850px] bg-blue-500 text-white font-semibold rounded shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Submit
            </button>
          </div>
        </form><br /><br /><br /><br />
      </div>
    </div>
  )
}

export default News
