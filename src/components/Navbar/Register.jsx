import { useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import UseAuth from "../../Hook/UseAuth";
import { toast } from "react-toastify";

const Register = () => {
    const { createUser } = UseAuth();

    const [showPassword, setShowPassword] = useState(false);
    // const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { email, password, name, photoUrl } = data;
        console.log(data)

        createUser(email, password)
            .then(result => {
                const registerData = result.user;
                console.log(registerData)
                // userProfileUpdate(name, photoUrl)
                // logOut()
                toast.success('User Register Sucessfully')
                // navigate('/login')
            })
            .catch(error => {
                const errorMessage = error.message;
                toast.error(`${errorMessage}`)
            });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="hero min-h-screen bg-[#f8f8f8]" >
            <Helmet>
                <title>Register Page - Trip Rex React Template</title>
            </Helmet>
            <div className="card shrink-0 w-full max-w-lg p-10 shadow-2xl bg-base-100">
                <h1 className="text-5xl text-center font-bold pt-10">Register Now!</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            name="name" placeholder="Enter Your Name"
                            className="input input-bordered"
                            {...register("name", { required: true })}
                        />
                        {errors.name && <span className="text-xs text-red-500">Name is required</span>}
                        {/* {errors.name && toast.success('Name')} */}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Your Email"
                            className="input input-bordered"

                            {...register("email", { required: true })}
                        />
                        {errors.email && <span className="text-xs text-red-500">Email is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            name="photourl"
                            placeholder="Photo URL"
                            className="input input-bordered"
                            {...register("photoUrl")}
                        />
                        {/* {errors.photourl && toast.success('Photo Url')} */}
                        {errors.photourl && <span className="text-xs text-red-500"></span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className="relative input input-bordered flex items-center">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Enter Your Password"
                                className="w-4/5"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must have at least 6 characters"
                                    },
                                    validate: {
                                        hasUppercase: value => /[A-Z]/.test(value) || "Password must contain at least one uppercase letter",
                                        hasLowercase: value => /[a-z]/.test(value) || "Password must contain at least one lowercase letter",
                                        hasNumber: value => /[0-9]/.test(value) || "Password must have at least 1 Number"
                                    }
                                })}
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 right-4 flex items-center"
                            >
                                {showPassword ? <FaRegEyeSlash className="h-6 w-6 text-gray-500" /> : <FaRegEye className="h-6 w-6 text-gray-500" />}
                            </button>
                        </div>
                        {errors.password && <span className="text-xs text-red-500">{errors?.password?.message}</span>}
                    </div>
                    <div className="form-control my-6">
                        <button type="submit" className="btn bg-[#d01818] hover:bg-[#0d1637] text-white text-xl font-bold">Create An Account</button>
                    </div>
                </form>
                <h3 className="text-black text-center -mt-7">Have an account? <NavLink to="/login" className="text-[#d01818] hover:text-[#0d1637] font-bold ">Sing In</NavLink></h3>
            </div>
        </div>
    );
};

export default Register;