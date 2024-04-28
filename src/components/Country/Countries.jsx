import { useEffect, useState } from "react";
import { BASE_URL } from "../../constant";

const Countries = () => {
    const [country, setCountry] = useState([]);

    useEffect(() => {
        fetch(`${BASE_URL}/countriesdata`)
            .then(res => res.json())
            .then(data => {
                setCountry(data)
            })
    }, [])

    return (
        <div className="w-full lg:w-5/6 xl:w-8/12 mx-auto px-2 lg:px-0 py-10 md:py-12 lg:py-20">

        </div>
    );
};

export default Countries;