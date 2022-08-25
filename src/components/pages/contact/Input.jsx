import { useState } from 'react';

const Input = ({ type, placeholder }) => {
  const [value, setValue] = useState('');

  if (type === 'textarea') {
    return (
      <textarea
        className='border border-black/80 p-2 rounded w-full resize-none'
        placeholder={placeholder}
        required
      />
    );
  }

  return (
    <input
      type={type}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      className='border border-black/80 p-2 rounded w-full mb-2'
      required
    />
  );
};
export default Input;
