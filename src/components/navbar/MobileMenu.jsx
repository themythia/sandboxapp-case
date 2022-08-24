import { NavLink } from 'react-router-dom';
import TransitionWrapper from './TransitionWrapper';

const MobileMenu = ({ showMenu, setShowMenu }) => {
  const handleClick = () => setShowMenu(false);
  return (
    <TransitionWrapper state={showMenu}>
      <div className='bg-inherit w-full max-w-full h-[calc(100vh-56px)] top-14 left-0 fixed z-50 p-4 flex flex-col font-medium gap-y-4'>
        <NavLink onClick={handleClick} to='/'>
          Home
        </NavLink>
        <NavLink onClick={handleClick} to='about'>
          About
        </NavLink>
        <NavLink onClick={handleClick} to='contact'>
          Contact
        </NavLink>
        <NavLink onClick={handleClick} to='services'>
          Services
        </NavLink>
      </div>
    </TransitionWrapper>
  );
};
export default MobileMenu;
