import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Navbar/Login';
import Register from './components/Navbar/Register';
import AuthProvider from './components/Provider/AuthProvider';
import Root from './components/Root';
import AllTouristsSpot from './components/TouristsSpot/AllTouristsSpot';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddTourisSpot from './components/TouristsSpot/AddTourisSpot';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
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
        element: <AllTouristsSpot></AllTouristsSpot>
      },
      {
        path: '/addtourisspot',
        element: <AddTourisSpot></AddTourisSpot>
      },

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
