const api = async (type, data = {}, id = 0) => {
  const endpoints = {
    getProducts: 'https://dummyjson.com/products',
    getSingleProduct: `https://dummyjson.com/products/${id}`,
    addProduct: 'https://dummyjson.com/products/add',
    editProduct: `https://dummyjson.com/products/${id}`,
    deleteProduct: `https://dummyjson.com/products/${id}`,
  };

  const options = {
    getProducts: { method: 'GET' },
    getSingleProduct: { method: 'GET' },
    addProduct: {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    },
    editProduct: {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    },
    deleteProduct: {
      method: 'DELETE',
    },
  };

  try {
    const response = await fetch(endpoints[type], options[type]);
    const data = await response.json();
    return data;
  } catch (e) {
    return console.warn('Fetch failed!', e);
  }
};
export default api;
