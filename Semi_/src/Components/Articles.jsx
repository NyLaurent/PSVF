import gate from '../assets/gate2.png'
import { BsArrowDownCircleFill } from 'react-icons/bs';

const Articles = () => {
  return (
    <div>

<div className="relative">
        <div>
          <img src={gate} alt="" className="h-[350px] w-full" />
        </div>
        <div className="absolute top-[30%] right-[10%] sm:right-[15%] lg:right-[30%] text-center md:text-left">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-white">
            History of <span className="font-extrabold text-5xl md:text-6xl lg:text-7xl">Saint Leon</span>
          </h1>
          <p className="text-white mt-4 md:pl-20 lg:pl-56">
            Get to know more about our Seminary
          </p>
          <BsArrowDownCircleFill className='text-white text-3xl mt-8 mx-auto md:mx-66 hover:translate-y-2' />
        </div>
      </div>
    </div>
  )
}

export default Articles