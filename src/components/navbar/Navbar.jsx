import Mobile from './mobile/Mobile';
import NavItem from './NavItem';

const Navbar = () => {
  return (
    <nav className='w-full h-14 bg-slate-900 text-white flex items-center p-4'>
      <Mobile />
      <div className='hidden sm:flex sm:justify-between w-full'>
        <span className='font-bold'>SANDBOXAPP</span>
        <div className='flex font-medium gap-x-4'>
          <NavItem to='/' text='Home' />
          <NavItem to='about' text='About' />
          <NavItem to='contact' text='Contact' />
          <NavItem to='services' text='Services' />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
