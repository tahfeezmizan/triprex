import React from 'react';
import AllTouristsSpot from '../TouristsSpot/AllTouristsSpot';
import Banner from './Banner';
import DestinationSlider from '../Destination/DestinationSlider';
import Newslatter from '../Newslatter/Newslatter';
import Countries from '../Country/Countries';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <DestinationSlider></DestinationSlider>
            <AllTouristsSpot></AllTouristsSpot>
            <Countries></Countries>
            <Newslatter></Newslatter>
        </div>
    );
};

export default Home;