

//context
import { ProductContextProvider } from './Context/ProductContextProvider';
import CartContextProvider from './Context/CartContextProvider';
//router
import { RouterProvider } from "react-router-dom";
import router from './router/router'

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <RouterProvider router={router} />
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
