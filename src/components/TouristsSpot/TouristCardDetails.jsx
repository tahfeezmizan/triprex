import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constant";
import { BsArrowsMove, BsHouseCheck } from "react-icons/bs";
import { Helmet } from "react-helmet";
import { CiClock2, CiLocationOn } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

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
                            <div className="mb-6">
                                <h2 className='font-bold text-lg mb-2'>Description</h2>
                                <p className="text-gray-400">{card.description}</p>
                            </div>

                            <div className="border-t mt-6 py-5">
                                <h2 data-aos="fade-right" data-aos-duration="2300" className='font-bold text-lg mb-2'>What’s Included</h2>

                                <div className="flex flex-col md:flex-row gap-0 md:gap-8">
                                    <div className="flex-1">
                                        <p className="flex mb-2 items-center gap-2 text-lg text-[#595960]"><span className="text-[#d01818]"><IoMdCheckmarkCircleOutline /></span>Tour to Antelope Canyon X and Horseshoe Bend</p>
                                        <p className="flex mb-2 items-center gap-2 text-lg text-[#595960]"><span className="text-[#d01818]"><IoMdCheckmarkCircleOutline /></span>Driver/Guide</p>
                                        <p className="flex mb-2 items-center gap-2 text-lg text-[#595960]"><span className="text-[#d01818]"><IoMdCheckmarkCircleOutline /></span>Bottled water, soda, fruit and snacks</p>
                                        <p className="flex mb-2 items-center gap-2 text-lg text-[#595960]"><span className="text-[#d01818]"><IoMdCheckmarkCircleOutline /></span>Hotel pick-up and dropoff by airconditioned vehicle</p>
                                    </div>
                                    <div className="flex-1">

                                        <p className="flex mb-2 items-center gap-2 text-lg text-[#595960]"><span className="text-[#d01818]"><IoMdCheckmarkCircleOutline /></span>All Fees and Taxes</p>
                                        <p className="flex mb-2 items-center gap-2 text-lg text-[#595960]"><span className="text-[#d01818]"><IoMdCheckmarkCircleOutline /></span>Gratuities (optional)</p>
                                        <p className="flex  items-center gap-2 text-lg text-[#595960]"><span className="text-[#d01818]"><IoMdCheckmarkCircleOutline /></span>Lunch</p>
                                    </div>
                                </div>
                            </div>
                            <div className="border-t py-5">
                                <h2 data-aos="fade-right" data-aos-duration="2300" className='font-bold text-lg mb-2'>Additional Information</h2>

                                <div className="flex flex-col md:flex-row gap-0 md:gap-8">
                                    <div className="flex-1">
                                        <ul className="list-outside list-disc pl-4 space-y-2">
                                            <li>Confirmation will be received at time of booking</li>
                                            <li>Don’t forget to bring sunscreen, hats, sunglasses, comfortable clothes and hiking or tennis shoes.</li>
                                            <li>Not recommended for travelers with back problems</li>
                                            <li>The tour start at 5:30am but the pickup times will be between 4am and 5:30am</li>
                                        </ul>
                                    </div>
                                    <div className="flex-1">
                                        <ul className="list-outside list-disc pl-4 space-y-2">
                                            <li>May be operated, under request by a multi-lingual guide (Spanish and Portuguese)</li>
                                            <li>A moderate amount of walking is involved at both attractions.</li>
                                            <li>Waiver will need to be signed attesting to good health conditions</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-4 xl:col-span-2">
                    <div className="border p-6 rounded-md">
                        <div className="h-full  overflow-hidden rounded-lg pb-5">
                            <img className="w-full h-full object-contain transition-transform transform hover:scale-105 duration-500 ease-in-out" src={card.image} alt="" />
                        </div>
                        <h1 data-aos="fade-left" data-aos-duration="1800" className="text-2xl font-bold mb-3">Information Contact</h1>

                        <div className="">
                            <p className="text-[#595960] text-lg font-medium flex flex-col gap-2 mb-2 ">Email< span className='font-normal text-gray-500'> contact@triprex.com</span></p>
                            <p className="text-[#595960] text-lg font-medium flex flex-col gap-2 mb-2 ">Website< span className='font-normal text-gray-500'> triprex.com</span></p>
                            <p className="text-[#595960] text-lg font-medium flex flex-col gap-2 mb-6 ">Phone< span className='font-normal text-gray-500'>  +6580009999</span></p>
                            <p className="text-[#595960] text-lg font-medium flex flex-col gap-2 mb-6 ">Fax< span className='font-normal text-gray-500'>  +123456789</span></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TouristCardDetails;