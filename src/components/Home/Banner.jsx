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
                <title>Home - Trip Rex React Template</title>
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
                        backgroundImage: ` url(${slider1})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <div className="min-h-[500px] md:h-screen flex items-center"  >
                        <div className="w-full md:w-8/12 mx-auto">
                            <h4 data-aos="fade-down" data-aos-duration="1400" className='text-[#d01818]'>WANA FIND YOUR DREAM HOME !</h4>
                            <h1 data-aos="fade-down" data-aos-duration="1500" className='text-[#0d1637] text-2xl md:text-5xl xl:text-8xl pb-5 md:pb-10 font-bold '>Uncovering Stories, One Trip At A Time</h1>
                            <p></p>
                            <button data-aos="fade-up" data-aos-duration="1600" className='btn border-none text-white  bg-[#d01818] hover:bg-[#0d1637] px-10 text-xl'>Get Start</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        backgroundImage: `url(${slider2})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <div className="min-h-[500px] md:h-screen flex items-center text-white">
                        <div className="w-8/12 mx-auto">
                            <h4 className='text-[#d01818]'>WANA FIND YOUR DREAM HOME !</h4>
                            <h1 className='text-[#0d1637] text-2xl md:text-5xl xl:text-8xl pb-5 md:pb-10 font-bold '>Explore World And Find The Beauty</h1>
                            <button className='btn border-none text-white  bg-[#d01818] hover:bg-[#0d1637] px-10 text-xl'>Get Start</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        backgroundImage: `url(${slider3})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <div className="min-h-[500px] md:h-screen flex items-center text-white">
                        <div className="w-8/12 mx-auto">
                            <h4 className='text-[#d01818]'>WANA FIND YOUR DREAM HOME !</h4>
                            <h1 className='text-[#0d1637] text-2xl md:text-5xl xl:text-8xl pb-5 md:pb-10 font-bold '>Explore Earth And Like The Supreme</h1>
                            <button className='btn border-none text-white  bg-[#d01818] hover:bg-[#0d1637] px-10 text-xl'>Get Start</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper >
        </div>
    );
};

export default Banner;