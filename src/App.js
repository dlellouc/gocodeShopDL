
import './App.css';
import Nav from './components/Nav/Nav';
import Products from './components/Products/Products';
import Spinner from './components/Spinner/Spinner'

// import {useState, useEffect, useContext} from 'react';
// import {productsArr} from './data/data'
// import { useFetchAll } from './hooks/useFetchAll';
import { useContext } from 'react';
import MyContext from './MyContext';

import { useNavigate } from 'react-router-dom';

import Cart from './components/Cart/Cart';

// import { Button, Drawer } from "@mui/material";
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';


function App() {
  const { allProducts, cartOpen, setCartOpen } = useContext(MyContext);

  const navigate = useNavigate();

  return (
      <div className="App">

        {/* <Button onClick={() => setCartOpen(true)}>My Cart</Button>
        <Drawer anchor={"left"} open={cartOpen} onClose={() => setCartOpen(false)}>
          <Cart />
        </Drawer> */}

        <Nav />
        {allProducts && <Products />}
        {allProducts.length === 0 && <Spinner />}

        <button onClick={() => {navigate("about")}}>go to about</button>

      </div>
  );

}

export default App;
