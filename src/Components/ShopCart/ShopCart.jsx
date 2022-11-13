import { Grid } from '@mui/material';
import React, { useContext } from 'react';

// Component
import Cart from '../Shared/Cart';

// context
import { CartContext } from '../../Context/CartContextProvider';
const ShopCart = () => {
    const { state, dispatch } = useContext(CartContext)
    return (
        <Grid>
           <Grid>
            {state.selectedItems.map(item=><Cart key={item.id} data={item}/>)}
           </Grid>
        </Grid>
    );
};

export default ShopCart;