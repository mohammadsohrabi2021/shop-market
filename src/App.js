

//context
import { ProductContextProvider } from './Context/ProductContextProvider';

//router
import { RouterProvider } from "react-router-dom";
import router from './router/router'

function App() {
  return (
    <ProductContextProvider>
        <RouterProvider router={router} />
    </ProductContextProvider>
  );
}

export default App;
