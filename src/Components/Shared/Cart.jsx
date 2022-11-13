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
const Cart = (props) => {

    const { dispatch } = useContext(CartContext)

    const { image, title, price, quantity } = props.data
    return (
        <Grid>
            <img src={image} alte="product" width={'200px'} />
            <Typography>
                {Shorten(title)}
            </Typography>
            <Typography>
                {price} $
            </Typography>
            <Grid>
                <Typography>
                    {quantity}
                </Typography>
            </Grid>
            <Grid>
                {
                    quantity > 1 ?
                        <Button variant='outlined' onClick={() => dispatch({ type: 'DECREASE', payload: props.data })}><HorizontalRuleIcon /></Button>
                        :
                        <Button variant='outlined' onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: props.data })}><DeleteIcon /></Button>
                }
                <Button variant='outlined' onClick={() => dispatch({ type: "INCREASE", payload: props.data })}><AddIcon /></Button> :
            </Grid>
        </Grid>

    );
};

export default Cart;