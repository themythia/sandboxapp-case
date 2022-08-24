import { useContext, useState } from 'react';
import { ProductContext } from '../../../contexts/ProductContext';
import Container from '../../shared/Container';
import Form from './Form';

const Services = () => {
  const [mode, setMode] = useState(null);
  const { products, setProducts } = useContext(ProductContext);
  console.log('products', products);

  return (
    <Container>
      <h1 className='font-bold text-2xl mb-2'>Services</h1>
      {!mode && (
        <>
          <button
            onClick={() => setMode('add')}
            className='w-full mt-4 py-2 px-4 border rounded bg-sky-600 text-white'
          >
            Add!
          </button>
          <button
            onClick={() => setMode('edit')}
            className='w-full mt-4 py-2 px-4 border rounded bg-sky-600 text-white'
          >
            Edit!
          </button>
          <button
            onClick={() => setMode('delete')}
            className='w-full mt-4 py-2 px-4 border rounded bg-sky-600 text-white'
          >
            Delete!
          </button>
        </>
      )}

      {mode === 'add' && <Form type='add' setMode={setMode} />}
      {mode === 'edit' && <Form type='edit' setMode={setMode} />}
      {mode === 'delete' && <Form type='delete' setMode={setMode} />}
    </Container>
  );
};
export default Services;
