import aboutImage from '../../assets/HaLongBay.jpg'
import Newslatter from '../Newslatter/Newslatter';

const About = () => {
    return (<>
        <div className="w-full lg:w-5/6 xl:w-8/12 mx-auto px-2 lg:px-0 py-12 lg:py-20">
            <div className="flex flex-col md:flex-row gap-10 justify-between items-center">
                <div className="flex-1">
                    <h2 className="text-3xl lg:text-4xl xl:text-6xl pr-5 md:pr-0 font-bold mb-7">The perfect   vacation   come true with our Travel Agency</h2>
                    <p className="font-medium mb-7">We are a team of experienced travel experts who specialize in planning and organizing unforgettable travel experiences for our clients with a wide range of travel services, including flight bookings, hotel reservations and more.</p>
                    <button data-aos="fade-up" data-aos-duration="1600" className='btn border-none text-white  bg-[#d01818] hover:bg-[#0d1637] px-10 text-xl'>More Info</button>
                </div>
                <div className="flex-1">
                    <img src={aboutImage} className='object-cover object-center obje w-full h-full rounded-2xl' alt="" style={{ backgroundSize: 'contain', }} />
                </div>
            </div>
        </div>

        <div className="bg-gray-50">
            <div className="w-full lg:w-5/6 xl:w-8/12 mx-auto px-2 lg:px-0 py-12 lg:py-20">
                <h1 className="text-2xl md:text-6xl font-semibold text-center px-5 md:px-20 xl:px-44 mb-5">Provide The Best Travel Experience For You</h1>
                <p className="px-0 lg:px-44 xl:px-72 text-gray-500 text-center text-base mb-10">We understand that every journey has unique needs. Therefore, we offer customized travel packages designed according to your preferences and budget.</p>

                <div className=" flex flex-col md:flex-row gap-10 justify-center">
                    <div className="flex-1 border bg-[#F1F5FD] p-10 rounded-3xl">
                        <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
                        <p className="font-medium">Our vision is to become a leading travel agency company that provides high-quality services and inspiration for our customer.</p>
                    </div>
                    <div className="flex-1 border bg-[#F1F5FD] p-10 rounded-3xl">
                        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
                        <p className="font-medium">Our Mission is to become a leading travel agency company that provides high-quality services and inspiration for our customer.</p>
                    </div>
                </div>
            </div>
        </div>
        <Newslatter></Newslatter>

    </>
    );
};

export default About;