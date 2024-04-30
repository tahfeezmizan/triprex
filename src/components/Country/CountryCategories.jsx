import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constant";
import CategorisCard from "./CategorisCard";
import loader from '../../assets/loader-spineer.json';
import Lottie from "lottie-react";

const CountryCategories = () => {
    const { id } = useParams();
    const [spot, setSpot] = useState([])
    const [country, setCountry] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    // all country name
    useEffect(() => {
        fetch(`${BASE_URL}/countriesdata`)
            .then(res => res.json())
            .then(data => {
                setCountry(data)
                setIsLoading(false)
            })
    }, []);

    const countryData = country.find(item => item._id === id);
    const countryName = countryData?.countryName;

    // all tourists spot data
    useEffect(() => {
        fetch(`${BASE_URL}/touristsspot`)
            .then(res => res.json())
            .then(data => {
                setSpot(data)
                setIsLoading(false)
            })
    }, [])

    const spotFiltered = spot.filter(data => data.countryname === countryName);

    return (
        <div className="w-full lg:w-5/6 xl:w-8/12 mx-auto px-2 lg:px-0 py-10 md:py-12 lg:py-20">
            {
                isLoading ?
                    <div className="flex justify-center items-center">
                        <Lottie className="w-[70%]" animationData={loader} loop={true} />
                    </div> :
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                        {
                            spotFiltered?.map(toursitspot => <CategorisCard data={toursitspot} key={toursitspot._id}></CategorisCard>)
                        }
                    </div>
            }
        </div>
    );
};

export default CountryCategories;