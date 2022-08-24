import Title from '../../shared/Title';

const Header = ({ title, category }) => {
  return (
    <div className='flex flex-col'>
      <Title text={title} />
      <p className='text-slate-500 mb-2'>
        Posted on August 24, 2022 by Emir Al
      </p>
      <span className='bg-slate-700 text-white font-bold text-sm p-1 rounded w-min mb-4'>
        {category}
      </span>
    </div>
  );
};
export default Header;
