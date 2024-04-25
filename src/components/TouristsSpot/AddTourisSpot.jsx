import React from 'react';
import { useForm } from 'react-hook-form';

const AddTourisSpot = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data);

        fetch("http://localhost:5000/cars", {
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
                    <div className="flex gap-10">
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
                            <label className="text-lg font-medium">Location</label>

                            <input
                                type="text" name="location"
                                placeholder="Tourist Location"
                                className="input input-bordered w-full max-w-xs"
                                {...register("location", { required: true })} />
                            {errors.location && <span className="text-red-500 text-sm">Location is required</span>}
                        </div>
                    </div>
                    <div className="flex gap-10">
                        <div className="flex-1 space-y-2 mb-4">
                            <label className="text-lg font-medium block">Country Name</label>
                            <select name='countryname' className="select select-bordered w-full"
                                {...register("countryname", { required: true })}
                            >
                                <option disabled selected>Country Name</option>
                                <option>Star Wars</option>
                                <option>Harry Potter</option>
                                <option>Lord of the Rings</option>
                                <option>Planet of the Apes</option>
                                <option>Star Trek</option>
                            </select>
                            {errors.countryname && <span className="text-red-500 text-sm">Brand name is required</span>}
                        </div>
                        <div className="flex-1 space-y-2 mb-4">
                            <label className="text-lg font-medium block">Country Name</label>
                            <select name='countryname' className="select select-bordered w-full"
                                {...register("countryname", { required: true })}
                            >
                                <option disabled selected>Country Name</option>
                                <option>Star Wars</option>
                                <option>Harry Potter</option>
                                <option>Lord of the Rings</option>
                                <option>Planet of the Apes</option>
                                <option>Star Trek</option>
                            </select>
                            {errors.countryname && <span className="text-red-500 text-sm">Brand name is required</span>}
                        </div>
                    </div>
                    <div className="flex gap-10">
                        <div className="flex-1 space-y-2 mb-4">
                            <label className="text-lg font-medium">Image</label>
                            <input
                                type="text" name="image"
                                placeholder="Car Brand Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("image", { required: true })} />
                            {errors.image && <span className="text-red-500 text-sm">Image is required</span>}
                        </div>
                        <div className="flex-1 space-y-2 mb-4">
                            <label className="text-lg font-medium">Rating</label>
                            <input
                                type="number" name="rating"
                                placeholder="Car Brand Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("rating", { required: true })} />
                            {errors.rating && <span className="text-red-500 text-sm">Rating is required</span>}
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
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div >
        </div >
    );
};

export default AddTourisSpot;