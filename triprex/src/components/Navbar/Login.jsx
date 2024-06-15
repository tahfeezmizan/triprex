import { useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { FaGithub, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../Hook/UseAuth";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";

const Login = () => {
    const { logInUser, googleLogin, githubLogin, twitterLogin } = UseAuth();
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()
    const location = useLocation();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { email, password } = data;

        logInUser(email, password)
            .then(result => {
                const user = result.user;
                navigate(location?.state ? location.state : '/');
                toast.success('Congrs! Login Sucessfull');
            })
            .catch(error => {
                const errorText = error.message;
                const errorMessage = errorText.slice(22, 40);
                toast.error(`${errorMessage}`)
            });

    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="glass hero min-h-screen bg-base-200">
            <Helmet>
                <title>Login - TripRex</title>
            </Helmet>
            <div className="card shrink-0 w-full rounded-none max-w-lg p-10 shadow-2xl bg-base-100">
                <h1 className="text-5xl text-center font-bold pt-4">Login now!</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                            <span className="label-text">Password</span>
                        </label>
                        <div className="relative input input-bordered flex items-center">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Enter Your Password"
                                className="w-4/5"
                                {...register("password", { required: true })}
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 right-4 flex items-center"
                            >
                                {showPassword ? <FaRegEyeSlash className="h-6 w-6 text-gray-500" /> : <FaRegEye className="h-6 w-6 text-gray-500" />}
                            </button>
                        </div>
                        {errors.password && <span className="text-xs text-red-500">Password is required</span>}
                    </div>
                    <div className="form-control pt-5">
                        <button className="btn w-full bg-[#d01818] hover:bg-[#0d1637] text-white text-xl font-bold">Login</button>

                    </div>
                </form>
                <div className="text-center">
                    {/* <h2 className="mb-5 -mt-6"> Login With</h2> */}
                    <div className="divider">Login With</div>
                    <div className=''>
                        <button
                            onClick={() => googleLogin()
                                .then(result => {
                                    toast.success('Congrs! Google Login Sucessfull');
                                    navigate(location?.state ? location.state : '/');
                                })
                                .catch((error) => {
                                    const errorText = error.message;
                                    console.log(errorText)
                                    const errorMessage = errorText.slice(22, 40);
                                    toast.error(errorMessage)
                                })
                            }
                            className='btn mr-3 text-2xl bg-transparent outline-none hover:bg-transparent '><FcGoogle />

                        </button>

                        <button
                            onClick={() => githubLogin()
                                .then(result => {
                                    toast.success('Congrs! Github Login Sucessfull');
                                    navigate(location?.state ? location.state : '/');
                                })
                                .catch((error) => {
                                    const errorText = error.message;
                                    console.log(errorText)
                                    const errorMessage = errorText.slice(22, 62);
                                    toast.error(errorMessage)
                                })
                            }
                            className='btn ml-3 text-2xl bg-transparent outline-none hover:bg-transparent '><FaGithub />
                        </button>

                        <button
                            onClick={() => twitterLogin()
                                .then(result => {
                                    toast.success('Congrs! Twitter Login Sucessfull');
                                    navigate(location?.state ? location.state : '/');
                                })
                                .catch((error) => {
                                    const errorText = error.message;
                                    console.log(errorText)
                                    const errorMessage = errorText.slice(22, 62);
                                    toast.error(errorMessage)
                                })
                            }
                            className='btn ml-3 text-xl bg-transparent outline-none hover:bg-transparent '><FaXTwitter />
                        </button>
                    </div>
                </div>
                <h3 className="text-center pt-3">Need an account? <NavLink to="/register" className="text-blue-600 hover:text-[#d01818] font-bold">Create Account</NavLink></h3>
            </div>
        </div>
    );
};

export default Login;