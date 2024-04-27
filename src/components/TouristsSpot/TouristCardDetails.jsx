import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constant";
import { BsArrowsMove, BsHouseCheck } from "react-icons/bs";
import { Helmet } from "react-helmet";
import { CiClock2, CiLocationOn } from "react-icons/ci";
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
    }, [id]);

    // const { _id, averagecost, countryname, description, image, location, seasonality, totavisitorsperyear, touristsspotname, traveltime }

    return (
        <div className='w-full lg:w-9/12 xl:w-8/12 mx-auto px-3 py-10 md:px-0'>
            <Helmet>
                <title>Tourists Spot Details - Trip Rex React Template</title>
            </Helmet>

            <div className="">
                <h2 className="text-2xl md:text-4xl font-bold mb-3">{card.touristsspotname}</h2>

                <div className="flex justify-between items-end pb-6">
                    <div className="py-3 pb-4 ">
                        <div className="flex pb-2">
                            <p><span className="bg-gray-100 rounded p-1 text-[#4d4d4d] mr-3">{card.seasonality}</span></p>
                            <p className="text-gray-400 text-base"><span className="text-black">{card.countryname}</span></p>
                        </div>
                        <p className="flex items-center gap-1 text-[#d01818]"><span className=""><CiLocationOn /></span>{card.location}</p>
                    </div>

                    <div className="">
                        <button className='bg-gray-100 hover:text-[#d01818] p-2 rounded-full duration-200'>
                            <FaRegHeart />
                        </button>
                    </div>

                </div>
                <img data-aos="fade-up" data-aos-duration="2100" src={card.image} className='w-full lg:h-96 xl:h-[600px] object-fill mb-10 rounded-xl' alt="" />
            </div>

            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-6">

                <div className="col-span-4">
                    <div className="bg-[#F2F4F4] p-6 rounded-md mb-5 flex justify-between">

                        <p className="flex items-center gap-1 text-gray-400"><span><CiClock2 /></span>Duration: <span className="uppercase text-[#0d1637]">{card.traveltime}</span></p>

                        <p className="text-[#4d4d4d] text-base flex items-center gap-1">Tour Cost: <span className="uppercase text-[#0d1637]">{card.averagecost}</span></p>

                        <p className="text-gray-400 text-base">Country: <span className="text-[#0d1637] uppercase">{card.countryname}</span></p>

                    </div>
                    <div className="border p-6 rounded-md">
                        <div className="">
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
                        <h1 data-aos="fade-left" data-aos-duration="1800" className="text-2xl font-bold mb-3">Trip Rex Travel</h1>

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