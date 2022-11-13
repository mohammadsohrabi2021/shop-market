import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Store from '../Components/Store/Store.jsx';
import ProductDetails from "../Components/ProductDetails/ProductDetails.jsx";
const router = createBrowserRouter([
    {
        path: "/products",
        element: <Store/>,
    },
    {
        path:'/products/:productId',
        element:<ProductDetails />,
    }
]);
export default router