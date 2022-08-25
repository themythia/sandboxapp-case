import { useNavigate } from 'react-router-dom';
import Button from '../../shared/Button';

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
          type === 'large'
            ? 'w-full mb-2 sm:mb-0 sm:w-3/5 rounded-t sm:rounded-t-none sm:rounded-l'
            : 'w-1/3 sm:w-full rounded-l sm:rounded-l-none sm:rounded-t'
        } object-cover aspect-[9/4] max-h-[400px] max-w-[900px]`}
      />
      <div
        className={`flex flex-col p-2 w-full h-full justify-between ${
          type === 'large' ? 'sm:w-2/5' : 'sm:w-full'
        }`}
      >
        <div>
          <h1 className='font-medium text-xl line-clamp-1'>{data.title}</h1>
          <p className='line-clamp-2'>{data.description}</p>
        </div>
        <Button onClick={handleClick} styles='w-32' text='More Info' />
      </div>
    </div>
  );
};
export default ProductCard;
