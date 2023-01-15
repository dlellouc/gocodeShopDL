
import './App.css';
import Nav from './components/Nav/Nav';
import Products from './components/Products/Products';
import Spinner from './components/Spinner/Spinner'
import {useState, useEffect} from 'react';
// import {productsArr} from './data/data'
// import Clock from './components/Clock/Clock';
import { useClock } from './hooks/useClock';
// import { useFetchAll } from './hooks/useFetchAll';
import MyContext from './MyContext';
import { useNavigate } from 'react-router-dom';

export const allProductsCategoryString = 'All products';

function App() {
  const [currentCategory, setCurrentCategory] = useState(allProductsCategoryString);
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [showCookies, setShowCookies] = useState(true);

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

  const addToCart = () => {

  }

  const removeFromCart = () => {
    
  }
  
  const clock = useClock();

  const navigate = useNavigate();

  return (
    // <MyContext.Provider value={{products, cart:{}, addToCart, removeFromCart}}>
      <div className="App">
        {/* <Clock /> */}
        <h1 style={{color:'blue', textAlign:'right', marginTop:'20px'}}>{clock}</h1>
        
        {showCookies 
          && <p style={{color:'blue'}}>This app may use cookies to improve your experience. </p> }
        <button onClick={() => setShowCookies(!showCookies)}> {showCookies && 'I have understood'} {!showCookies && 'Show cookies information'}</button>
        
        <Nav productsCategoriesWithAll={productsCategoriesWithAll} currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} />
        {allProducts && <Products products={products} />}
        {allProducts.length === 0 && <Spinner />}

        <button onClick={() => {navigate("about")}}>go to about</button>
      </div>
    // </MyContext.Provider>
  );

}

export default App;
