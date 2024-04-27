import { CiClock2, CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const ItemCard = ({ card }) => {
    const { averagecost, countryname, description, email, image, location, seasonality, totavisitorsperyear, touristsspotname, username, traveltime } = card;
    return (
        <div className="bg-white border rounded-xl flex justify-around flex-col hover:shadow-lg duration-500 overflow-hidden">
            <div className="h-64 overflow-hidden">
                <img className="w-full h-full object-cover transition-transform transform hover:scale-105 duration-500 ease-in-out" src={image} alt="" />
            </div>
            <div className="p-5 pb-0">
                <p className="flex items-center gap-1 text-[#d01818]"><span className=""><CiLocationOn /></span>{location}</p>
                <h2 className="text-xl text-[#0d1637] hover:text-[#d01818] capitalize my-1 font-medium">{touristsspotname}</h2>
                <p className='text-[#4d4d4d]'><span className="rounded font-semibold text-[#d01818]">${averagecost}</span></p>

                <div className="flex items-center justify-between gap-3 py-3 pb-4 border-b">
                    <p><span className="bg-gray-100 rounded p-1 text-[#4d4d4d]">{seasonality}</span></p>
                    <p className="text-gray-400 text-base"><span className="text-black">{countryname}</span></p>
                    <p className="text-[#4d4d4d] text-base flex items-center gap-1"><CiClock2 /> <span>{traveltime}</span></p>
                </div>
            </div>
            <div className="p-5 pt-4 pb-7 flex gap-4">
                <Link to={`/cards`} className="btn btn-outline text-white flex-1 text-xl bg-[#d01818] hover:bg-[#0d1637]">Update</Link>
                <Link to={`/cards`} className="btn btn-outline text-white flex-1 text-xl bg-[#d01818] hover:bg-[#0d1637]">Delete</Link>
            </div>
        </div>
    );
};

export default ItemCard;