import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constant";

const CountryCategories = () => {
    const [country, setCountry] = useState([]);
    const [spot, setSpot] = useState([])
    const { id } = useParams();

    // all country name
    useEffect(() => {
        fetch(`${BASE_URL}/countriesdata`)
            .then(res => res.json())
            .then(data => {
                setCountry(data)
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
            })
    }, [])

    const spotFiltered = spot.filter(data => data.countryname === countryName)
    console.log(spotFiltered)


    return (
        <div className="w-full lg:w-5/6 xl:w-8/12 mx-auto px-2 lg:px-0 py-10 md:py-12 lg:py-20">
            <h1>Hello</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                {
                    spotFiltered?.map(toursitspot => <li>{toursitspot.touristsspotname}</li>)
                }
            </div>

        </div>
    );
};

export default CountryCategories;