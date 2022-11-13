import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import { Container, Grid } from "@mui/material";
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
              <Typography variant="h5" component={"h1"}>
                {"Shopify"}
              </Typography>
            </Link>
            <Box display={"flex"} flexGrow={1} justifyContent="end">
              <IconButton className={styles.iconContainer}>
                <Link to={'/Cart'}>
                  <ShoppingCartIcon />
                </Link>
                <span>{state.itemsCounter}</span>
              </IconButton>

              <IconButton>
                <Avatar>
                  <PersonIcon />
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
