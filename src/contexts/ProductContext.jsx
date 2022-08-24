import { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    if (!products) {
      fetch('https://dummyjson.com/products')
        .then((res) => res.json())
        .then((data) => setProducts(data.products))
        .catch((e) => console.warn(e));
    }
  }, [products]);

  console.log('products', products);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
