import People from '../../assets/people.png'
import { FaArrowRight } from "react-icons/fa";
import Gang from '../../assets/newPics/gang.jpg'
import joy from '../../assets/newPics/joy.jpg'
import zigzag from '../../assets/Group 99.png'
import { Link } from 'react-router-dom'

const News = () => {
  const images = [People, Gang, joy];

  const NewsItem = ({ num, index }) => (
    <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} justify-around items-center relative 
      ${index === 0 ? 'bottom-[920px] left-32' : index === 1 ? 'left-40 bottom-[850px]' : index === 2 ? 'bottom-[790px] left-32' : 'bottom-[680px] left-40'} mb-8`}>
      <div className='md:w-1/3 p-4'>
        <h2 className='text-lg font-extrabold text-[#325AAB]'>
          {index === 0 ? 'Community Garden Initiative Launched' :
            index === 1 ? 'Local School Wins National Award' :
              index === 2 ? 'Charity Run Raises $10,000 for Local Shelter' :
                'New Park Opens in Downtown Area'}
        </h2>
        <p className='font-light'>
          {index === 0 ? 'Join us in our new community garden project aimed at promoting sustainability and local food production.' :
            index === 1 ? 'Our local school has been recognized for its outstanding educational programs and achievements in the national competition.' :
              index === 2 ? 'Thanks to our generous community, we successfully raised funds to support the local shelter and its initiatives.' :
                'The new park features walking trails, playgrounds, and picnic areas for families to enjoy.'}
        </p>
      </div>
      <div className='md:w-1/4 text-center'>
        <h1 className='text-8xl font-extrabold text-[#c4c7cf]'>{`0${num}`}</h1>
      </div>
    </div>
  );

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

      <div className='text-center mb-8 max-w-xl mx-auto'>
        <h1 className='text-[#325AAB] font-extrabold text-2xl'>Community Spotlight</h1><br />
        <p className='font-bold text-xl mb-4'>Celebrating Our Local Heroes</p>
        <p>In our community, we are proud to highlight the incredible contributions of local individuals and organizations. From volunteers who dedicate their time to help those in need, to businesses that support local initiatives, their efforts make a significant impact. Join us in recognizing these heroes and their commitment to making our community a better place for everyone.</p>
      </div>

      <div className='pl-[165px] mb-8 hidden md:block'>
        <img src={zigzag} alt="" width={600} />
      </div>

      {[1, 2, 3, 4].map((num, index) => (
        <NewsItem num={num} index={index} />
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
