// import { BsArrowDownCircleFill } from 'react-icons/bs';
// import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';
// import gate from '../assets/gate2.png';
// import Church from '../assets/gate2.png'
// import logo from '../assets/logo.png'
// const History = () => {
//   return (
//     <div>
//         <div className="relative">
//         <div>
//           <img src={gate} alt="" className="h-[350px] w-[100vw]" />
//         </div>
//         <div className="absolute top-[30%] right-[10%] md:right-[15%] lg:right-[30%] text-center md:text-left">
//           <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-white">
//             History of  <span className="font-extrabold text-5xl md:text-6xl lg:text-7xl">Saint Leon</span>
//           </h1>
//           <p className="text-white mt-4 md:pl-20 lg:pl-56">
//           Get to know more about our Seminary
//           </p>
//           <BsArrowDownCircleFill className="text-white text-3xl mt-8 mx-auto md:mx-66 hover:translate-y-2" />
//         </div>
//       </div><br />
//       <div className='flex justify-center '>
//         <h1 className='text-2xl text-[#325AAB] font-extrabold'>
//         A History of minor Seminary <br />
//        <span className=''> Saint-Leon</span>
//         </h1>
//       </div><br />

//       <div className='flex flex-col'>
//         <div className='justify-center flex'>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, <br />
//         ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a,<br />
//       semper congue, euismod non, mi. Proin porttitor, orci nec nonummy <br />
//       molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. <br />
//        Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. <br />
//         Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. <br />
//        Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante <br />
//        ipsum primis in faucibus orci luctus et ultrices <br /> posuere cubilia Curae; Aliquam nibh. <br />
//         Mauris ac mauris sed <br />
//      pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.</p>
//         </div><br />
//         <div className='w-[1000px] ml-[20%] flex justify-center'>
//         <img src={Church}  alt=""   />
//         </div><br />
//         <div className='justify-center flex'>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, <br />
//         ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a,<br />
//       semper congue, euismod non, mi. Proin porttitor, orci nec nonummy <br />
//       molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. <br />
//        Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. <br />
//         Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. <br />
//        Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante <br />
//        ipsum primis in faucibus orci luctus et ultrices <br /> posuere cubilia Curae; Aliquam nibh. <br />
//         Mauris ac mauris sed <br />
//      pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.</p>
//         </div><br /><br />
//         <div className='justify-center flex'>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, <br />
//         ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a,<br />
//       semper congue, euismod non, mi. Proin porttitor, orci nec nonummy <br />
//       molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. <br />
//        Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. <br />
//         Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. <br />
//        Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante <br />
//        ipsum primis in faucibus orci luctus et ultrices <br /> posuere cubilia Curae; Aliquam nibh. <br />
//         Mauris ac mauris sed <br />
//      pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.</p>
//         </div><br />
    
    
      
//       </div>
//       <footer className='bg-[#325AAB] text-white font-light p-5'>
//         <div className='flex flex-col md:flex-row justify-evenly items-center md:items-start'>
//           <div className='text-center md:text-left mb-4 md:mb-0'>
//             <img src={logo} alt="" className="mx-auto md:mx-0" />
//             <p className='text-[10px] mt-2'>PETIT SEMINAIRE <br /> SAINT-LEON DE KABGAYI</p>
//             <ul className='flex justify-center md:justify-start gap-4 mt-2'>
//               <li><FaInstagram /></li>
//               <li><FaFacebook /></li>
//               <li><FaEnvelope /></li>
//               <li><FaInstagram /></li>
//             </ul>
//           </div>
//           {[1, 2, 3].map((num) => (
//             <div key={num} className='text-center md:text-left mb-4 md:mb-0'>
//               <h1 className='font-extrabold'>Lorem ipsum</h1>
//               <ul className='flex flex-col'>
//                 <li>Lorem ipsum</li>
//                 <li>Lorem ipsum</li>
//                 <li>Lorem ipsum</li>
//               </ul>
//             </div>
//           ))}
//         </div>
//       </footer>
//     </div>
//   )
// }

// export default History

import { BsArrowDownCircleFill } from 'react-icons/bs';
import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';
import gate from '../assets/gate2.png';
import Church from '../assets/gate2.png'
import logo from '../assets/logo.png'

const History = () => {
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
          <BsArrowDownCircleFill className="text-white text-3xl mt-8 mx-auto md:mx-0 hover:translate-y-2" />
        </div>
      </div><br />
      <div className='flex justify-center'>
        <h1 className='text-2xl text-[#325AAB] font-extrabold'>
          A History of minor Seminary <br />
          <span className=''> Saint-Leon</span>
        </h1>
      </div><br />

      <div className='flex flex-col'>
        <div className='flex justify-center'>
          <p className='text-center sm:text-left'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, <br />
            ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a,<br />
            semper congue, euismod non, mi. Proin porttitor, orci nec nonummy <br />
            molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. <br />
            Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. <br />
            Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. <br />
            Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante <br />
            ipsum primis in faucibus orci luctus et ultrices <br /> posuere cubilia Curae; Aliquam nibh. <br />
            Mauris ac mauris sed <br />
            pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
          </p>
        </div><br />
        <div className='w-full flex justify-center'>
          <img src={Church} alt="" className='max-w-full lg:w-[920px]' />
        </div><br />
        <div className='flex justify-center'>
          <p className='text-center sm:text-left'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, <br />
            ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a,<br />
            semper congue, euismod non, mi. Proin porttitor, orci nec nonummy <br />
            molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. <br />
            Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. <br />
            Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. <br />
            Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante <br />
            ipsum primis in faucibus orci luctus et ultrices <br /> posuere cubilia Curae; Aliquam nibh. <br />
            Mauris ac mauris sed <br />
            pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
          </p>
        </div><br /><br />
        <div className='flex justify-center'>
          <p className='text-center sm:text-left'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, <br />
            ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a,<br />
            semper congue, euismod non, mi. Proin porttitor, orci nec nonummy <br />
            molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. <br />
            Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. <br />
            Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. <br />
            Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante <br />
            ipsum primis in faucibus orci luctus et ultrices <br /> posuere cubilia Curae; Aliquam nibh. <br />
            Mauris ac mauris sed <br />
            pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
          </p>
        </div><br />
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

export default History






