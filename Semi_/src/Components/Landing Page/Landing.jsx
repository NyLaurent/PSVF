import About from './About'
import Footer from './Footer'
import Navbar from './Navbar'
import News from './News'


const Landing = () => {
  return (
    <div>
        <Navbar></Navbar>
        <About/>
        <News></News>
        <Footer/>
    </div>
  )
}

export default Landing