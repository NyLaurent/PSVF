import { FaCircleCheck } from "react-icons/fa6";
import house from '../../assets/image.png'
import { FaArrowRight, FaBookOpen, FaUsers, FaHandsHelping } from "react-icons/fa";
import About1 from '../../assets/newPics/sport.png';
import About2 from '../../assets/about2.png'
import { MdOutlineFlag } from 'react-icons/md'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className="px-4" id='feature'>
            <div className='flex justify-center'>
                <div className='w-full sm:w-[700px] h-[58px] bg-white shadow-2xl relative bottom-6 rounded-lg'>
                    <ul className='flex flex-wrap justify-evenly pt-3'>
                        <li className='flex gap-2.5'><FaCircleCheck className='text-[#325AAB]' /> Ordinary level</li>
                        <li className='flex gap-2.5'><FaCircleCheck className='text-[#325AAB]' />Advanced level</li>
                        <li className='flex gap-2.5'><FaCircleCheck className='text-[#325AAB]' />Preparatoire</li>
                    </ul>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row  gap-9 justify-evenly'>
                <div className="flex justify-center lg:justify-start mb-8 lg:mb-0">
                    <img src={house} alt="" className='w-full lg:w-[700px] rounded-lg' />
                </div>
                <div className="lg:w-1/3 lg:ml-10">
                    <h1 className='text-[#325AAB] font-extrabold text-4xl mb-4'>ABOUT US</h1>
                    <h3 className='font-bold text-2xl mb-4'>Get to know more about our seminary</h3>
                    <p className='mb-4'>
                        Petit Seminare Saint Leon Kabgayi is a distinguished educational institution known for its commitment to academic excellence and holistic development. Located in Kabgayi, it has a rich history of nurturing students both academically and morally. The school fosters a conducive learning environment, encouraging intellectual growth and character formation.
                    </p>
                    <p className='mb-8'>
                        With a dedicated faculty and modern facilities, Petit Seminare Saint Leon Kabgayi is a beacon of educational quality, consistently producing well-rounded individuals who excel in various fields.
                    </p>
                    <Link to={'/History'} className=" px-4 py-2 cursor-pointer bg-[#325AAB] w-[200px] text-white font-semibold rounded-md shadow-md flex items-center gap-4  hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        Read more <FaArrowRight />
                    </Link>
                </div>
            </div>

            <div className='bg-gray-50 p-4 rounded-md mt-8'>
                <div className='flex flex-col lg:flex-row justify-evenly'>
                    <div className='lg:w-1/2 lg:pr-14 mb-8 lg:mb-0'>
                        <h1 className='text-[#325AAB] font-extrabold text-2xl mb-4'>OUR MISSION</h1>
                        <h3 className='font-bold text-xl mb-4'>Empowering students through quality education</h3>
                        <p className='mb-4'>
                            Our mission is to provide a nurturing environment that fosters academic excellence and personal growth, developing well-rounded individuals prepared for future challenges. We believe in character development alongside academic achievement, instilling values of integrity, respect, and responsibility. Through innovative teaching methods and a dedicated faculty, we inspire a love for learning and a commitment to lifelong education.
                        </p>
                        <p className='mb-4'>
                            Our commitment extends beyond the classroom, engaging with the community to promote social responsibility and active citizenship. We offer diverse extracurricular activities that encourage teamwork, leadership, and personal development, ensuring every student finds their passion while fostering a culture of inclusivity and respect.
                        </p>
                        <p>
                            Our vision is to be a leading institution in holistic education, preparing students not just academically, but also socially and emotionally for the world ahead. We aim to cultivate a community where students are encouraged to explore their interests, develop critical thinking skills, and engage in meaningful discussions. By fostering a culture of respect and inclusivity, we ensure that every student feels valued and empowered to contribute positively to society. Our commitment to continuous improvement and innovation in teaching practices will help us adapt to the ever-changing educational landscape, ensuring that our students are well-equipped to face future challenges with confidence and resilience.
                        </p>
                    </div>
                    <div className="flex flex-col items-center lg:items-start gap-4">
                        <img src={About1} alt="" className='w-full  lg:w-[400px] mb-4' />
                        <img src={About2} alt="" className='w-full lg:w-[400px]' />
                    </div>
                </div>
            </div>

            <div className='text-center mt-16'>
                <h1 className='text-[#325AAB] font-extrabold text-2xl mb-4'>OUR JOURNEY</h1>
                <p className='font-bold text-xl'>Celebrating over 50 years of fostering a culture of excellence, integrity, and respect among our students.</p>
            </div>

            <div className='w-full h-[150px] bg-[#325AAB] flex justify-evenly items-center mt-16'>
                <div className='text-center'>
                    <h1 className='text-white text-5xl font-extrabold'>+ 50</h1>
                    <p className='text-white'>Years of foundation</p>
                </div>
                <div className='text-center'>
                    <h1 className='text-white text-5xl font-extrabold'>+ 50</h1>
                    <p className='text-white'>Years of foundation</p>
                </div>
                <div className='text-center'>
                    <h1 className='text-white text-5xl font-extrabold'>+ 50</h1>
                    <p className='text-white'>Years of foundation</p>
                </div>
                <div className='text-center'>
                    <h1 className='text-white text-5xl font-extrabold'>+ 50</h1>
                    <p className='text-white'>Years of foundation</p>
                </div>
            </div>

            <div className='text-center mt-16'>
                <h1 className='text-[#325AAB] font-extrabold text-2xl mb-4'>OUR MISSIONS</h1>
                <p className='font-bold text-xl'>Guiding our students towards excellence, integrity, and respect.</p>
            </div>

            <div className='flex flex-wrap justify-evenly mt-16'>
                <div className='w-full sm:w-[400px] h-[280px] bg-[#F1F3F8] p-4 rounded-md mb-4 transition-transform transform hover:scale-105 hover:shadow-lg'>
                    <FaBookOpen className='text-6xl text-[#325AAB] mb-4' />
                    <h1 className='text-2xl font-bold mb-4'>Commitment to Learning</h1>
                    <p>
                        We are dedicated to fostering a love for learning, encouraging students to explore their interests and develop critical thinking skills.
                    </p>
                </div>
                <div className='w-full sm:w-[400px] h-[280px] bg-[#F1F3F8] p-4 rounded-md mb-4 transition-transform transform hover:scale-105 hover:shadow-lg'>
                    <FaUsers className='text-6xl text-[#325AAB] mb-4' />
                    <h1 className='text-2xl font-bold mb-4'>Building Community</h1>
                    <p>
                        We promote collaboration and teamwork, creating a supportive environment where every student feels valued and included.
                    </p>
                </div>
                <div className='w-full sm:w-[400px] h-[280px] bg-[#F1F3F8] p-4 rounded-md transition-transform transform hover:scale-105 hover:shadow-lg'>
                    <FaHandsHelping className='text-6xl text-[#325AAB] mb-4' />
                    <h1 className='text-2xl font-bold mb-4'>Service to Others</h1>
                    <p>
                        We instill a sense of responsibility and service, encouraging students to give back to their communities and make a positive impact.
                    </p>
                </div>
            </div><br /><br /><br />
        </div>
    );
};

export default About;
