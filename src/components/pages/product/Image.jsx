const Image = ({ type, src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`${
        type === 'thumb' ? 'w-full aspect-[9/4]' : 'w-full h-full'
      } object-cover`}
    />
  );
};
export default Image;
