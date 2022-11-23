import { Button, Grid, Typography } from '@mui/material';
import React, { useContext } from 'react';

// Component
import Cart from '../Shared/Cart';

// context
import { CartContext } from '../../Context/CartContextProvider';
import { Link } from 'react-router-dom';


const ShopCart = () => {
    const { state, dispatch } = useContext(CartContext)
    return (
        <Grid container display={'flex'} justifyContent={'center'} flexDirection={{ xs: 'column', md: 'row' }} xs={12} p={2} gap={1}>
            <Grid item xs={12} md={8} >
                {state.selectedItems.map(item => <Cart key={item.id} data={item} />)}
            </Grid>
            <Grid item xs={12} md={3.5}>
                {
                    state.itemsCounter > 0 && <Grid border={1} borderColor={'silver'} borderRadius={2} textAlign={'left'}>
                        <Grid display={'flex'} gap={2} color={'#3d3d3d'} m={'20px 20px 10px'}><Typography color={'#1a73e8'}>Total Items:</Typography> {state.itemsCounter}</Grid >
                        <Grid display={'flex'} gap={2} color={'#3d3d3d'} m={'20px 20px 10px'}><Typography color={'#1a73e8'}>Total Payments:</Typography> {state.total} $</Grid >
                        <Grid item container display={'flex'} justifyContent={'space-between'} alignItems={'center'} p={2}>
                            <Grid item> <Button variant='outlined'  onClick={() => dispatch({ type: "CHECKOUT" })}>Check Out</Button></Grid>
                            <Grid item> <Button variant='contained' color="success" onClick={() => dispatch({ type: "CLEAR" })}>Clear</Button></Grid>
                        </Grid>
                    </Grid>
                }
            </Grid>

            <Grid item xs={12} md={11} >
                {
                    state.checkout && <Grid container height={'100px'} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} justifyContent={{ xs: 'center', md: 'space-between' }} alignItems={{ xs: 'space-between', md: 'center' }}>
                        <Grid item>
                            <Typography pb={3} variant={'h3'} color={'#167d32'} fontSize={'1.2rem'}>Checked Out Successfully</Typography>
                        </Grid>
                        <Grid item>
                            <Link to="/">
                                <Button variant='contained'>Buy More</Button>
                            </Link>
                        </Grid>
                    </Grid>
                }

            </Grid>
            <Grid item xs={12} md={11}>
                {
                    !state.checkout && state.itemsCounter === 0 && <Grid container height={'100px'} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} justifyContent={{ xs: 'center', md: 'space-between' }} alignItems={{ xs: 'space-between', md: 'center' }}>
                        <Grid item>
                            <Typography variant={'h3'} pb={3}>Want to Buy?</Typography>
                        </Grid>
                        <Grid item>
                            <Link to="/">
                                <Button variant='contained'>Go to Shop</Button>
                            </Link>
                        </Grid>
                    </Grid>
                }
            </Grid>
        </Grid >
    );
};

export default ShopCart;