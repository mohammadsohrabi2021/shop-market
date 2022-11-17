import { Grid } from '@mui/material';
import React, { useContext } from 'react';
// componenet
import Product from '../Shared/Product';
// Context
import { ProductsContext } from '../../Context/ProductContextProvider';
// Style
import styles from "./Store.module.css";
const Store = () => {
    const Products =useContext(ProductsContext)
    return (
        <Grid display={'flex'} flexWrap={'wrap'} justifyContent={'space-around'}>
            {
              Products.map(product=><Product key={product.id} productData={product}/>)  
            }
        </Grid>
    );
};

export default Store;