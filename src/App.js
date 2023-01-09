
import './App.css';
import Nav from './components/Nav/Nav';
import Products from './components/Products/Products';
import Spinner from './components/Spinner/Spinner'
import {useState, useEffect} from 'react';
import {productsArr} from './data/data'

export const allProductsCategoryString = 'All products';

function App() {
  const [category, setCategory] = useState(allProductsCategoryString);
  const [products, setProducts] = useState(productsArr);

  let productsCategoriesWithAll = [...new Set(productsArr.map((item) => item.category))];
  productsCategoriesWithAll.unshift(allProductsCategoryString);

  const onFilterChange = () => {
    if (category === allProductsCategoryString) {
      setProducts(productsArr);
    } else {
      setProducts(productsArr.filter((item) => item.category === category));
    }
  }

  useEffect(
    () => onFilterChange(),
    [category])
  

  return (
    <div className="App">
      <Nav productsCategoriesWithAll={productsCategoriesWithAll} currentCategory={category} setCategory={setCategory} />
      <Products products={products} />
    </div>
  );

}

export default App;
