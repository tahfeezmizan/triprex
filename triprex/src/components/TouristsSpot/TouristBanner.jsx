import React from 'react';
import { Helmet } from 'react-helmet';
import destinationsBanner from '../../assets/destinations.jpg'

const TouristBanner = () => {
    return (
        <div className="text-center text-6xl py-28" style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${destinationsBanner})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <Helmet>
                <title>All Tourist Spot - Trip Rex React Template</title>
            </Helmet>
            <div className="w-full lg:w-5/6 xl:w-8/12 mx-auto px-2 lg:px-0 py-10 md:py-12 lg:py-20">
                <h1 className="font-bold text-white" >Destinations</h1>
            </div>
        </div>
    );
};

export default TouristBanner;