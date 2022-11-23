import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import image from '../../../assets/image/photo6019226439066435666.jpg'
// Style
import styles from "./Navbar.module.css";
// context
import { CartContext } from '../../../Context/CartContextProvider';


const Navbar = () => {
  const { state } = useContext(CartContext)
  return (
    <Grid mb={10}>
      <AppBar
        position="fixed"
        sx={{
          zIndex: 1300,

        }}
      >
        <Container>
          <Toolbar>

            <Link to={'/products'}>
              <Typography variant="h5" component={"h1"} color={'#fff'}>
                {"Shopify"}
              </Typography>
            </Link>
            <Box display={"flex"} flexGrow={1} gap={1} justifyContent="end">
              <IconButton className={styles.iconContainer}>
                <Link to={'/Cart'}>
                  <Typography color="#fff"><ShoppingCartIcon /></Typography>
                </Link>
                <Typography bgcolor={'red'} variant="h3">{state.itemsCounter}</Typography>
              </IconButton>

              <IconButton>
                <Avatar>
                  <img src={image} width={'36px'}/>
                </Avatar>
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Grid>
  );
};

export default Navbar;
