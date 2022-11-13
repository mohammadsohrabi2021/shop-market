import { Grid, Typography } from '@mui/material';
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
        <Grid className={styles.container}>
            <img className={styles.image} src={image} alte="product" />
            <Grid className={styles.textContainer}>
                <h3>{title}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.description}>Category : {category}</p>

                <Grid className={styles.buttonContainer}>
                    <span className={styles.price}>{price} $</span>
                    <Link to={'/products'}>Back to Shop</Link>
                </Grid>

            </Grid>
        </Grid>
    );
};

export default ProductDetails;