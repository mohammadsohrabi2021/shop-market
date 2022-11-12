import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Store from '../Components/Store/Store.jsx';
const router = createBrowserRouter([
    {
        path: "/",
        element: <Store/>,
    },
]);
export default router