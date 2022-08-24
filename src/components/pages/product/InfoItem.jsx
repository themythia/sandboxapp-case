const InfoItem = ({ type, data }) => {
  return (
    <div className='flex flex-row justify-between'>
      <p className='font-medium'>{`${type} :`}</p>
      <p>{data}</p>
    </div>
  );
};
export default InfoItem;
