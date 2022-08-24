import { useNavigate } from 'react-router-dom';

const ProductCard = ({ data, type }) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(`/product/${data.id}`);

  return (
    <div
      className={`flex ${
        type === 'large'
          ? 'flex-col sm:flex-row col-span-1 sm:col-span-2 lg:col-span-3'
          : 'flex-row sm:flex-col col-span-1'
      } border rounded shadow`}
    >
      <img
        src={data.thumbnail}
        alt={data.title}
        className={`${
          type === 'large' ? 'w-full mb-2 sm:w-1/2' : 'w-1/3 sm:w-full'
        } object-cover aspect-video`}
      />
      <div className='flex flex-col p-2 w-full h-full justify-between'>
        <div>
          <h1 className='font-medium text-xl line-clamp-1'>{data.title}</h1>
          <p className='line-clamp-2'>{data.description}</p>
        </div>
        <button
          onClick={handleClick}
          className='bg-sky-600 text-white rounded w-32 mt-4 py-2 px-4'
        >
          More Info
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
