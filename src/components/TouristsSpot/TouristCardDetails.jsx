import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constant";
import { BsArrowsMove, BsHouseCheck } from "react-icons/bs";
import { Helmet } from "react-helmet";
import { CiLocationOn } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";

const TouristCardDetails = () => {
    const [card, setCard] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`${BASE_URL}/touristSpotDetails/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCard(data)
            })
    }, [id])

    // const { _id, averagecost, countryname, description, image, location, seasonality, totavisitorsperyear, touristsspotname, traveltime }

    return (
        <div className='w-full lg:w-9/12 xl:w-8/12 mx-auto px-3 py-28 md:px-0'>
            <Helmet>
                <title>Properties Details - Home Park React Template</title>
            </Helmet>

            <div className="">
                <h2 data-aos="fade-right" data-aos-duration="1700" className="text-2xl md:text-4xl font-bold mb-3">{card.touristsspotname}
                    
                </h2>
                <p data-aos="fade-right" data-aos-duration="1800" className=" flex items-center gap-2 text-gray-400">Categories: <span className="text-black font-semibold">
                    {/* {card.segment_name} */}
                </span></p>

                <div className="flex justify-between items-end -mt-2 md:-mt-9 pb-10">
                    <p data-aos="fade-right" data-aos-duration="1900" className=" flex items-center gap-2 text-gray-600"><span className="text-blue-600"><CiLocationOn /></span>
                        {card.location}
                    </p>
                    <div data-aos="fade-left" data-aos-duration="2000" className="text-blue-600">
                        <h4 className='text-end font-medium'>From</h4>
                        <p className="text-4xl font-bold">
                            {/* {card.price} */}
                        </p>
                    </div>
                </div>
                <img data-aos="fade-up" data-aos-duration="2100" src={card.image} className='w-full lg:h-96 xl:h-[600px] object-fill mb-10 rounded-xl' alt="" />
            </div>

            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-6">

                <div className="col-span-4">
                    <h3 data-aos="fade-right" data-aos-duration="2000" className='text-2xl mb-5 font-bold'>Property Description</h3>
                    <div className="border p-6 rounded-md">
                        <div className="flex justify-between items-end border-b pb-2 mb-6">
                            <p data-aos="fade-right" data-aos-duration="2100" className="text-gray-600 text-base">Property ID: <span className='font-bold text-black'>OP-S
                                {/* {card.id} */}
                            </span></p>
                            <button className='bg-blue-200 p-2 rounded-full hover:bg-blue-500 hover:text-white duration-200'>
                                <FaRegHeart />
                            </button>
                        </div>

                        <div data-aos="fade-right" data-aos-duration="2200" className="flex gap-7 flex-col md:flex-row md:items-end border-b pb-8">
                            <p className="text-blue-500 text-base flex items-center gap-1"><BsHouseCheck />< span className='font-medium text-gray-500'>
                                {/* {card.facilities[0]} */}
                            </span></p>
                            <p className="text-blue-500 text-base flex items-center gap-1"><BsHouseCheck />< span className='font-medium text-gray-500'>
                                {/* {card.facilities[1]} */}
                            </span></p>
                            <p className="text-blue-500 text-base flex items-center gap-1"><BsHouseCheck />< span className='font-medium text-gray-500'>
                                {/* {card.facilities[2]} */}
                            </span></p>
                            <p className="text-blue-500 text-base flex items-center gap-1"><BsArrowsMove />< span className='font-medium text-gray-500'>
                                {/* {card.area} */}
                                Sq ft</span></p>
                        </div>

                        <div className="mt-6">
                            <h2 data-aos="fade-right" data-aos-duration="2300" className='font-bold text-lg mb-2'>Description</h2>
                            <p data-aos="fade-right" data-aos-duration="2500" className="text-gray-400">{card.description}</p>
                        </div>
                    </div>
                </div>

                <h1 className="col-span-4 xl:col-span-2">
                    <div className="border p-6 rounded-md">
                        <div className="w-full h-full overflow-hidden rounded-lg pb-5">
                            <img data-aos="fade-left" data-aos-duration="1700" className="w-full h-full object-cover transition-transform transform hover:scale-105 duration-500 ease-in-out" src={card.image} alt="" />
                        </div>
                        <h1 data-aos="fade-left" data-aos-duration="1800" className="text-2xl font-bold mb-3">Trust Real Estate</h1>

                        <p data-aos="fade-left" data-aos-duration="1900" className="text-gray-600 text-base flex items-center gap-2 mb-1"><BsHouseCheck />< span className='text-gray-400'> homepark@lexus.com</span></p>
                        <p data-aos="fade-left" data-aos-duration="2000" className="text-gray-600 text-base flex items-center gap-2 mb-1"><BsHouseCheck />< span className='text-gray-400'> 1800 - 1234 - 5678</span></p>
                        <p data-aos="fade-left" data-aos-duration="2100" className="text-gray-600 text-base flex items-center gap-2 mb-6"><BsHouseCheck />< span className='text-gray-400'>  http://www.homepark.com</span></p>

                        <div className="socail flex gap-5">
                            <p data-aos="fade-left" data-aos-duration="2200" className="text-gray-600 p-2 border rounded-lg text-xl hover:bg-blue-500 hover:text-white duration-300"><BsHouseCheck /></p>
                            <p data-aos="fade-left" data-aos-duration="2300" className="text-gray-600 p-2 border rounded-lg text-xl hover:bg-blue-500 hover:text-white duration-300"><BsHouseCheck /></p>
                            <p data-aos="fade-left" data-aos-duration="2300" className="text-gray-600 p-2 border rounded-lg text-xl hover:bg-blue-500 hover:text-white duration-300"><BsHouseCheck /></p>
                            <p data-aos="fade-left" data-aos-duration="2500" className="text-gray-600 p-2 border rounded-lg text-xl hover:bg-blue-500 hover:text-white duration-300"><BsHouseCheck /></p>
                        </div>
                    </div>
                </h1>
            </div>

        </div>
    );
};

export default TouristCardDetails;