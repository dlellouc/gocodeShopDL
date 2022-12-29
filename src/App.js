
import './App.css';
import Nav from './components/Nav/Nav';
import Products from './components/Products/Products';
import {useState} from 'react';
import { allProductsCategoryString } from './components/FilterBy/FilterBy';

function App() {
  const [category, setCategory] = useState(allProductsCategoryString);

  return (
    <div className="App">
      <Nav productName={category} filterProductsByCategory={(newCategory) => setCategory(newCategory)} />
      <Products productType={category} />
    </div>
  );
}

export default App;
