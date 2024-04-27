import React from 'react';
import { CiClock2, CiLocationOn } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const TouristSpotCard = ({ touristSpot }) => {
    const { _id, averagecost, countryname, description, image, location, seasonality, totavisitorsperyear, touristsspotname, traveltime } = touristSpot;
    return (
        <div className="bg-white border rounded-xl flex justify-around flex-col hover:shadow-lg duration-500 overflow-hidden">
            <div className="h-64 overflow-hidden">
                <img className="w-full h-full object-cover transition-transform transform hover:scale-105 duration-500 ease-in-out" src={image} alt="" />
            </div>
            <div className="p-5 pb-0">
                <p className="flex items-center gap-1 text-[#848484]"><span className=""><CiLocationOn /></span>{location}</p>
                <h2 className="text-xl capitalize mb-2 font-medium">{touristsspotname}</h2>

                <div className="flex items-center gap-3 pb-3">
                    <p><span className="bg-gray-100 rounded p-1 text-[#4d4d4d]">{seasonality}</span></p>
                    <p className="text-gray-400 text-base"><span className="text-black">{countryname}</span></p>
                </div>
                <div className="flex items-center justify-between gap-3 py-3 border-t">
                    <p className='text-[#4d4d4d]'>From <span className="rounded font-semibold text-black">${averagecost}</span></p>
                    <p className="text-[#4d4d4d] text-base flex items-center gap-1"><CiClock2 /> <span>{traveltime}</span></p>
                </div>
            </div>
            <div className="p-5 pt-0 pb-7">
                <Link to={`/touristSpot/${_id}`} className="btn text-white w-full text-xl bg-[#3B71FE] hover:bg-[#007bffde]">View Details</Link>
            </div>
        </div>
    );
};

export default TouristSpotCard;

