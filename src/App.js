import { Route, Routes } from 'react-router-dom';

import Navigation from './components/navigation/Navigation';
import Cart from './Routes/cart/Cart';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<p>Home</p>}/>
        <Route path='wishlist' element={<p>Wishlist</p>}/>
        <Route path='Cart' element={<Cart/>}/>
      </Route>
    </Routes>
  );
}

export default App;
