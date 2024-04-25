import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Root from './components/Root';
import Home from './components/Home/Home';
import Login from './components/Navbar/Login';
import Register from './components/Navbar/Register';
import AllTouristsSpot from './components/TouristsSpot/AllTouristsSpot';

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

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router}></RouterProvider>

  </React.StrictMode>,
)
