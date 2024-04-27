import React from 'react';
import AllTouristsSpot from '../TouristsSpot/AllTouristsSpot';
import Banner from './Banner';
import DestinationSlider from '../Destination/DestinationSlider';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <DestinationSlider></DestinationSlider>
            <AllTouristsSpot></AllTouristsSpot>

        </div>
    );
};

export default Home;