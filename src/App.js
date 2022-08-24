import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/navbar/Navbar';
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
        </Routes>
      </ProductContextProvider>
      <Footer />
    </>
  );
};

export default App;
