
import './App.css';
import Nav from './components/Nav/Nav';
import Products from './components/Products/Products';
import Spinner from './components/Spinner/Spinner'
import {useState, useEffect, useContext} from 'react';
// import {productsArr} from './data/data'
// import Clock from './components/Clock/Clock';
import { useClock } from './hooks/useClock';
// import { useFetchAll } from './hooks/useFetchAll';
import MyContext from './MyContext';
import { useNavigate } from 'react-router-dom';
import Cart from './components/Cart/Cart';
// import { Button, Drawer } from "@mui/material";
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

export const allProductsCategoryString = 'All products';

function App() {
  const [currentCategory, setCurrentCategory] = useState(allProductsCategoryString);
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [showCookies, setShowCookies] = useState(true);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false)

  useEffect(
    () => console.log('showCookies', showCookies),
    [showCookies])

  let productsCategoriesWithAll = [...new Set(allProducts.map((item) => item.category))]; // categories update after fetch
  productsCategoriesWithAll.unshift(allProductsCategoryString);  

  const getAllProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setAllProducts(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // onload
    getAllProducts();
    // let allProductsData = useFetchAll('https://fakestoreapi.com/products');
    // setAllProducts(allProductsData);
    // setProducts(allProductsData);
  }, []);

  const onFilterChange = () => {
    if (currentCategory === allProductsCategoryString) {
      setProducts(allProducts);
    } else {
      setProducts(allProducts.filter((item) => item.category === currentCategory));
    }
  }

  useEffect(
    () => onFilterChange(),
    [currentCategory]);

  const addToCart = (productId, productTitle, productPrice, productImgSrc) => {
    let productIndexInCart = getProductIndexInCart(productId);

    if (productIndexInCart !== -1) {
      let productRowInCart = cart[productIndexInCart];
      let newAmount = productRowInCart.amount + 1;
      setCart([...cart.slice(0, productIndexInCart), 
        {...productRowInCart, amount: newAmount},
        ...cart.slice(productIndexInCart+1)]);

    } else {
      setCart([...cart, {id: productId, title: productTitle, price: productPrice, imgSrc: productImgSrc, amount: 1}]);
    }
  }

  const removeFromCart = (productId) => {
    let productIndexInCart = getProductIndexInCart(productId);

    if (productIndexInCart !== -1) {
      let productRowInCart = cart[productIndexInCart];
      let newAmount = productRowInCart.amount - 1;

      if (newAmount > 0) {
        setCart([...cart.slice(0, productIndexInCart), 
          {...productRowInCart, amount: newAmount},
          ...cart.slice(productIndexInCart+1)]);
      } else {
        setCart([...cart.slice(0, productIndexInCart),
          ...cart.slice(productIndexInCart+1)]);
      }
   }
  }

  const getAmountInCart = (productId) => {
    let productIndexInCart = getProductIndexInCart(productId);

    if (productIndexInCart !== -1) {
      let productRowInCart = cart[productIndexInCart];
      return productRowInCart.amount;

    } else {
      return 0;
    }
  }

  const getProductIndexInCart = (productId) => {
    return cart.findIndex(item => item.id === productId);
  }

  useEffect(
    () => console.log(cart),
    [cart]);
  
  const clock = useClock();

  const navigate = useNavigate();

  return (
    <MyContext.Provider value={{products, cart, setCart, addToCart, removeFromCart, getAmountInCart}}>

      <div className="App">
        {/* <Clock /> */}
        <h1 style={{color:'blue', textAlign:'right', marginTop:'20px'}}>{clock}</h1>
        
        {showCookies 
          && <p style={{color:'blue'}}>This app may use cookies to improve your experience. </p> }
        <button onClick={() => setShowCookies(!showCookies)}> {showCookies && 'I have understood'} {!showCookies && 'Show cookies information'}</button>
        
        <Button onClick={() => setCartOpen(true)}>My Cart</Button>
        <Drawer anchor={"left"} open={cartOpen} onClose={() => setCartOpen(false)}>
          <Cart />
        </Drawer>

        <Nav productsCategoriesWithAll={productsCategoriesWithAll} currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} />
        {allProducts && <Products />}
        {allProducts.length === 0 && <Spinner />}

        <button onClick={() => {navigate("about")}}>go to about</button>
      </div>
      </MyContext.Provider>
  );

}

export default App;
