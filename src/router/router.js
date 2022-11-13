import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Store from '../Components/Store/Store.jsx';
import ProductDetails from "../Components/ProductDetails/ProductDetails.jsx";
import Layout from '../Components/layout'
import ShopCart from "../Components/ShopCart/ShopCart.jsx";
const router = createBrowserRouter([
  
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/products",
                element: <Store/>,
            },
            {
                path:'/products/:productId',
                element:<ProductDetails />,
            },
            {
                path:'/Cart',
                element:<ShopCart/>,
            }
        ],
      },
]);
export default router