import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
import ErrorPage from './components/ErrorPage/ErrorPage';
import RrotectedRoute from './components/PrivateRoute/RrotectedRoute';

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
        path: '/alltouristspot',
        element: <AllTouristsSpot></AllTouristsSpot>,
      },
      {
        path: '/addtourisspot',
        element: <AddTourisSpot></AddTourisSpot>
      },
      {
        path: '/mylist',
        element: <><MyCardBanner></MyCardBanner><MyListedItem></MyListedItem></>
      },
      {
        path: '/touristSpot/:id',
        element: <RotectedRoute><TouristCardDetails></TouristCardDetails></RotectedRoute>
      },
      {
        path: '/updatespot/:id',
        element: <RrotectedRoute><UpdateTouristsSpot></UpdateTouristsSpot></RrotectedRoute>
      }

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
