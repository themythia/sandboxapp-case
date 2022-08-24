import { NavLink } from 'react-router-dom';
import NavItem from '../NavItem';
import TransitionWrapper from './TransitionWrapper';

const MobileMenu = ({ showMenu, setShowMenu }) => {
  const handleClick = () => setShowMenu(false);
  return (
    <TransitionWrapper state={showMenu}>
      <div className='bg-inherit w-full max-w-full h-[calc(100vh-56px)] top-14 left-0 fixed z-50 p-4 flex flex-col font-medium gap-y-4'>
        <NavItem onClick={handleClick} type='mobile' to='/' text='Home' />
        <NavItem onClick={handleClick} type='mobile' to='about' text='About' />
        <NavItem
          onClick={handleClick}
          type='mobile'
          to='contact'
          text='Contact'
        />
        <NavItem
          onClick={handleClick}
          type='mobile'
          to='services'
          text='Services'
        />
      </div>
    </TransitionWrapper>
  );
};
export default MobileMenu;
