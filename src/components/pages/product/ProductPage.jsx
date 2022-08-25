import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '../../shared/Container';
import Image from './Image';
import ImageList from './ImageList';
import InfoList from './InfoList';
import Header from './Header';
import { ProductContext } from '../../../contexts/ProductContext';
import api from '../../../utils/api';
const ProductPage = () => {
  const { productId } = useParams();
  const { products } = useContext(ProductContext);
  const [product, setProduct] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);

  useEffect(() => {
    if (!products) {
      api('getSingleProduct', {}, productId)
        .then((data) => {
          setProduct(data);
          setThumbnail(data.thumbnail);
        })
        .catch((e) => console.warn(e));
    } else {
      // productId is a string
      // product.id can be a integer if fetched from API
      // product.id can also be a string if newly created due to uuid
      // eslint-disable-next-line eqeqeq
      setProduct(products.find((product) => productId == product.id));
      setThumbnail(
        // eslint-disable-next-line eqeqeq
        products.find((product) => productId == product.id).thumbnail
      );
    }
  }, [product, productId, products]);

  if (!product) return null;
  return (
    <Container>
      <div className='grid grid-cols-1 md:grid-cols-3 md:gap-x-4'>
        <div className='md:col-span-2'>
          <Header title={product.title} category={product.category} />
          <Image type='thumb' src={thumbnail} alt={product.title} />
          <p className='mt-4'>{product.description}</p>
        </div>
        <div>
          <ImageList images={product.images} setThumbnail={setThumbnail} />
          <InfoList data={product} />
        </div>
      </div>
    </Container>
  );
};
export default ProductPage;
