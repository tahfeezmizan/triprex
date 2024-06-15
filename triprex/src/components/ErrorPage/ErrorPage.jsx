import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='w-full lg:w-11/12 xl:w-8/12 mx-auto px-4 md:px-6 lg:px-0 py-10'>
            <Helmet>
                <title>404 Error Page - Trip Rex React Template</title>
            </Helmet>
            <div className="flex flex-col h-screen justify-center items-center">
                <img className='max-w-prose' alt="" />
                <h1 className="text-[180px] font-black">404 </h1>
                <h2 className="text-7xl font-bold -mt-10 pb-5">Page Not Found</h2>
                <NavLink to="/" className="btn bg-[#d01818] hover:bg-[#0d1637] text-white">Back To Home</NavLink>
            </div>
        </div>
    );
};

export default ErrorPage;