import { useContext, useState } from 'react';
import { ProductContext } from '../../../contexts/ProductContext';
import Button from '../../shared/Button';
import Container from '../../shared/Container';
import Title from '../../shared/Title';
import Form from './Form';

const Services = () => {
  const [mode, setMode] = useState(null);
  const { products } = useContext(ProductContext);

  return (
    <Container>
      <Title text='Services' />
      {!mode && (
        <>
          <Button
            styles='w-full'
            text='Add Product'
            onClick={() => setMode('add')}
          />
          <Button
            styles='w-full'
            text='Edit Product'
            onClick={() => setMode('edit')}
          />
          <Button
            styles='w-full'
            text='Delete Product'
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
