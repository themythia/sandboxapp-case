import { createContext, useEffect, useState } from 'react';
import api from '../utils/api';

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    if (!products) {
      api('getProducts')
        .then((data) => setProducts(data.products))
        .catch((e) => console.warn(e));
    }
  }, [products]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
