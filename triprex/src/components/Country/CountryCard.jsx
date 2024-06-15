import React from 'react';
import { NavLink } from 'react-router-dom';

const CountryCard = ({ countryItem }) => {
    const { _id, countryName, imageUrl, description } = countryItem;

    return (
        <NavLink to={`/countrycategories/${_id}`}>
            <div className="rounded-lg bg-white overflow-hidden hover:shadow-xl duration-500">
                <div className="h-64 overflow-hidden" >
                    <img className="w-full h-full object-cover cursor-pointer" src={imageUrl} alt="" />
                </div>
                <div className="p-6 pb-4">
                    <h2 className="text-2xl font-bold pb-3">{countryName}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </NavLink>
    );
};

export default CountryCard;