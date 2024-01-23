import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import Cart from './components/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import SignInButton from './components/SignInButton';
import SignInPage from './pages/SignInPage';

const App = () => {
  return (
    <div>
      <Router>
        {/* <SignInButton/> */}
        {/* <Cart /> */}
        <Navbar />
        <Routes>
          <Route path='/shopping-cart' element={<HomePage />} />
          <Route path='/shopping-cart/products' element={<ProductPage />} />
          <Route path='/shopping-cart/about' element={<AboutPage />}/>
          <Route path='/shopping-cart/signin' element={<SignInPage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
