import { Grid, CircularProgress } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
// componenet
import Product from "../Shared/Product";
// Context
import { ProductsContext } from "../../Context/ProductContextProvider";
//hooke
import useTitle from "../../Hooks/useTitle";
const Store = () => {
  const Products = useContext(ProductsContext);
  useTitle("shop market")
  return (
    <Grid
      display={"flex"}
      flexWrap={"wrap"}
      justifyContent={"space-around"}
      minHeight="100vh"
    >
      {Products.map((product) => (
        <Product key={product.id} productData={product} />
      ))}
    </Grid>
  );
};

export default Store;
