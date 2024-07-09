



import gate from '../assets/article.png'
import { IoCalendarNumber } from "react-icons/io5";
import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';
import logo from '../assets/logo.png'

const Articles = () => {
  return (
    <div>
      <div className="relative">
        <div>
          <img src={gate} alt="" className="h-[400px] w-full" />
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
            Seminaire Saint-Leon student rank TOP 10 <br /> in National Exam.
          </h1>
          <div className="w-full mt-4">
            <p className="text-center sm:text-left leading-relaxed">
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
          </div>
          <br /><br />
          <div className="flex mt-4">
            <p className="text-center sm:text-left leading-relaxed">
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
          </div>
          <br /><br />
          <div className="flex mt-4">
            <p className="text-center sm:text-left leading-relaxed">
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
          </div>
        </div>

        <div className='w-[500px]  md:w-[400px] h-[560px] border-4 border-[#80838a] px-8 rounded-md'>
          <div>
            <h1 className='font-bold text-2xl px-3'>More news</h1>
          </div>
          <br />

          <div className='flex flex-col gap-6'>
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className='flex flex-row gap-2'>
                <div>
                  <img src={gate} alt="" className='w-[180px] rounded-sm' />
                </div>
                <div>
                  <p className='font-semibold pb-1'>Lorem ipsum dolor sit <br />amet,consectetur</p>
                  <div className='flex gap-1 flex-row'>
                    <IoCalendarNumber /> March 2023
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className='bg-[#325AAB] text-white font-light p-5 mt-10'>
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
  )
}

export default Articles










