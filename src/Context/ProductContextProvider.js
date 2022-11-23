import { Grid, CircularProgress } from "@mui/material";
import React, { createContext, useEffect, useState } from "react";
// Api
import { getProducts } from "../Services/Api";

export const ProductsContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAPI = async () => {
      setProducts(await getProducts());
      setLoading(false);
    };

    fetchAPI();
  }, []);
  if (loading) {
    return (
      <Grid
        container
        item
        xs={12}
        alignItems={"center"}
        justifyContent={"center"}
        mt={10}
      >
        <CircularProgress />
      </Grid>
    );
  }
  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductContextProvider };
