import React, { createContext, useEffect, useState } from 'react';
// Api
import getProducts from '../Services/Api';

const ProductContext = createContext()

const ProductContextProvider = (props) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchAPI = async () => {
            setProducts(await getProducts())
        }

        fetchAPI()
    }, [])

    return (
        <ProductContextProvider.Provider value={products}>
            {props.children}
        </ProductContextProvider.Provider>
    );
};

export default ProductContextProvider;