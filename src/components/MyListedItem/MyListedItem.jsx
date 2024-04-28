import { useEffect, useState } from "react";
import UseAuth from "../../Hook/UseAuth";
import { BASE_URL } from "../../constant";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const MyListedItem = () => {
    const { user } = UseAuth();
    const [spot, setSpot] = useState([])

    useEffect(() => {

        if (user?.email) {
            fetch(`${BASE_URL}/mylist/${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    setSpot(data)
                })
        }
    }, [user?.email]);

    const handleDelete = _id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${BASE_URL}/deleteSpot/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Tourist Spot has been deleted.",
                                icon: "success"
                            });
                            const remaining = item.filter(spot => spot._id !== _id);
                            setItem(remaining)
                        }
                    })

            }
        });
    }

    return (
        <div className="w-full lg:w-5/6 xl:w-8/12 mx-auto px-2 lg:px-0 py-10 md:py-12 lg:py-20">
            <table className="min-w-full divide-y table-auto bg-gray-100 text-center">
                <thead >
                    <tr className='border p-1'>
                        <th className='border p-1'></th>
                        <th className='border p-1'>Tourist Spot Name</th>
                        <th className='border p-1'>Country Name</th>
                        <th className='border p-1'>Tourist Location</th>
                        <th className='border p-1'>Cost</th>
                        <th className='border p-1'>Travel Time</th>
                        <th className='border p-1'>Update</th>
                        <th className='border p-1'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        spot.map(data => <>
                            <tr key={data._id} className='border p-1 bg-gray-100 hover:bg-gray-200'>
                                <td className='border p-1'>1</td>
                                <td className='border p-1 font-medium'>{data.touristsspotname}</td>
                                <td className='border p-1'>{data.countryname}</td>
                                <td className='border p-1'>{data.location}</td>
                                <td className='border p-1'>${data.averagecost}</td>
                                <td className='border p-1'>{data.traveltime}</td>
                                <th className='border p-1'>
                                    <NavLink to={`/updatespot/${data._id}`} className='btn bg-[#58A7DE] hover:bg-[#498bb9]'><FaRegEdit /></NavLink>
                                </th>
                                <th className='border p-1'>
                                    <button
                                        onClick={() => handleDelete(data._id)}
                                        className='btn text-white bg-[#d01818] hover:bg-[#0d1637]'><FaRegTrashAlt /></button>
                                </th>
                            </tr>
                        </>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyListedItem;