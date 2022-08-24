import Image from './Image';

const ImageList = ({ images, setThumbnail }) => {
  return (
    <ul className='w-full flex flex-row flex-wrap my-4'>
      {images.map((img, index) => (
        <li
          key={index}
          className='m-2 bg-slate-200 cursor-pointer w-24'
          onClick={() => setThumbnail(img)}
        >
          <Image src={img} alt={index} />
        </li>
      ))}
    </ul>
  );
};
export default ImageList;
