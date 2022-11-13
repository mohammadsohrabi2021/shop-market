import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

//Function
import { Shorten } from '../../Helper/Shorten';

const Product = ({ productData }) => {
    return (
        <Grid>
            <img src={productData.image} alte="product" width={'200px'} />
            <Typography>
                {Shorten(productData.title)}
            </Typography>
            <Typography>
                {productData.price}
            </Typography>
            <Grid>
                <Link to={`/products/${productData.id}`}>
                    <Typography>
                        Details
                    </Typography>
                </Link>
                <Grid>
                    <Button variant='outlined'>Add to Cart</Button>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Product;