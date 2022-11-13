import { Button, Grid, Typography } from '@mui/material';
import React, { useContext } from 'react';

// Component
import Cart from '../Shared/Cart';

// context
import { CartContext } from '../../Context/CartContextProvider';
import { Link } from 'react-router-dom';

// Style
import styles from "./ShopCart.module.css";

const ShopCart = () => {
    const { state, dispatch } = useContext(CartContext)
    return (
        <Grid className={styles.container}>
            <Grid className={styles.cartContainer}>
                {state.selectedItems.map(item => <Cart key={item.id} data={item} />)}
            </Grid>
            {
                state.itemsCounter > 0 && <Grid className={styles.payments}>
                    <p><span>Total Items:</span> {state.itemsCounter}</p>
                    <p><span>Total Payments:</span> {state.total} $</p>
                    <Grid className={styles.buttonContainer}>
                        <Button className={styles.clear} onClick={() => dispatch({ type: "CHECKOUT" })}>Check Out</Button>
                        <Button className={styles.checkout} onClick={() => dispatch({ type: "CLEAR" })}>Clear</Button>
                    </Grid>
                </Grid>
            }

            {
                state.checkout && <Grid className={styles.complete}>
                    <Typography variant={'h3'}>Checked Out Successfully</Typography>
                    <Link to="/products">Buy More</Link>
                </Grid>
            }

            {
                !state.checkout && state.itemsCounter === 0 && <Grid className={styles.complete}>
                    <Typography variant={'h3'}>Want to Buy?</Typography>
                    <Link to="/products">Go to Shop</Link>
                </Grid>
            }
        </Grid >
    );
};

export default ShopCart;