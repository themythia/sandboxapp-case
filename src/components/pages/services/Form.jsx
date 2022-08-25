import { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../../contexts/ProductContext';
import Button from '../../shared/Button';
import Input from '../contact/Input';
import { v4 as uuidv4 } from 'uuid';
import handleFormData from '../../../utils/handleFormData';
import api from '../../../utils/api';

const Form = ({ type, setMode }) => {
  const [formData, setFormData] = useState(null);
  const { products, setProducts } = useContext(ProductContext);
  // select input value
  const [option, setOption] = useState(products[0].id || null);

  const handleSubmit = (e, type) => {
    e.preventDefault();
    if (type === 'add') {
      setFormData(handleFormData('add', e.target));
    } else if (type === 'edit') {
      setFormData(handleFormData('edit', e.target));
    } else if (type === 'delete') setFormData(true);
  };

  useEffect(() => {
    const handleData = (type, data) => {
      switch (type) {
        case 'add':
          // api always returns an object with id 101
          // changing id with a unique id to prevent duplicates
          // api doesnt return discountPercentage, using input data instead
          return [
            ...products,
            {
              ...data,
              id: uuidv4(),
              discountPercentage: formData.discountPercentage,
            },
          ];

        case 'edit':
          return products.map((product) => {
            if (product.id === option) {
              if (typeof option === 'number') {
                return {
                  ...data,
                  id: Number(data.id),
                  discountPercentage: formData.discountPercentage,
                };
              } else return { ...product, ...formData };
            } else return product;
          });

        case 'delete':
          return products.filter((product) => product.id !== option);

        default:
          return products;
      }
    };

    if (formData) {
      if (type === 'add') {
        api('addProduct', formData)
          .then((data) => setProducts(handleData('add', data)))
          .catch((e) => console.warn(e));
      } else if (type === 'edit') {
        // to edit newly created products with unique ids
        // dummy fetch product with id 100
        const id = typeof option === 'number' ? option : 100;
        api('editProduct', formData, id)
          .then((data) => setProducts(handleData('edit', data)))
          .catch((e) => console.warn(e));
      } else if (type === 'delete') {
        const id = typeof option === 'number' ? option : 100;
        api('deleteProduct', {}, id)
          .then((data) => setProducts(handleData('delete', data)))
          .catch((e) => console.warn(e));
      }
      setFormData(null);
      setMode(null);
    }
  }, [formData, option, products, setMode, setProducts, type]);

  return (
    <form
      onSubmit={(e) => handleSubmit(e, type)}
      className='w-full lg:w-1/2 m-auto'
    >
      {(type === 'edit' || type === 'delete') && (
        <select
          // newly added products with ids generated with uuid will return NaN, so use a string instead
          onChange={(e) => setOption(Number(e.target.value) || e.target.value)}
          className='border border-black/80 p-2 rounded w-full mb-2'
        >
          {products &&
            products.map((product) => (
              <option value={product.id} key={product.id}>
                {product.title}
              </option>
            ))}
        </select>
      )}
      {(type === 'edit' || type === 'add') && (
        <>
          <Input type='text' placeholder='Title' required />
          <Input type='text' placeholder='Description' required />
          <Input type='text' placeholder='Category' required />
          <Input type='number' placeholder='Discount' required />
          <Input type='number' placeholder='Price' required />
          <Input type='number' placeholder='Rating' required />
          <Input type='number' placeholder='Stock' required />
        </>
      )}
      <Button type='submit' styles='w-32' text='Submit' />
    </form>
  );
};
export default Form;
