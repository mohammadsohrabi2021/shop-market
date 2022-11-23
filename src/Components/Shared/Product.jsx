import { Button, Grid, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// icon
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
//Function
import { Shorten, isInCart, quantityCount } from '../../Helper/Shorten';

// context
import { CartContext } from '../../Context/CartContextProvider';

// Style
import styles from "./Product.module.css";

const Product = ({ productData }) => {
    const { state, dispatch } = useContext(CartContext)
    return (
        <Grid className={styles.container}>
            <img className={styles.cardImage} src={productData.image} alte="product" width={'200px'} />
            <Typography>
                {Shorten(productData.title)}
            </Typography>
            <Typography>
                {productData.price} $
            </Typography>
            <Grid className={styles.linkContainer}>
                <Link to={`/products/${productData.id}`}>
                    <Typography>
                        Details
                    </Typography>
                </Link>
                <Grid  className={styles.buttonContainer}>
                    {quantityCount(state, productData.id) > 1 && <Button className={styles.smallButton} onClick={() => dispatch({ type: 'DECREASE', payload: productData })}><HorizontalRuleIcon /></Button>}
                    {quantityCount(state, productData.id) === 1 && <Button className={styles.smallButton} onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: productData })}><DeleteIcon /></Button>}
                    {quantityCount(state, productData.id) > 0 && <Typography className={styles.counter}>{quantityCount(state, productData.id)}</Typography>}
                    {
                        isInCart(state, productData.id) ?
                            <Button className={styles.smallButton} onClick={() => dispatch({ type: "INCREASE", payload: productData })}><AddIcon /></Button> :
                            <Button variant='outlined' onClick={() => dispatch({ type: "ADD_ITEM", payload: productData })}>Add to Cart</Button>
                    }

                </Grid>
            </Grid>
        </Grid>
    );
};

export default Product;