
import './App.css';
import Nav from './components/Nav/Nav';
import Products from './components/Products/Products';
import Spinner from './components/Spinner/Spinner'
import {useState} from 'react';
import {productsArr} from './data/data'

export const allProductsCategoryString = 'All products';

function App() {
  const [category, setCategory] = useState(allProductsCategoryString);
  const [products, setProducts] = useState(productsArr);

  let productsCategoriesWithAll = [...new Set(productsArr.map((item) => item.category))];
  productsCategoriesWithAll.unshift(allProductsCategoryString);

  const onFilterChange = (newCategory) => {
    setCategory(newCategory);

    if (newCategory === allProductsCategoryString) {
      setProducts(productsArr);
    } else {
      setProducts(productsArr.filter((item) => item.category === newCategory));
    }
  }
  

  return (
    <div className="App">
      <Nav productsCategoriesWithAll={productsCategoriesWithAll} currentCategory={category} onFilterChange={(newCategory) => onFilterChange(newCategory)} />
      <Products products={products} />
    </div>
  );

}

export default App;
