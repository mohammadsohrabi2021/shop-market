//context
import { ProductContextProvider } from "./Context/ProductContextProvider";
import CartContextProvider from "./Context/CartContextProvider";
//router
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
// Theme
import { ThemeProvider } from "@mui/material";
import {theme} from "./Theme/theme";
function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
