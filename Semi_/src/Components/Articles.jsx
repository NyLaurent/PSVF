import gate from '../assets/article.png'
import { IoCalendarNumber } from "react-icons/io5";

const Articles = () => {
  return (
    <div>

<div className="relative">
        <div>
          <img src={gate} alt="" className="h-[400px] w-full" />
        </div>
        <div className="absolute top-[70%]  sm:left-[10%] lg:left-[1%] text-center md:text-left">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-white">
            Saint Leon  <span className="font-extrabold text-5xl md:text-6xl lg:text-7xl">News & Articles</span>
          </h1>
          
         
        </div>
      </div><br /><br />

     <div className='flex flex-row justify-evenly'>
     <div>
        <h1 className='text-3xl font-bold'>
        Seminaire Saint-Leon student rank TOP 10 <br /> in National Exam.
        </h1>
        <div className=" w-full">
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
  <div className="flex">
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
  <div className="flex ">
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

      <div className='w-[500px] h-[450px] border-4 border-red-200 px-8 rounded-sm'>
        
        <div>
        <h1 className='font-bold text-2xl px-3'>More news</h1>
        </div><br />
        
       
       <div className='flex flex-col gap-6'>
       
       <div className='flex flex-row gap-2'>
        <div>
            <img src={gate} alt="" className='w-[180px] rounded-sm' />
        </div>
        <div></div>
        <div>
            <p className='font-semibold pb-1'>Lorem ipsum dolor sit <br />amet,consectetur</p>
            <div className='flex gap-1 flex-row'>
            <IoCalendarNumber/> March 2023
            </div>

        </div>
        </div>
        <div className='flex flex-row gap-2'>
        <div>
            <img src={gate} alt="" className='w-[180px] rounded-sm' />
        </div>
        <div></div>
        <div>
            <p className='font-semibold pb-1'>Lorem ipsum dolor sit <br />amet,consectetur</p>
            <div className='flex gap-1 flex-row '>
            <IoCalendarNumber/> March 2023
            </div>

        </div>
        </div>
        <div className='flex flex-row gap-2'>
        <div>
            <img src={gate} alt="" className='w-[180px] rounded-sm' />
        </div>
        <div></div>
        <div>
            <p className='font-semibold pb-1'>Lorem ipsum dolor sit <br />amet,consectetur</p>
            <div className='flex gap-1 flex-row '>
            <IoCalendarNumber/> March 2023
            </div>

        </div>
        </div>
        <div className='flex flex-row gap-2'>
        <div>
            <img src={gate} alt="" className='w-[180px] rounded-sm' />
        </div>
        <div></div>
        <div>
            <p className='font-semibold pb-1'>Lorem ipsum dolor sit <br />amet,consectetur</p>
            <div className='flex gap-1 flex-row '>
            <IoCalendarNumber/> March 2023
            </div>

        </div>
        </div>
       </div>
       

      </div>
     </div>
    </div>
  )
}

export default Articles