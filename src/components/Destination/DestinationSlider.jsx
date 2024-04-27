import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import bali from '../../assets/bali.jpeg';
import amptaIsland from '../../assets/Ampat-Islands.webp';
import SaintMartin from '../../assets/Saint-Martin.jpg';
import Bangkok from '../../assets/Bangkok.jpg';

const DestinationSlider = () => {
    return (
        <div className="w-full lg:w-5/6 xl:w-8/12 mx-auto px-2 lg:px-0 py-10 md:py-12 lg:py-20">
            <div className="border-l-4 border-l-[#d01818] mb-10">
                <h2 className="text-3xl md:text-5xl text-[#0d1637] font-bold pl-2">Top Destinations</h2>
            </div>

            <Swiper
                slidesPerView={1} // Show only one slide at a time
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
                breakpoints={{
                    // Adjust slides based on screen width
                    640: {
                        slidesPerView: 2, // Show 2 slides on medium screens (approx. 640px)
                    },
                    1024: {
                        slidesPerView: 3, // Show 3 slides on large screens (approx. 1024px)
                    },
                }}
            >
                <SwiperSlide>
                    <div
                        className="h-[450px] md:h-[500px] flex items-end bg-green-400 rounded-2xl"
                        style={{
                            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.0) 0%, rgba(0, 0, 0, 0.9) 130%), url(${amptaIsland})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                        <h1 className="text-white text-4xl font-bold pb-8 pl-8">Ampta Islands</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="h-[450px] md:h-[500px] flex items-end bg-green-400 rounded-2xl"
                        style={{
                            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.0) 0%, rgba(0, 0, 0, 0.9) 130%), url(${SaintMartin})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                        <h1 className="text-white text-4xl font-bold pb-8 pl-8">Saint Martin</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="h-[450px] md:h-[500px] flex items-end bg-green-400 rounded-2xl"
                        style={{
                            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.0) 0%, rgba(0, 0, 0, 0.9) 130%), url(${bali})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                        <h1 className="text-white text-4xl font-bold pb-8 pl-8">Bali</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="h-[450px] md:h-[500px] flex items-end bg-green-400 rounded-2xl"
                        style={{
                            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.0) 0%, rgba(0, 0, 0, 0.9) 130%), url(${Bangkok})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                        <h1 className="text-white text-4xl font-bold pb-8 pl-8">Bangkok</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="h-[450px] md:h-[500px] flex items-end bg-green-400 rounded-2xl"
                        style={{
                            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.0) 0%, rgba(0, 0, 0, 0.9) 130%), url(${SaintMartin})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                        <h1 className="text-white text-4xl font-bold pb-8 pl-8">Bali</h1>
                    </div>
                </SwiperSlide>
                {/* Additional slides if needed */}
            </Swiper>
        </div>
    );
};

export default DestinationSlider;
