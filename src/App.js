import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/navbar/Navbar';
import About from './components/pages/About';
import Contact from './components/pages/contact/Contact';
import Home from './components/pages/home/Home';
import ProductPage from './components/pages/product/ProductPage';
import ProductContextProvider from './contexts/ProductContext';

const App = () => {
  return (
    <>
      <Navbar />
      <ProductContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:productId' element={<ProductPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </ProductContextProvider>
      <Footer />
    </>
  );
};

export default App;
