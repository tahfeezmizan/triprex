import React from 'react';
import AllTouristsSpot from '../TouristsSpot/AllTouristsSpot';
import Banner from './Banner';
import DestinationSlider from '../Destination/DestinationSlider';
import Newslatter from '../Newslatter/Newslatter';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <DestinationSlider></DestinationSlider>
            <AllTouristsSpot></AllTouristsSpot>
            <Newslatter></Newslatter>
        </div>
    );
};

export default Home;