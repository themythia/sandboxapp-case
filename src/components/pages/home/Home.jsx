import { useContext } from 'react';
import { ProductContext } from '../../../contexts/ProductContext';
import Container from '../../shared/Container';
import ProductCard from './ProductCard';

const Home = () => {
  const { products } = useContext(ProductContext);
  return (
    <Container>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {products &&
          products.map((product, index) => (
            <ProductCard
              key={product.id}
              data={product}
              type={index === 0 && 'large'}
            />
          ))}
      </div>
    </Container>
  );
};
export default Home;
