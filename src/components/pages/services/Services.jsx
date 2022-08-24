import { useContext, useState } from 'react';
import { ProductContext } from '../../../contexts/ProductContext';
import Button from '../../shared/Button';
import Container from '../../shared/Container';
import Form from './Form';

const Services = () => {
  const [mode, setMode] = useState(null);
  const { products } = useContext(ProductContext);
  console.log('products', products);

  return (
    <Container>
      <h1 className='font-bold text-2xl mb-2'>Services</h1>
      {!mode && (
        <>
          <Button styles='w-full' text='Add!' onClick={() => setMode('add')} />
          <Button
            styles='w-full'
            text='Edit!'
            onClick={() => setMode('edit')}
          />
          <Button
            styles='w-full'
            text='Delete!'
            onClick={() => setMode('delete')}
          />
        </>
      )}

      {mode === 'add' && <Form type='add' setMode={setMode} />}
      {mode === 'edit' && <Form type='edit' setMode={setMode} />}
      {mode === 'delete' && <Form type='delete' setMode={setMode} />}
    </Container>
  );
};
export default Services;
