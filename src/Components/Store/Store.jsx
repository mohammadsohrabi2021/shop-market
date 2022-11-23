import { Grid } from '@mui/material';
import React, { useContext, useEffect } from 'react';
// componenet
import Product from '../Shared/Product';
// Context
import { ProductsContext } from '../../Context/ProductContextProvider';

const Store = () => {
    const Products =useContext(ProductsContext)

    return (
        <Grid display={'flex'} flexWrap={'wrap'} justifyContent={'space-around'}minHeight="100vh">
            {
              Products.map(product=><Product key={product.id} productData={product}/>)  
            }
        </Grid>
    );
};

export default Store;