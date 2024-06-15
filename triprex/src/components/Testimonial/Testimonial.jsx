import 'swiper/css';
import React from 'react';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Testimonial = () => {
    return (
        <div className="w-full lg:w-5/6 xl:w-8/12 mx-auto px-2 lg:px-0 py-10 md:py-12 lg:py-20">
            <div className="border-l-4 border-l-[#d01818] mb-10">
                <h2 className="text-3xl md:text-5xl font-bold pl-2">What our clients say</h2>
            </div>

            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                <SwiperSlide>
                    <div className=" w-96 h-72 border rounded-2xl p-10 flex flex-col justify-between">
                        <p className='text-base mb-6'>I had the most amazing trip thanks to this travel agency. They took care of everything from flights to accommodations and even helped me plan out my itinerary. I highly recommend them.</p>
                        <div className="">
                            <h3 className='text-lg font-bold'>Jasper</h3>
                            <p className="text-sm font-medium text-gray-400">San Francisco</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className=" w-96 h-72 border rounded-2xl p-10 flex flex-col justify-between">
                        <p className='text-base mb-6'>I've traveled all over the world, but  I've never had a better experience than with this travel agency. They truly went above and beyond to make sure my trip was perfect.</p>
                        <div className="">
                            <h3 className='text-lg font-bold'>Jasper</h3>
                            <p className="text-sm font-medium text-gray-400">Canada</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" w-96 h-72 border rounded-2xl p-10 flex flex-col justify-between">
                        <p className='text-base mb-6'>The tours in this website are great. I had been really enjoying with my family! The team is very professional and takes care of the customers. Will surely recommend it to my friends.</p>
                        <div className="">
                            <h3 className='text-lg font-bold'>Alice Johnson</h3>
                            <p className="text-sm font-medium text-gray-400">California</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" w-96 h-72 border rounded-2xl p-10 flex flex-col justify-between">
                        <p className='text-base mb-6'>The best travel company I've ever used. Their tours are fantastic, and the guides are very knowledgeable. I can't wait to go on another adventure with them.</p>
                        <div className="">
                            <h3 className='text-lg font-bold'>David Williams</h3>
                            <p className="text-sm font-medium text-gray-400">Indonesia</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" w-96 h-72 border rounded-2xl p-10 flex flex-col justify-between">
                        <p className='text-base mb-6'>The tours in this website are great. I had been really enjoy with my family! The team is very professional and taking care of the customers. Will surely recommend to my freind to join this company!</p>
                        <div className="">
                            <h3 className='text-lg font-bold'>Brittany Clark</h3>
                            <p className="text-sm font-medium text-gray-400">San Francisco</p>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Testimonial;