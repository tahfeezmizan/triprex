import bannerImg from '../../assets/mylist-banner.png'


const MyCardBanner = () => {
    return (
        <div className="text-center text-6xl py-28" style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${bannerImg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="w-full lg:w-5/6 xl:w-8/12 mx-auto px-2 lg:px-0 py-10 md:py-12 lg:py-20">
                <h1 className="font-bold text-white" >My Touris Spot</h1>
            </div>
        </div>
    );
};

export default MyCardBanner;