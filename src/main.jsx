import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import MyCardBanner from './components/MyListedItem/MyCardBanner';
import MyListedItem from './components/MyListedItem/MyListedItem';
import Login from './components/Navbar/Login';
import Register from './components/Navbar/Register';
import RotectedRoute from './components/PrivateRoute/RotectedRoute';
import AuthProvider from './components/Provider/AuthProvider';
import Root from './components/Root';
import AddTourisSpot from './components/TouristsSpot/AddTourisSpot';
import AllTouristsSpot from './components/TouristsSpot/AllTouristsSpot';
import TouristCardDetails from './components/TouristsSpot/TouristCardDetails';
import UpdateTouristsSpot from './components/TouristsSpot/UpdateTouristsSpot';
import './index.css';
import TouristBanner from './components/TouristsSpot/TouristBanner';
import DestinationSlider from './components/Destination/DestinationSlider';
import Newslatter from './components/Newslatter/Newslatter';
import Profile from './components/Profile/Profile';
import AboutBanner from './components/About/AboutBanner';
import About from './components/About/About';
import Countries from './components/Country/Countries';
import CountryCategories from './components/Country/CountryCategories';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/profile',
        element: <RotectedRoute><Profile></Profile></RotectedRoute>
      },
      {
        path: '/alltouristspot',
        element: <><TouristBanner></TouristBanner><AllTouristsSpot></AllTouristsSpot><Newslatter></Newslatter></>,
      },
      {
        path: '/addtourisspot',
        element: <AddTourisSpot></AddTourisSpot>
      },
      {
        path: '/mylist',
        element: <><RotectedRoute><MyCardBanner></MyCardBanner><MyListedItem></MyListedItem></RotectedRoute></>
      },
      {
        path: '/touristSpot/:id',
        element: <RotectedRoute><TouristCardDetails></TouristCardDetails></RotectedRoute>
      },
      {
        path: '/updatespot/:id',
        element: <UpdateTouristsSpot></UpdateTouristsSpot>
      },
      {
        path: '/destinationSlider',
        element: <DestinationSlider></DestinationSlider>
      },
      {
        path: '/about',
        element: <><AboutBanner></AboutBanner><About></About></>
      },
      {
        path: '/countrycategories/:id',
        element: <CountryCategories></CountryCategories>
        
      },
      // {
      //   path: '/countrycategories/:id',
      // }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router}></RouterProvider>
      </HelmetProvider>
      <ToastContainer />
    </AuthProvider>
  </React.StrictMode>,
)
