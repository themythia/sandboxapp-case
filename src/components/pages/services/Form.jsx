import { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../../contexts/ProductContext';
import Input from '../contact/Input';

const Form = ({ type, setMode }) => {
  const [formData, setFormData] = useState(null);
  const { products, setProducts } = useContext(ProductContext);
  const [option, setOption] = useState(products[0].id || null);

  const handleSubmit = (e, type) => {
    e.preventDefault();
    console.log('submitted');
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
  console.log('formData', formData);

  useEffect(() => {
    if (formData) {
      if (type === 'add') {
        fetch('https://dummyjson.com/products/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        })
          .then((res) => res.json())
          .then((data) => {
            setProducts([...products, data]);
          })
          .catch((e) => console.warn(e));
      } else if (type === 'edit') {
        fetch(`https://dummyjson.com/products/${option}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        })
          .then((res) => res.json())
          .then((data) =>
            setProducts(
              products.map((product) => (product.id == option ? data : product))
            )
          )
          .catch((e) => console.warn(e));
      } else if (type === 'delete') {
        fetch('https://dummyjson.com/products/1', {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) =>
            setProducts(products.filter((product) => product.id != option))
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
          onChange={(e) => setOption(e.target.value)}
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
      <button type='submit'>Submit!</button>
    </form>
  );
};
export default Form;
