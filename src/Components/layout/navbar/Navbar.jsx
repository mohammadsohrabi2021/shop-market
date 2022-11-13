import React, { useState, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SettingsIcon from "@mui/icons-material/Settings";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";

// context
import { CartContext } from '../../../Context/CartContextProvider';

import { Container, Grid } from "@mui/material";
const menuItems = [
  {
    title: "فروشگاه",
    href: "/",
  },
  {
    title: "درباره ما",
    href: "/about-us",
  },
];

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
      <Toolbar>

        <Link to={'/products'}>
          <Typography variant="h5" component={"h1"}>
            {"Shopify"}
          </Typography>
        </Link>
        <Box display={"flex"} flexGrow={1} justifyContent="end">
          <IconButton
            sx={{
              color: "white",
              flexBasis: 25,
            }}
          >
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
    </AppBar>
    </Grid>
  );
};

export default Navbar;
