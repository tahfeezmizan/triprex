import React, { useEffect, useState } from 'react';
import UseAuth from '../../Hook/UseAuth';
import { Helmet } from 'react-helmet';

const Profile = () => {
    const { user, userProfileUpdate } = UseAuth();
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [photoURL, setPhotoURL] = useState('');

    useEffect(() => {
        if (user) {
            setDisplayName(user.displayName || '');
            setEmail(user.email || '');
            setPhotoURL(user.photoURL || '');
        }
    }, [user]);

    const handleUpdateProfile = (e) => {
        console.log('update profile clicked')
        e.preventDefault();
        let updatedProfile = {
            displayName,
            email,
            photoURL
        };

        userProfileUpdate(displayName, photoURL)
            .then(() => {
                toast.success('Profile updated successfully!');
            })
            .catch((error) => {
                console.error('Error updating profile:', error);
                toast.error('Failed to update profile. Please try again.');
            });
    };

    if (!user) {
        return <p>Loading profile...</p>;
    }

    return (
        <div className="" >
            <div className='w-full lg:w-9/12 xl:w-8/12 mx-auto px-3 py-56 md:px-0'
            >
                <Helmet>
                    <title>Profile - Trip Rex React Template</title>
                </Helmet>
                <div className="bg-gray-100 shadow-xl text-center w-96 mx-auto p-10 rounded-lg">
                    <img data-aos="fade-down" data-aos-duration="1800" src={photoURL} alt="Profile" className='mx-auto rounded-full w-32 h-32 object-cover mb-4' />
                    <h2 data-aos="fade-left" data-aos-duration="1900" className='text-4xl'>{displayName}</h2>
                    <p data-aos="fade-left" data-aos-duration="2000" className="text-gray-600 mb-4">{email}</p>

                    {/* Update Profile Form */}
                    <form onSubmit={handleUpdateProfile} className="text-left">
                        <label data-aos="fade-left" data-aos-duration="2200" htmlFor="displayName" className="block font-medium text-gray-700">Display Name:</label>
                        <input
                            data-aos="fade-left"
                            data-aos-duration="2300"
                            type="text"
                            id="displayName"
                            placeholder='Change Name'
                            value={displayName}
                            onChange={(e) => setDisplayName(e.target.value)}
                            className="w-full border rounded-md p-2 mb-4"
                        />

                        <label data-aos="fade-left" data-aos-duration="2400" htmlFor="photoURL" className="block font-medium text-gray-700">Profile Picture URL:</label>
                        <input
                            data-aos="fade-left"
                            data-aos-duration="2500"
                            type="text"
                            id="photoURL"
                            placeholder='Add New Photo'
                            value={photoURL}
                            onChange={(e) => setPhotoURL(e.target.value)}
                            className="w-full border rounded-md p-2 mb-4"
                        />

                        <button data-aos="fade-left" data-aos-duration="2600" type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                            Update Profile
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;