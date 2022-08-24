import { useState } from 'react';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import useWindowSize from '../../../hooks/useWindowSize';
import MobileMenu from './MobileMenu';

const Mobile = () => {
  const { width } = useWindowSize();
  const [showMenu, setShowMenu] = useState(false);

  if (width >= 640) return null;
  return (
    <>
      {showMenu ? (
        <IoMdClose size={32} onClick={() => setShowMenu(!showMenu)} />
      ) : (
        <IoMdMenu size={32} onClick={() => setShowMenu(!showMenu)} />
      )}
      <span className='font-bold m-auto'>SANDBOXAPP</span>
      <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </>
  );
};
export default Mobile;
