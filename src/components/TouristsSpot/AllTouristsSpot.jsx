import { useLoaderData } from "react-router-dom";

const AllTouristsSpot = () => {
    const loadedSpot = useLoaderData();
    console.log(loadedSpot)

    return (
        <div className="">
            <div className="w-full lg:w-5/6 xl:w-8/12 mx-auto px-2 lg:px-0 py-10 md:py-12 lg:py-20">
                <div className="text-center">
                    <h2 className="text-5xl font-bold mb-5">Top <span className="text-[#3B71FE]">Destinations</span></h2>
                    <p className="text-[#848484] text-lg w-[500px] mx-auto">Explore our top destinations voted by more than 100,000+ customers around the world.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                    {

                    }
                </div>
            </div>
        </div>
    );
};

export default AllTouristsSpot;