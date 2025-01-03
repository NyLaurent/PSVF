import { BsArrowDownCircleFill } from 'react-icons/bs';
import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';
import { FaLongArrowAltLeft } from "react-icons/fa";
import gate from '../../assets/gate2.png';
import Church from '../../assets/newPics/priest.jpg'
import Footer from '../Landing Page/Footer';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'


const History = () => {
  return (
    <div>
      <div className="relative">
        <div>
          <img src={gate} alt="" className="h-[350px] w-full" />
        </div>
        <div className="absolute top-4 left-4 text-white">
          <Link to={'/'}>
            <FaLongArrowAltLeft className="text-3xl cursor-pointer" />
          </Link>

        </div>

        <div className="absolute top-[30%] right-[10%] sm:right-[15%] lg:right-[30%] text-center md:text-left">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-white">
            History of <span className="font-extrabold text-5xl md:text-6xl lg:text-7xl text-fill-transparent text-stroke">Saint Leon</span>
          </h1>
          <p className="text-white mt-4 md:pl-20 lg:pl-56">
            Get to know more about our Seminary
          </p>
          <BsArrowDownCircleFill className='text-white text-3xl mt-8 mx-auto md:mx-66 hover:translate-y-2' />
        </div>
      </div><br />
      <div className='flex justify-center'>
        <h1 className='text-2xl text-[#325AAB] font-extrabold'>
          A History of minor Seminary <br />




          <span className=''> Saint-Leon</span>
        </h1>
      </div><br />

      <div className='flex flex-col'>
        <div className="flex justify-center w-full px-4">
          <p className="text-center sm:text-left max-w-4xl leading-relaxed">
            The Saint Leon Seminary was established in 1890, with the mission of providing a comprehensive education to young men aspiring to serve in the clergy. Over the years, it has evolved into a center of excellence, fostering spiritual growth and academic achievement.
          </p>
        </div>
        <div className='w-full flex justify-center'>
          <img src={Church} alt="" className='max-w-full lg:w-[500px] h-[500px]' />
        </div>
        <div className="flex justify-center w-full px-4">
          <p className="text-center sm:text-left max-w-4xl leading-relaxed">
            Throughout its history, the seminary has adapted to the changing needs of the Church and society. It has produced numerous influential leaders who have made significant contributions to their communities and the broader Church.
          </p>
        </div>
        <div className="flex justify-center w-full px-4">
          <p className="text-center sm:text-left max-w-4xl leading-relaxed mb-8">
            Today, the Saint Leon Seminary continues to uphold its commitment to excellence in education, providing a nurturing environment for the next generation of clergy. With a focus on both academic rigor and spiritual formation, it remains a beacon of hope and guidance for many.
          </p>
        </div>
      </div>



      <Footer></Footer>
    </div>
  )
}

export default History






