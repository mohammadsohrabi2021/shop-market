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
import { CartContext } from '../../Context/CartContextProvider'
const Product = ({ productData }) => {
    const { state, dispatch } = useContext(CartContext)
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
                    {quantityCount(state,productData.id) >1 && <Button variant='outlined' onClick={() => dispatch({ type: 'DECREASE', payload: productData })}><HorizontalRuleIcon/></Button>}
                    {quantityCount(state,productData.id) === 1 && <Button variant='outlined' onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: productData })}><DeleteIcon/></Button>}
                    {
                        isInCart(state, productData.id) ?
                            <Button variant='outlined' onClick={() => dispatch({ type: "INCREASE", payload: productData })}><AddIcon/></Button> :
                            <Button variant='outlined' onClick={() => dispatch({ type: "ADD_ITEM", payload: productData })}>Add to Cart</Button>
                    }

                </Grid>
            </Grid>
        </Grid>
    );
};

export default Product;