import InfoItem from './InfoItem';

const InfoList = ({ data }) => {
  const { price, discountPercentage, stock, rating } = data;
  return (
    <div className='border border-slate-400 rounded'>
      <p className='bg-slate-400 p-2'>Info List</p>
      <div className='p-2'>
        <InfoItem type='Price' data={price} />
        <InfoItem type='Discount' data={discountPercentage} />
        <InfoItem type='Stock' data={stock} />
        <InfoItem type='Rating' data={rating} />
      </div>
    </div>
  );
};
export default InfoList;
