import { useEffect, useState } from "react";
import { BASE_URL } from "../../constant";
import TouristSpotCard from "./TouristSpotCard";
import { NavLink, useLocation } from "react-router-dom";

const AllTouristsSpot = () => {
    const [spotData, setSpotData] = useState([]);
    const [dataLength, setDataLength] = useState(6)
    const location = useLocation();

    console.log(location)

    useEffect(() => {
        fetch(`${BASE_URL}/touristsspot`)
            .then(res => res.json())
            .then(data => {
                setSpotData(data)
            })
    }, []);

    const seelAllData = () => {
        if (location.pathname === "/") {
            spotData(dataLength)
        }
        else {
            setDataLength(spotData.length)
            
        }

    }

    return (
        <div className="w-full lg:w-5/6 xl:w-8/12 mx-auto px-2 lg:px-0 py-10 md:py-12 lg:py-20">
            {/* <Helmet>
                <title>All Touris Spot - Trip Rex React Template</title>
            </Helmet> */}
            <div className="mb-10 flex flex-col md:flex-row justify-between gap-6">
                <div className="border-l-4 border-l-[#d01818]">
                    <h2 className="text-3xl md:text-5xl text-[#0d1637] font-bold pl-2">Popular Activities</h2>
                </div>
                <div className="text-end">
                    <button className='btn border-none text-white uppercase bg-[#d01818] hover:bg-[#0d1637] hover:shadow-xl duration-500 px-10 text-xl'>Sort By</button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                {
                    spotData.slice(0, dataLength)?.map(touristSpot => <TouristSpotCard key={touristSpot._id} touristSpot={touristSpot}></TouristSpotCard>)
                }
            </div>
            <div className="py-8 text-center">
                <button onClick={() => seelAllData()} className="btn text-white text-xl px-10 bg-[#d01818] hover:bg-[#0d1637]">
                    <NavLink to="/alltouristspot">See All Spot</NavLink>
                </button>
            </div>
        </div>
    );
};

export default AllTouristsSpot;