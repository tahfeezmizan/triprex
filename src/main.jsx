import './index.css';
import React from 'react';
import Root from './components/Root';
import ReactDOM from 'react-dom/client';
import Home from './components/Home/Home';
import About from './components/About/About';
import Login from './components/Navbar/Login';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Profile from './components/Profile/Profile';
import { HelmetProvider } from 'react-helmet-async';
import Register from './components/Navbar/Register';
import Countries from './components/Country/Countries';
import ErrorPage from './components/ErrorPage/ErrorPage';
import AboutBanner from './components/About/AboutBanner';
import Newslatter from './components/Newslatter/Newslatter';
import AuthProvider from './components/Provider/AuthProvider';
import MyCardBanner from './components/MyListedItem/MyCardBanner';
import MyListedItem from './components/MyListedItem/MyListedItem';
import CountriesBanner from './components/Country/CountriesBanner';
import RotectedRoute from './components/PrivateRoute/RotectedRoute';
import AddTourisSpot from './components/TouristsSpot/AddTourisSpot';
import TouristBanner from './components/TouristsSpot/TouristBanner';
import CountryCategories from './components/Country/CountryCategories';
import AllTouristsSpot from './components/TouristsSpot/AllTouristsSpot';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import DestinationSlider from './components/Destination/DestinationSlider';
import UpdateTouristsSpot from './components/TouristsSpot/UpdateTouristsSpot';
import TouristCardDetails from './components/TouristsSpot/TouristCardDetails';

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
        element: <><TouristBanner></TouristBanner>
          <AllTouristsSpot></AllTouristsSpot>
          <Countries></Countries>
          <Newslatter></Newslatter></>,
      },
      {
        path: '/addtourisspot',
        element: <AddTourisSpot></AddTourisSpot>
      },
      {
        path: '/mylist',
        element: <><RotectedRoute>
          <MyCardBanner></MyCardBanner>
          <MyListedItem></MyListedItem>
        </RotectedRoute></>
      },
      {
        path: '/touristSpot/:id',
        element: <RotectedRoute>
          <TouristCardDetails></TouristCardDetails>
        </RotectedRoute>
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
        element: <RotectedRoute>
          <CountriesBanner></CountriesBanner>
          <CountryCategories></CountryCategories>
        </RotectedRoute>

      }, 4
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
