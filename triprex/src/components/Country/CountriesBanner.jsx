import { Helmet } from "react-helmet";
import CountryBanner from "../../assets/countriesBanner.jpg";

const CountriesBanner = () => {
    return (
        <div className="text-center text-6xl py-28" style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${CountryBanner})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <Helmet>
                <title>Countries - Trip Rex React Template</title>
            </Helmet>
            <div className="w-full lg:w-5/6 xl:w-8/12 mx-auto px-2 lg:px-0 py-10 md:py-12 lg:py-20">
                <h1 className="font-bold text-white" >Country Tourists Spot</h1>
            </div>
        </div>
    );
};

export default CountriesBanner;