import gate from '../assets/gate2.png';
import { BsArrowDownCircleFill } from 'react-icons/bs';
import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';

import logo from '../assets/logo.png'
import DragAndDrop from './dragDrop'



const Apply = () => {
 

  return (
    <div>
      <div className="relative">
        <div>
          <img src={gate} alt="" className="h-[350px] w-[100vw]" />
        </div>
        <div className="absolute top-[30%] right-[10%] md:right-[15%] lg:right-[30%] text-center md:text-left">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-white">
            Apply to <span className="font-extrabold text-5xl md:text-6xl lg:text-7xl">Saint Leon</span>
          </h1>
          <p className="text-white mt-4 md:pl-20 lg:pl-56">
            Fill the application form
          </p>
          <BsArrowDownCircleFill className="text-white text-3xl mt-8 mx-auto md:mx-66 hover:translate-y-2" />
        </div>
      </div><br />
      
      <div className='flex justify-center flex-col text-center relative'>
  <h1 className='text-[#325AAB] text-2xl font-extrabold'>LOREM IPSUM</h1>
  <h3 className='text-black font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing eli</h3>
  <p className='text-1xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Sed non risus. Suspendisse lectus tortor</p>
</div><br />

<form className="mx-auto">
  <div className='flex flex-col md:flex-row justify-center gap-6 mb-4'>
    <div className="flex flex-col">
      <label htmlFor="firstName" className="mb-1 font-extrabold text-[#325AAB]">First Name</label>
      <input type="text" id="firstName" className="mt-1 p-2 border border-gray-300 rounded w-full md:w-[412px] sm:w-full" placeholder="Enter your First name" />
    </div>
    <div className="flex flex-col">
      <label htmlFor="lastName" className="mb-1 font-extrabold text-[#325AAB]">Last Name</label>
      <input type="text" id="lastName" className="mt-1 p-2 border border-gray-300 rounded w-full md:w-[412px] sm:w-full" placeholder="Enter your Last name" />
    </div>
  </div>

  <div className='flex justify-center mb-4'>
    <div className="flex flex-col w-full md:w-[850px]">
      <label htmlFor="email" className="mb-1 font-extrabold text-[#325AAB]">Email</label>
      <input type="text" id="email" className="mt-1 p-2 border border-gray-300 rounded w-full" placeholder="Enter your Email address" />
    </div>
  </div>

  <div className='flex justify-center mb-4'>
    <div className="flex flex-col w-full md:w-[850px]">
      <label htmlFor="phone" className="mb-1 font-extrabold text-[#325AAB]">Phone Number</label>
      <input type="text" id="phone" className="mt-1 p-2 border border-gray-300 rounded w-full" placeholder="Enter your Phone number" />
    </div>
  </div>

  <div className='flex justify-center mb-4'>
    <div className="flex flex-col w-full md:w-[850px]">
      <label htmlFor="homeAddress" className="mb-1 font-extrabold text-[#325AAB]">Home Address</label>
      <select id="homeAddress" className="mt-1 p-2 border border-gray-300 rounded w-full">
        <option value="South">South</option>
        <option value="North">North</option>
        <option value="West">West</option>
        <option value="East">East</option>
        <option value="Kigali City">Kigali City</option>
      </select>
    </div>
  </div>

  <div className='flex justify-center mb-4'>
    <div className="flex flex-col w-full md:w-[850px]">
      <label htmlFor="province" className="mb-1 font-extrabold text-[#325AAB]">Province</label>
      <select id="province" className="mt-1 p-2 border border-gray-300 rounded w-full">
        <option value="Huye">Huye</option>
        <option value="Nyanza">Nyanza</option>
        <option value="Muhanga">Muhanga</option>
        <option value="Ruhango">Ruhango</option>
        <option value="Kamonyi">Kamonyi</option>
      </select>
    </div>
  </div>

  <div className='flex flex-col md:flex-row justify-center gap-6 mb-4'>
    <div className="flex flex-col">
      <label htmlFor="sector" className="mb-1 font-extrabold text-[#325AAB]">Sector</label>
      <input type="text" id="sector" className="mt-1 p-2 border border-gray-300 rounded w-full md:w-[410px] sm:w-full" placeholder="Enter your Sector" />
    </div>
    <div className="flex flex-col">
      <label htmlFor="cell" className="mb-1 font-extrabold text-[#325AAB]">Cell</label>
      <input type="text" id="cell" className="mt-1 p-2 border border-gray-300 rounded w-full md:w-[410px] sm:w-full" placeholder="Enter your Cell" />
    </div>
  </div>

  <div className='flex justify-center mb-4'>
    <div className="flex flex-col w-full md:w-[850px]">
      <label htmlFor="village" className="mb-1 font-extrabold text-[#325AAB]">Village</label>
      <input type="text" id="village" className="mt-1 p-2 border border-gray-300 rounded w-full" placeholder="Enter your Village" />
    </div>
  </div>

  <div className="flex flex-col md:flex-row justify-center gap-6 mb-4">
    <div className="flex flex-col">
      <label htmlFor="dragDropArea1" className="mb-1 font-extrabold text-[#325AAB]">
        Applicant P6 result slip
      </label>
      <DragAndDrop />
    </div>
    <div className="flex flex-col">
      <label htmlFor="dragDropArea2" className="mb-1 font-extrabold text-[#325AAB]">
        Baptism card
      </label>
      <DragAndDrop />
    </div>
  </div>

  <div className='flex justify-center'>
    <button type="submit" className="px-4 py-2 w-full md:w-[850px] bg-[#325AAB] text-white rounded mt-4">
      Submit
    </button>
  </div><br />

</form>

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
  )}
  export default Apply