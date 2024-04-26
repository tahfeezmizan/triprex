import React from 'react';
import { useForm } from 'react-hook-form';
import UseAuth from '../../Hook/UseAuth';

const AddTourisSpot = () => {
    const { user } = UseAuth();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data);
        // const email = user.email;

        fetch('http://localhost:5000/touristsspot', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        
    }

    return (
        <div className="w-full md:w-8/12 mx-auto py-2">
            <div className="max-w-screen-md mx-auto border rounded-lg p-12">
                <h1 className="text-5xl text-center font-bold pb-5">Add Tourists Spot</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex gap-8">
                        <div className="flex-1 space-y-2 mb-4">
                            <label className="text-lg font-medium">Tourists Spot Name</label>
                            <input
                                type="text" name="touristsspotname"
                                placeholder="Tourists Spot Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("touristsspotname", { required: true })} />
                            {errors.touristsspotname && <span className="text-red-500 text-sm">Name is required</span>}
                        </div>
                        <div className="flex-1 space-y-2 mb-4">
                            <label className="text-lg font-medium">Image</label>
                            <input
                                type="text" name="image"
                                placeholder="Car Brand Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("image", { required: true })} />
                            {errors.image && <span className="text-red-500 text-sm">Image is required</span>}
                        </div>
                    </div>

                    <div className="flex gap-8">
                        <div className="flex-1 space-y-2 mb-4">
                            <label className="text-lg font-medium">Location</label>

                            <input
                                type="text" name="location"
                                placeholder="Like Sundarban, Cox’s Bazar, Rangamati"
                                className="input input-bordered w-full max-w-xs"
                                {...register("location", { required: true })} />
                            {errors.location && <span className="text-red-500 text-sm">Location is required</span>}
                        </div>

                        <div className="flex-1 space-y-2 mb-4">
                            <label className="text-lg font-medium">Average Cost</label>
                            <input
                                type="number" name="averagecost"
                                placeholder="Car Brand Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("averagecost", { required: true })} />
                            {errors.averagecost && <span className="text-red-500 text-sm">Average Cost is required</span>}
                        </div>

                    </div>

                    <div className="flex gap-8">
                        <div className="flex-1 space-y-2 mb-4">
                            <label className="text-lg font-medium block">Country Name</label>
                            <select name='countryname' className="select select-bordered w-full"
                                {...register("countryname", { required: true })}
                            >
                                <option disabled selected>Country Name</option>
                                <option>Bangladesh</option>
                                <option>Thailand</option>
                                <option>Indonesia</option>
                                <option>Malaysia</option>
                                <option>Vietnam</option>
                                <option>Cambodia</option>
                            </select>
                            {errors.countryname && <span className="text-red-500 text-sm">Country name is required</span>}
                        </div>
                        <div className="flex-1 space-y-2 mb-4">
                            <label className="text-lg font-medium block">Seasonality</label>
                            <select name='seasonality' className="select select-bordered w-full"
                                {...register("seasonality", { required: true })}
                            >
                                <option disabled selected>Seasonality Name</option>
                                <option>Summer</option>
                                <option>Rainy</option>
                                <option>The Autumn</option>
                                <option>Late-autumn</option>
                                <option>Winter</option>
                                <option>Spring</option>
                            </select>
                            {errors.seasonality && <span className="text-red-500 text-sm">Seasonality name is required</span>}
                        </div>

                    </div>
                    <div className="flex gap-8">
                        <div className="flex-1 space-y-2 mb-4">
                            <label className="text-lg font-medium">Tota Visitors PerYear</label>
                            <input
                                type="number" name="totavisitorsperyear"
                                placeholder="Car Brand Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("totavisitorsperyear", { required: true })} />
                            {errors.totavisitorsperyear && <span className="text-red-500 text-sm">Tota Visitors PerYear is required</span>}
                        </div>

                        <div className="flex-1 space-y-2 mb-4">
                            <label className="text-lg font-medium block">Travel Time</label>
                            <select name='traveltime' className="select select-bordered w-full"
                                {...register("traveltime", { required: true })}
                            >
                                <option disabled selected>Travel Time</option>
                                <option>2 Days</option>
                                <option>3 Days</option>
                                <option>7 Days</option>
                                <option>15 Days</option>
                                <option>One Months</option>
                            </select>
                            {errors.traveltime && <span className="text-red-500 text-sm">Travel Time name is required</span>}
                        </div>
                    </div>


                    <div className=" space-y-2 mb-4">
                        <label className="text-lg font-medium block">Short Description</label>
                        <textarea
                            placeholder="Short Description"
                            className="textarea textarea-bordered  w-full"
                            {...register("description")}
                        ></textarea>

                        {/* {errors.description && <span className="text-red-500 text-sm">Rating is required</span>} */}
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary text-xl text-white">Add New Touris Spot</button>
                    </div>
                </form>
            </div >
        </div >
    );
};

export default AddTourisSpot;