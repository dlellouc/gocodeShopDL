
import MyContext from './MyContext';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Spinner from './components/Spinner/Spinner';
import NotFound from './pages/NotFound/NotFound';
import AboutPage from './pages/AboutPage';
import SingleProductView from './pages/SingleProductView';
import App from './App';
import {useState, useEffect} from 'react';
import { Header } from './components/Header/Header';

export const allProductsCategoryString = 'All products';

function Main() {
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



    let isAuthenticated = true;
    let isAdmin = true;



    return (
      <BrowserRouter>
        <MyContext.Provider value={{products, allProducts, productsCategoriesWithAll, currentCategory, setCurrentCategory, cart, setCart, addToCart, removeFromCart, getAmountInCart, cartOpen, setCartOpen}}>
          
            <Header>this is my header</Header>

            {showCookies 
                && <p style={{color:'blue'}}>This app may use cookies to improve your experience. </p> }
                <button onClick={() => setShowCookies(!showCookies)}> {showCookies && 'I have understood'} {!showCookies && 'Show cookies information'}</button>

            {!isAuthenticated ?
                <Routes>    // component
                    <Route path="/" element={<div>login</div>} />
                    <Route path="signup" element={<div>sign up</div>} />
                </Routes>
            :
                <Routes>    // component
                    <Route path="/" element={<App />} />
                    <Route path="products/:productId" element={<SingleProductView />} />
                    <Route path="about" element={<AboutPage />} />
                    {isAdmin && <Route path="about/about2" element={<Spinner />} /> }
                    <Route path="termsOfAgreement" element={<Spinner />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            }
            <footer>this is my footer</footer>
        </MyContext.Provider>
      </BrowserRouter>
      );
}

export default Main;