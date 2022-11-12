import { Grid } from '@mui/material';
import React, { useContext } from 'react';
// componenet
import Product from '../Shared/Product';
// Context
import { ProductsContext } from '../../Context/ProductContextProvider';

const Store = () => {
    const Products =useContext(ProductsContext)
    return (
        <Grid sx={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>
            {
              Products.map(product=><Product key={product.id} productData={product}/>)  
            }
        </Grid>
    );
};

export default Store;