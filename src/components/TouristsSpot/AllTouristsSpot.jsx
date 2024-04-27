import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import TouristSpotCard from "./TouristSpotCard";
import { Helmet } from "react-helmet";
import { BASE_URL } from "../../constant";

const AllTouristsSpot = () => {
    const [spotData, setSpotData] = useState([])

    useEffect(() => {
        fetch(`${BASE_URL}/touristsspot`)
            .then(res => res.json())
            .then(data => {
                setSpotData(data)
            })
    }, [])

    return (
        <div className="w-full lg:w-5/6 xl:w-8/12 mx-auto px-2 lg:px-0 py-10 md:py-12 lg:py-20">
            <Helmet>
                <title>All Touris Spot - Trip Rex React Template</title>
            </Helmet>
            <div className="mb-10 flex justify-between">
                <div className="border-l-4 border-l-[#d01818]">
                    <h2 className="text-5xl text-[#0d1637] font-bold pl-2">Top Destinations</h2>
                </div>
                <div className="">
                    <button data-aos="fade-up" data-aos-duration="1600" className='btn border-none text-white uppercase bg-[#d01818] hover:bg-[#0d1637] hover:shadow-xl duration-500 px-10 text-xl'>Get Start</button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                {
                    spotData?.map(touristSpot => <TouristSpotCard key={touristSpot._id} touristSpot={touristSpot}></TouristSpotCard>)
                }
            </div>
        </div>
    );
};

export default AllTouristsSpot;