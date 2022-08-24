import { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../../contexts/ProductContext';
import Button from '../../shared/Button';
import Input from '../contact/Input';
import { v4 as uuidv4 } from 'uuid';

const Form = ({ type, setMode }) => {
  const [formData, setFormData] = useState(null);
  const { products, setProducts } = useContext(ProductContext);
  const [option, setOption] = useState(products[0].id || null);

  const handleSubmit = (e, type) => {
    e.preventDefault();
    if (type === 'add') {
      setFormData({
        title: e.target[0].value,
        description: e.target[1].value,
        category: e.target[2].value,
        discountPercentage: e.target[3].value,
        price: e.target[4].value,
        rating: e.target[5].value,
        stock: e.target[6].value,
        thumbnail: 'https://picsum.photos/1024/1024',
        images: [
          'https://picsum.photos/1024/1024',
          'https://picsum.photos/1024/1024',
        ],
      });
    } else if (type === 'edit') {
      setFormData({
        title: e.target[1].value,
        description: e.target[2].value,
        category: e.target[3].value,
        discountPercentage: e.target[4].value,
        price: e.target[5].value,
        rating: e.target[6].value,
        stock: e.target[7].value,
      });
    } else if (type === 'delete') setFormData(true);
  };

  useEffect(() => {
    if (formData) {
      if (type === 'add') {
        fetch('https://dummyjson.com/products/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        })
          .then((res) => res.json())
          // api always returns an object with id 101
          // changing id with a unique id to prevent duplicates
          // api doesnt return discountPercentage, using input data instead
          .then((data) => {
            setProducts([
              ...products,
              {
                ...data,
                id: uuidv4(),
                discountPercentage: formData.discountPercentage,
              },
            ]);
          })
          .catch((e) => console.warn(e));
      } else if (type === 'edit') {
        // to edit newly created products with unique ids
        // dummy fetch product with id 100
        fetch(
          `https://dummyjson.com/products/${
            typeof option === 'number' ? option : 100
          }`,
          {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            setProducts(
              products.map((product) => {
                if (product.id === option) {
                  if (typeof option === 'number')
                    return {
                      ...data,
                      id: Number(data.id),
                      discountPercentage: formData.discountPercentage,
                    };
                  else if (typeof option === 'string')
                    return { ...product, ...formData };
                } else return product;
              })
            );
          })
          .catch((e) => console.warn(e));
      } else if (type === 'delete') {
        fetch('https://dummyjson.com/products/1', {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) =>
            setProducts(products.filter((product) => product.id !== option))
          );
      }
      setFormData(null);
      setMode(null);
    }
  }, [formData, option, products, setMode, setProducts, type]);

  return (
    <form onSubmit={(e) => handleSubmit(e, type)}>
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
