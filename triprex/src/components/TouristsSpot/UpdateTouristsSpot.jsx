import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../constant";
import Swal from "sweetalert2";

const UpdateTouristsSpot = () => {
    const [data, setData] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`${BASE_URL}/updatespot/${id}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [])

    // update method
    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const touristsspotname = form.touristsspotname.value;
        const image = form.image.value;
        const location = form.location.value;
        const averagecost = parseInt(form.averagecost.value);
        const countryname = form.countryname.value;
        const seasonality = form.seasonality.value;
        const totavisitorsperyear = form.totavisitorsperyear.value;
        const traveltime = form.traveltime.value;
        const description = form.description.value;

        const updateInfo = { touristsspotname, image, location, averagecost, countryname, seasonality, totavisitorsperyear, traveltime, description }


        // update method
        fetch(`${BASE_URL}/updateTouristsSpot/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updateInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success',
                        text: 'Tourist Spot Update Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    navigate('/mylist')
                }
            })
    };

    return (
        <div className="bg-[#f8f8f8] py-10">
            <Helmet>
                <title>Update Tourists Card - Trip Rex React Template</title>
            </Helmet>
            <div className="w-full md:w-8/12 mx-auto">
                <div className="max-w-screen-md mx-auto border rounded-lg bg-white p-12">
                    <h1 className="text-2xl md:text-5xl text-center font-bold pb-5">Update Tourists Spot</h1>

                    <form onSubmit={handleUpdate}>
                        <div className="flex flex-col md:flex-row gap-0 md:gap-8">
                            <div className="flex-1 space-y-2 mb-4">
                                <label className="text-lg font-medium">Tourists Spot Name</label>
                                <input
                                    type="text" name="touristsspotname"
                                    placeholder="Tourists Spot Name"
                                    className="input input-bordered w-full max-w-xs"
                                    defaultValue={data.touristsspotname}
                                />
                            </div>
                            <div className="flex-1 space-y-2 mb-4">
                                <label className="text-lg font-medium">Image</label>
                                <input
                                    type="text" name="image"
                                    placeholder="Car Brand Name"
                                    className="input input-bordered w-full max-w-xs"
                                    defaultValue={data.image}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-0 md:gap-8">
                            <div className="flex-1 space-y-2 mb-4">
                                <label className="text-lg font-medium">Location</label>

                                <input
                                    type="text" name="location"
                                    placeholder="Like Sundarban, Cox’s Bazar, Rangamati"
                                    className="input input-bordered w-full max-w-xs"
                                    defaultValue={data.location}
                                />
                            </div>

                            <div className="flex-1 space-y-2 mb-4">
                                <label className="text-lg font-medium">Average Cost</label>
                                <input
                                    type="number" name="averagecost"
                                    placeholder="Car Brand Name"
                                    className="input input-bordered w-full max-w-xs"
                                    defaultValue={data.averagecost}
                                />
                            </div>

                        </div>

                        <div className="flex flex-col md:flex-row gap-0 md:gap-8">
                            <div className="flex-1 space-y-2 mb-4">
                                <label className="text-lg font-medium block">Country Name</label>
                                <select name='countryname' className="select select-bordered w-full"
                                    defaultValue={data.countryname}>
                                    <option disabled >Country Name</option>
                                    <option selected={data.countryname === 'Bangladesh'}>Bangladesh</option>
                                    <option selected={data.countryname === 'Thailand'}>Thailand</option>
                                    <option selected={data.countryname === 'Indonesia'}>Indonesia</option>
                                    <option selected={data.countryname === 'Malaysia'}>Malaysia</option>
                                    <option selected={data.countryname === 'Vietnam'}>Vietnam</option>
                                    <option selected={data.countryname === 'Cambodia'}>Cambodia</option>
                                </select>

                            </div>
                            <div className="flex-1 space-y-2 mb-4">
                                <label className="text-lg font-medium block">Seasonality</label>
                                <select name='seasonality' className="select select-bordered w-full"
                                    defaultValue={data.seasonality}>
                                    <option disabled > Select Seasonality</option>
                                    <option selected={data.countryname === 'Summer'}>Summer</option>
                                    <option selected={data.countryname === 'Rainy'}>Rainy</option>
                                    <option selected={data.countryname === 'The Autumn'}>The Autumn</option>
                                    <option selected={data.countryname === 'Late-autumn'}>Late-autumn</option>
                                    <option selected={data.countryname === 'Winter'}>Winter</option>
                                    <option selected={data.countryname === 'Spring'}>Spring</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-0 md:gap-8">
                            <div className="flex-1 space-y-2 mb-4">
                                <label className="text-lg font-medium">Tota Visitors PerYear</label>
                                <select name='totavisitorsperyear' defaultValue={data.totavisitorsperyear} className="select select-bordered w-full">
                                    <option disabled >Select Visitors PerYear</option>
                                    <option selected={data.countryname === 'Approx 1 Million'}>Approx 1 Million</option>
                                    <option selected={data.countryname === 'Approx 2 Million'}>Approx 2 Million</option>
                                    <option selected={data.countryname === 'Approx 3 Million'}>Approx 3 Million</option>
                                    <option selected={data.countryname === 'Approx 4 Million'}>Approx 4 Million</option>
                                    <option selected={data.countryname === 'Approx 5 Million'}>Approx 5 Million</option>
                                    <option selected={data.countryname === 'Over 1 Million'}>Over 1 Million</option>
                                    <option selected={data.countryname === 'Over 2 Million'}>Over 2 Million</option>
                                    <option selected={data.countryname === 'Over 3 Million'}>Over 3 Million</option>
                                    <option selected={data.countryname === 'Over 4 Million'}>Over 4 Million</option>
                                    <option selected={data.countryname === 'Over 5 Million'}>Over 5 Million</option>
                                </select>
                            </div>

                            <div className="flex-1 space-y-2 mb-4">
                                <label className="text-lg font-medium block">Travel Time</label>
                                <select name='traveltime' className="select select-bordered w-full"
                                    defaultValue={data.traveltime}>
                                    <option disabled >Select
                                        Travel Time</option>
                                    <option selected={data.countryname === '2 Days - 1 NIGHTS'}>2 Days - 1 NIGHTS</option>
                                    <option selected={data.countryname === '3 Days - 2  NIGHTS'}>3 Days - 2  NIGHTS</option>
                                    <option selected={data.countryname === '7 Days - 6 NIGHTS'}>7 Days - 6 NIGHTS</option>
                                    <option selected={data.countryname === '15 Days - 14 NIGHTS'}>15 Days - 14 NIGHTS</option>
                                    <option selected={data.countryname === 'One Months'}>One Months</option>
                                </select>

                            </div>
                        </div>

                        <div className="space-y-2 mb-4">
                            <label className="text-lg font-medium block">Short Description</label>
                            <textarea
                                name='description'
                                placeholder="Short Description"
                                className="textarea textarea-bordered  w-full"
                                defaultValue={data.description}></textarea>
                        </div>

                        <div className="form-control my-6">
                            {/* <input ">Update Touris Spot /> */}
                            <input
                                type="submit"
                                className="btn bg-[#d01818] hover:bg-[#0d1637] text-white text-xl font-bold"
                                value='Update Touris Spot'
                            />
                        </div>
                    </form>
                </div >
            </div >
        </div>
    );
};

export default UpdateTouristsSpot;