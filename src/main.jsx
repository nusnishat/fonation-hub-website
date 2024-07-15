import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './comonents/Root/Root.jsx';
import Home from './comonents/Home/Home.jsx';
import Donation from './comonents/Donation/Donation.jsx';
import Statistics from './comonents/Statistics/Statistics.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    Children: [
      {
        path: "/home",
        element: <Home></Home>
      },
      {
        path: "/donation",
        element: <Donation></Donation>
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
