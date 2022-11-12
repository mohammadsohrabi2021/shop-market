import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
//Function
import { Shorten } from '../Helper/Shorten';
const Product = ({ productData}) => {
    return (
        <Grid>
            <img src={productData.image} alte="product" width={'200px'}/>
            <Typography>
                {Shorten(productData.title)}
            </Typography>
            <Typography>
               { productData.price}
            </Typography>
            <Grid>
                <Typography>
                    Details
                </Typography>
                <Grid>
                    <Button>Add to Cart</Button>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Product;