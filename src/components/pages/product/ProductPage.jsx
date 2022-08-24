import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '../../shared/Container';
import Image from './Image';
import ImageList from './ImageList';
import InfoList from './InfoList';
import Header from './Header';
const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);

  useEffect(() => {
    if (!product && productId) {
      fetch(`https://dummyjson.com/products/${productId}`)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
          setThumbnail(data.thumbnail);
        })
        .catch((e) => console.warn(e));
    }
  }, [product, productId]);

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
