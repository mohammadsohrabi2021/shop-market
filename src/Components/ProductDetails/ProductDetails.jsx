import { Button, Grid, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
//context
import { ProductsContext } from '../../Context/ProductContextProvider';

// Style
import styles from "./ProductDetails.module.css";

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
        <Grid sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, m: { xs: '3px', sm: '30px', md: '150px 150px 50px' }, justifyContent: 'space-between', alignItems: 'center', }} p={'20px'} border={1} borderColor={'silver'} borderRadius={2}>
            <img src={image} alte="product" width={'250px'} />
            <Grid display={'flex'} flexDirection={'column'} p={{xs:'20px 0 0 0',md:'0 0 0 20px'}}>
                <Typography variant={'h2'} mb={2} fontWeight={'bold'}>{title}</Typography>
                <Typography mb={3} color={'#3e3e3e'}>{description}</Typography>
                <Typography mb={3} color={'#3e3e3e'}>Category : {category}</Typography>

                <Grid display={'flex'} justifyContent={'space-between'} >
                    <Typography sx={{bgcolor:'#34a853',p:'7px 16px',color:'#fff',fontWeight:'bold'}} boxShadow={5} borderRadius={1}>{price} $</Typography>
                    <Link to={'/products'}>
                        <Button variant='contained'>
                            Back to Shop
                        </Button>
                    </Link>
                </Grid>

            </Grid>
        </Grid>
    );
};

export default ProductDetails;