import React from 'react';
import { CiLocationOn } from 'react-icons/ci';

const TouristSpotCard = ({ touristSpot }) => {
    const { averagecost, countryname, description, email, image, location, seasonality, totavisitorsperyear, touristsspotname, username, traveltime } = touristSpot;
    return (
        <div className="bg-white border rounded-xl flex justify-around flex-col hover:shadow-lg duration-500 overflow-hidden">
            <div className="h-64 overflow-hidden">
                <img className="w-full h-full object-cover transition-transform transform hover:scale-105 duration-500 ease-in-out" src={image} alt="" />
            </div>
            <div className="p-5 pb-0">
                <p className="flex items-center gap-1 text-[#848484]"><span className=""><CiLocationOn /></span>{location}</p>
                <h2 className="text-xl capitalize mb-2 font-medium">{touristsspotname}</h2>

                <div className="flex items-center gap-24 mb-3">
                    <p><span className="bg-gray-100 rounded p-1 text-[#4d4d4d]">{seasonality}</span></p>
                    <p className="text-gray-400 text-base">Sq ft <span className="font-bold text-black"></span></p>
                </div>
            </div>
            <div className="p-5 pt-0">
                {/* <Link to={`/cards`} className="btn text-white bg-[#007bff] hover:bg-[#007bffee]">{button_text}</Link> */}
            </div>
        </div>
    );
};

export default TouristSpotCard;

