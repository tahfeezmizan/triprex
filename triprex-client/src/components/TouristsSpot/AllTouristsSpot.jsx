import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../constant";
import TouristSpotCard from "./TouristSpotCard";
import loader from '../../assets/loader-spineer.json';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Tooltip } from "react-tooltip";

const AllTouristsSpot = () => {
    const [sort, setSort] = useState("none");
    const [spotData, setSpotData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(`${BASE_URL}/touristsspot`)
            .then(res => res.json())
            .then(data => {
                setSpotData(data)
                setIsLoading(false)
            })
    }, []);

    const fetchSortedData = async (sortOrder) => {
        let url = `${BASE_URL}/touristsspot`;
        if (sortOrder !== "none") {
            url = `${BASE_URL}/touristsspot/sorted?sort=${sortOrder}`;
        }
        const response = await fetch(url);
        const data = await response.json();
        setSpotData(data);
    };

    const handleSortChange = (newSort) => {
        setSort(newSort);
        fetchSortedData(newSort);
    };

    return (
        <div className="w-full lg:w-5/6 xl:w-8/12 mx-auto px-2 lg:px-0 py-10 md:py-12 lg:py-20">
            <div className="mb-10 flex flex-col md:flex-row justify-between gap-6">
                <div className="border-l-4 border-l-[#d01818]">
                    <h2 className="text-3xl md:text-5xl font-bold pl-2">Popular Activities</h2>
                </div>
                <div className="text-end">
                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn m-1 text-white uppercase bg-[#d01818] hover:bg-blue-900 hover:shadow-xl duration-500 px-10 text-xl"
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content="Sort Data Ascending Order"
                        >
                            Sort By {sort === "none" ? (
                                <IoIosArrowDown />
                            ) : sort === "asc" ? (
                                <IoIosArrowUp />
                            ) : (
                                <IoIosArrowDown />
                            )}
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li onClick={() => handleSortChange("none")}>
                                <a>None</a>
                            </li>
                            <li onClick={() => handleSortChange("asc")}>
                                <a>Ascending Cost</a>
                            </li>
                        </ul>
                        <Tooltip id="my-tooltip" place='top' />
                    </div>
                </div>
            </div>

            {isLoading ?
                <div className="w-full flex justify-center items-center">
                    <Lottie className="w-[70%]" animationData={loader} loop={true} />
                </div> :

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                    {
                        spotData?.map(touristSpot => (
                            <TouristSpotCard key={touristSpot._id} touristSpot={touristSpot} />
                        ))
                    }
                </div>
            }
        </div>
    );
};

export default AllTouristsSpot;