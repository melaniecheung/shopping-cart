import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import Cart from './components/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';

const App = () => {
  return (
    <div>
      <Router>
        <Cart />
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<ProductPage />} />
          <Route path='/about' element={<AboutPage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
