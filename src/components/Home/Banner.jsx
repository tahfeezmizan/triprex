// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import slider1 from '../../assets/slider-.jpg'
import slider2 from '../../assets/slider-2.jpg'
import slider3 from '../../assets/bandarban.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Helmet } from 'react-helmet-async';


const Banner = () => {
    return (
        <div>
            <Helmet>
                <title>Home Park - React Template</title>
            </Helmet>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                Autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${slider1})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
                >
                    <div className="min-h-[500px] md:h-screen flex items-center text-white"  >
                        <div className="w-full md:w-8/12 text-center mx-auto ">
                            <h4 data-aos="fade-down" data-aos-duration="1400" className=''>WANA FIND YOUR DREAM HOME !</h4>
                            <h1 data-aos="fade-down" data-aos-duration="1500" className='text-2xl md:text-5xl xl:text-8xl px-1 md:px-10 pb-5 md:pb-10 font-bold uppercase'>Take you to your dream destination</h1>
                            <p></p>
                            <button data-aos="fade-up" data-aos-duration="1600" className='btn border-none text-white uppercase bg-[#007AFF] px-10 text-xl'>Get Start</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${slider2})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
                >
                    <div className="min-h-[500px] md:h-screen flex items-center text-white">
                        <div className="w-8/12 text-center mx-auto ">
                            <h4 data-aos="fade-down" data-aos-duration="1400" className=''>WANA FIND YOUR DREAM HOME !</h4>
                            <h1 data-aos="fade-down" data-aos-duration="1500" className='text-2xl md:text-5xl xl:text-8xl px-1 md:px-10 pb-5 md:pb-10 font-bold uppercase'>luxury villas designed for life</h1>
                            <button data-aos="fade-up" data-aos-duration="1600" className='btn border-none text-white uppercase bg-[#007AFF] px-10 text-xl'>Get Start</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${slider3})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
                >
                    <div className="min-h-[500px] md:h-screen flex items-center text-white">
                        <div className="w-8/12 text-center mx-auto ">
                            <h4 data-aos="fade-down" data-aos-duration="1400" className=''>WANA FIND YOUR DREAM HOME !</h4>
                            <h1 data-aos="fade-down" data-aos-duration="1500" className='text-2xl md:text-5xl xl:text-8xl px-1 md:px-10 pb-5 md:pb-10 font-bold uppercase'>CLASSIC SPACIOUS RESIDENCES</h1>
                            <button data-aos="fade-up" data-aos-duration="1600" className='btn border-none text-white uppercase bg-[#007AFF] px-10 text-xl'>Get Start</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper >
        </div>
    );
};

export default Banner;