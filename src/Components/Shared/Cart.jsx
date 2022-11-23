import { Button, Grid, Typography } from '@mui/material';
import React, { useContext } from 'react';
// CONTEXT
import { CartContext } from '../../Context/CartContextProvider';
//Function
import { Shorten, isInCart, quantityCount } from '../../Helper/Shorten';
// icon
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

// Style
import styles from "./Cart.module.css";
//hooke
import useTitle from "../../Hooks/useTitle";
const Cart = (props) => {
  useTitle("Cart");
   
    const { dispatch } = useContext(CartContext)

    const { image, title, price, quantity } = props.data
    return (
        <Grid className={styles.container} flexDirection={{xs:'column',sm:'row'}}>
            <img className={styles.productImage} src={image} alte="product" width={'200px'} />
            <Grid className={styles.data}>
                <Typography>
                    {Shorten(title)}
                </Typography>
                <Typography>
                    {price} $
                </Typography>
            </Grid>
            <Grid>
                <Typography className={styles.quantity}>
                    {quantity}
                </Typography>
            </Grid>
            <Grid className={styles.buttonContainer} >
                {
                    quantity > 1 ?
                        <Button variant='outlined' onClick={() => dispatch({ type: 'DECREASE', payload: props.data })}><HorizontalRuleIcon /></Button>
                        :
                        <Button variant='outlined' onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: props.data })}><DeleteIcon /></Button>
                }
                <Button variant='outlined' onClick={() => dispatch({ type: "INCREASE", payload: props.data })}><AddIcon /></Button> 
            </Grid>
        </Grid>

    );
};

export default Cart;