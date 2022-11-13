import { Grid, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
//context
import { ProductsContext } from '../../Context/ProductContextProvider';

const ProductDetails = () => {

    const data = useContext(ProductsContext);
    const [product, setProduct] = useState({})
    const { productId } = useParams()
    console.log(productId);
    useEffect(() => {
        setProduct(data.filter(c => c.id === Number(productId))[0])
    }, [])
    const Product = data[productId - 1];
    const { image, title, description, price, category } = Product;
    return (
        <Grid>
            <img width={'200px'} src={image} alte="product" />
            <Grid>
                <Typography variant='h3'>{title}</Typography>
                <Typography variant='p'>{description}</Typography>
                <Grid>
                    <Typography variant='p'>Category : {category}</Typography>
                </Grid>
                <Grid>
                    <Typography variant='p'>Price: {price} $</Typography>
                </Grid>
                <Link to={'/products'}>Back to Shop</Link>

            </Grid>
        </Grid>
    );
};

export default ProductDetails;