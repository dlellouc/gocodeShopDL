
import MyContext from './MyContext';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Spinner from './components/Spinner/Spinner';
import NotFound from './pages/NotFound/NotFound';
import AboutPage from './pages/AboutPage';
import SingleProductView from './pages/SingleProductView';
import App from './App';
import { Header } from './components/Header/Header';

function Main() {

    let isAuthenticated = true;
    let isAdmin = true;

    return (
      <BrowserRouter>
          {/* <MyContext.Provider value={{products, cart:{}, addToCart, removeFromCart}}> */}
            <Header>this is my header</Header>
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
      {/* </MyContext.Provider> */}
      </BrowserRouter>
      );
}

export default Main;