import { useEffect, useState } from "react";
import { BASE_URL } from "../../constant";
import CountryCard from "./CountryCard";

const Countries = () => {
    const [country, setCountry] = useState([]);

    useEffect(() => {
        fetch(`${BASE_URL}/countriesdata`)
            .then(res => res.json())
            .then(data => {
                setCountry(data)
            })
    }, [])

    console.log(country.description);

    return (
        <div className="bg-gray-50">
            <div className="w-full lg:w-5/6 xl:w-8/12 mx-auto px-2 lg:px-0 py-10 md:py-12 lg:py-20">
                <div className="border-l-4 border-l-[#d01818] my-10">
                    <h2 className="text-3xl md:text-5xl  font-bold pl-2">Tourist Countries</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                    {
                        country?.map(countryItem => <CountryCard
                            country={country}
                            countryItem={countryItem}
                            key={countryItem._id}></CountryCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Countries;