
import './App.css';
import Nav from './components/Nav/Nav';
import Products from './components/Products/Products';
import Spinner from './components/Spinner/Spinner'

// import {useState, useEffect, useContext} from 'react';
// import {productsArr} from './data/data'
// import { useFetchAll } from './hooks/useFetchAll';
import { useContext } from 'react';
import MyContext from './MyContext';

// import Clock from './components/Clock/Clock';
import { useClock } from './hooks/useClock';

import { useNavigate } from 'react-router-dom';

import Cart from './components/Cart/Cart';

// import { Button, Drawer } from "@mui/material";
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';


function App() {
  const { allProducts, cartOpen, setCartOpen } = useContext(MyContext);

  const clock = useClock();

  const navigate = useNavigate();

  return (
    // <MyContext.Provider value={{products, cart, setCart, addToCart, removeFromCart, getAmountInCart}}>

      <div className="App">
        {/* <Clock /> */}
        <h1 style={{color:'blue', textAlign:'right', marginTop:'20px'}}>{clock}</h1>
        
        {/* {showCookies 
          && <p style={{color:'blue'}}>This app may use cookies to improve your experience. </p> }
        <button onClick={() => setShowCookies(!showCookies)}> {showCookies && 'I have understood'} {!showCookies && 'Show cookies information'}</button> */}
        
        <Button onClick={() => setCartOpen(true)}>My Cart</Button>
        <Drawer anchor={"left"} open={cartOpen} onClose={() => setCartOpen(false)}>
          <Cart />
        </Drawer>

        <Nav />
        {allProducts && <Products />}
        {allProducts.length === 0 && <Spinner />}

        <button onClick={() => {navigate("about")}}>go to about</button>
      </div>
      // </MyContext.Provider>
  );

}

export default App;
