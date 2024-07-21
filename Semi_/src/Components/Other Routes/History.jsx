import { BsArrowDownCircleFill } from 'react-icons/bs';
import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';
import { FaLongArrowAltLeft } from "react-icons/fa";
import gate from '../../assets/gate2.png';
import Church from '../../assets/gate2.png'
import logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'


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
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
      ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a,
      semper congue, euismod non, mi. Proin porttitor, orci nec nonummy
      molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper.
      Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue.
      Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.
      Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante
      ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh.
      Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
    </p>
  </div><br /><br />
  
        <div className='w-full flex justify-center'>
          <img src={Church} alt="" className='max-w-full lg:w-[900px]' />
        </div><br />
        <div className="flex justify-center w-full px-4">
    <p className="text-center sm:text-left max-w-4xl leading-relaxed">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
      ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a,
      semper congue, euismod non, mi. Proin porttitor, orci nec nonummy
      molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper.
      Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue.
      Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.
      Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante
      ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh.
      Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
    </p>
  </div><br /><br />
  <div className="flex justify-center w-full px-4">
    <p className="text-center sm:text-left max-w-4xl leading-relaxed">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
      ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a,
      semper congue, euismod non, mi. Proin porttitor, orci nec nonummy
      molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper.
      Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue.
      Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.
      Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante
      ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh.
      Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
    </p>
  </div><br /><br />
      </div>
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
              <ul className='flex flex-col cursor-pointer'>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </div>
  )
}

export default History






