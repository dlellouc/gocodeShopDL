
import './App.css';
import Nav from './components/Nav/Nav';
import Products from './components/Products/Products';
import {useState} from 'react';
import {productsArr} from './data/data'

export const allProductsCategoryString = 'all products';

let productsCategoriesWithAll = [...new Set(productsArr.map((item) => item.category))];
productsCategoriesWithAll.unshift(allProductsCategoryString);

function App() {
  const [category, setCategory] = useState(allProductsCategoryString);

  return (
    <div className="App">
      <Nav productsCategoriesWithAll={productsCategoriesWithAll} currentCategory={category} filterProductsByCategory={(newCategory) => setCategory(newCategory)} />
      <Products productsArr={productsArr} currentCategory={category} />
    </div>
  );
}

export default App;
