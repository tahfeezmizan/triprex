import React from 'react';
import { useForm } from 'react-hook-form';
import UseAuth from '../../Hook/UseAuth';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
import { BASE_URL } from '../../constant';

const AddTourisSpot = () => {
    const { user } = UseAuth();

    const handleAddTouris = e => {
        e.preventDefault();
        const email = user.email;
        const username = user.displayName;

        const form = e.target;
        const touristsspotname = form.touristsspotname.value;
        const image = form.image.value;
        const location = form.location.value;
        const averagecost = form.averagecost.value;
        const countryname = form.countryname.value;
        const seasonality = form.seasonality.value;
        const totavisitorsperyear = form.totavisitorsperyear.value;
        const traveltime = form.traveltime.value;
        const description = form.description.value;

        const touristsSpot = { email, username, touristsspotname, image, location, averagecost, countryname, seasonality, totavisitorsperyear, traveltime, description }
        console.log(touristsSpot)

        fetch(`${BASE_URL}/touristsspot`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(touristsSpot)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success',
                        text: 'Add New Touris Spot',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    form.reset('')
                }
            })
    }

    return (
        <div className="bg-[#f8f8f8] py-10">
            <Helmet>
                <title>Add New Touris Spot - Trip Rex React Template</title>
            </Helmet>
            <div className="w-full md:w-8/12 mx-auto">
                <div className="max-w-screen-md mx-auto border rounded-lg bg-white p-12">
                    <h1 className="text-5xl text-center font-bold pb-5">Add Tourists Spot</h1>

                    <form onSubmit={handleAddTouris}>
                        <div className="flex gap-8">
                            <div className="flex-1 space-y-2 mb-4">
                                <label className="text-lg font-medium">Tourists Spot Name</label>
                                <input
                                    type="text" name="touristsspotname"
                                    placeholder="Tourists Spot Name"
                                    className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="flex-1 space-y-2 mb-4">
                                <label className="text-lg font-medium">Image</label>
                                <input
                                    type="text" name="image"
                                    placeholder="Car Brand Name"
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </div>
                        </div>

                        <div className="flex gap-8">
                            <div className="flex-1 space-y-2 mb-4">
                                <label className="text-lg font-medium">Location</label>

                                <input
                                    type="text" name="location"
                                    placeholder="Like Sundarban, Cox’s Bazar, Rangamati"
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </div>

                            <div className="flex-1 space-y-2 mb-4">
                                <label className="text-lg font-medium">Average Cost</label>
                                <input
                                    type="number" name="averagecost"
                                    placeholder="Car Brand Name"
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </div>

                        </div>

                        <div className="flex gap-8">
                            <div className="flex-1 space-y-2 mb-4">
                                <label className="text-lg font-medium block">Country Name</label>
                                <select name='countryname' className="select select-bordered w-full">
                                    <option disabled selected>Country Name</option>
                                    <option>Bangladesh</option>
                                    <option>Thailand</option>
                                    <option>Indonesia</option>
                                    <option>Malaysia</option>
                                    <option>Vietnam</option>
                                    <option>Cambodia</option>
                                </select>

                            </div>
                            <div className="flex-1 space-y-2 mb-4">
                                <label className="text-lg font-medium block">Seasonality</label>
                                <select name='seasonality' className="select select-bordered w-full">
                                    <option disabled selected>Seasonality Name</option>
                                    <option>Summer</option>
                                    <option>Rainy</option>
                                    <option>The Autumn</option>
                                    <option>Late-autumn</option>
                                    <option>Winter</option>
                                    <option>Spring</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex gap-8">
                            <div className="flex-1 space-y-2 mb-4">
                                <label className="text-lg font-medium">Tota Visitors PerYear</label>
                                <input
                                    type="number" name="totavisitorsperyear"
                                    placeholder="Car Brand Name"
                                    className="input input-bordered w-full max-w-xs" />
                            </div>

                            <div className="flex-1 space-y-2 mb-4">
                                <label className="text-lg font-medium block">Travel Time</label>
                                <select name='traveltime' className="select select-bordered w-full">
                                    <option disabled selected>Travel Time</option>
                                    <option>2 Days - 1 NIGHTS</option>
                                    <option>3 Days - 2  NIGHTS</option>
                                    <option>7 Days - 6 NIGHTS</option>
                                    <option>15 Days - 14 NIGHTS</option>
                                    <option>One Months</option>
                                </select>

                            </div>
                        </div>

                        <div className=" space-y-2 mb-4">
                            <label className="text-lg font-medium block">Short Description</label>
                            <textarea
                                name='description'
                                placeholder="Short Description"
                                className="textarea textarea-bordered  w-full"></textarea>
                        </div>

                        <div className="form-control my-6">
                            <button className="btn bg-[#d01818] hover:bg-[#0d1637] text-white text-xl font-bold">Add New Touris Spot</button>
                        </div>
                    </form>
                </div >
            </div >
        </div>
    );
};

export default AddTourisSpot;