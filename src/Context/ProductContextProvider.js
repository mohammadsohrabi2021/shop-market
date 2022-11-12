import React, { createContext, useEffect, useState } from 'react';
// Api
import { getProducts } from '../Services/Api';

export const ProductsContext = createContext()

const ProductContextProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchAPI = async () => {
            setProducts(await getProducts())
        }

        fetchAPI()
    }, [])

    return (
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    );
};

export { ProductContextProvider };