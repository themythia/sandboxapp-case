import { useState } from 'react';
import Button from '../../shared/Button';
import Container from '../../shared/Container';
import Title from '../../shared/Title';
import Form from './Form';

const Services = () => {
  const [mode, setMode] = useState(null);

  return (
    <Container>
      <Title
        text={
          !mode
            ? 'Services'
            : mode === 'edit'
            ? 'Edit Product'
            : mode === 'add'
            ? 'Add Product'
            : mode === 'delete'
            ? 'Delete Product'
            : ''
        }
      />
      {!mode && (
        <div className='flex flex-col items-center sm:flex-row sm:justify-center sm:gap-x-4'>
          <Button
            styles='w-40'
            text='Add Product'
            onClick={() => setMode('add')}
          />
          <Button
            styles='w-40'
            text='Edit Product'
            onClick={() => setMode('edit')}
          />
          <Button
            styles='w-40'
            text='Delete Product'
            onClick={() => setMode('delete')}
          />
        </div>
      )}

      {mode === 'add' && <Form type='add' setMode={setMode} />}
      {mode === 'edit' && <Form type='edit' setMode={setMode} />}
      {mode === 'delete' && <Form type='delete' setMode={setMode} />}
    </Container>
  );
};
export default Services;
