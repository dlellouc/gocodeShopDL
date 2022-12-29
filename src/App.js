
import './App.css';
import Nav from './components/Nav/Nav';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="App">
      <Nav productName={`All products`}/>
      <Products productType={``}/>
    </div>
  );
}

export default App;
