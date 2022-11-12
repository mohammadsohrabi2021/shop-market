
import { Grid } from '@mui/material';
import Store from './Components/Store/Store';
//context
import {ProductContextProvider} from './Context/ProductContextProvider';
function App() {
  return (
    <ProductContextProvider>
      <Store />
    </ProductContextProvider>
  );
}

export default App;
