const handleFormData = (type, formData) => {
  if (type === 'add') {
    return {
      title: formData[0].value,
      description: formData[1].value,
      category: formData[2].value,
      discountPercentage: formData[3].value,
      price: formData[4].value,
      rating: formData[5].value,
      stock: formData[6].value,
      thumbnail: 'https://picsum.photos/1024/1024',
      images: [
        'https://picsum.photos/1024/1024',
        'https://picsum.photos/1024/1024',
      ],
    };
  } else if (type === 'edit') {
    return {
      title: formData[1].value,
      description: formData[2].value,
      category: formData[3].value,
      discountPercentage: formData[4].value,
      price: formData[5].value,
      rating: formData[6].value,
      stock: formData[7].value,
    };
  }
};
export default handleFormData;
