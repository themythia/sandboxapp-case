import { NavLink } from 'react-router-dom';

const NavItem = ({ to, text, type, onClick }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `font-medium hover:text-white duration-200 ${
          isActive ? 'text-white' : 'text-white/60'
        } ${type === 'mobile' ? 'gap-y-4' : 'gap-x-4'}`
      }
      to={to}
      onClick={onClick}
    >
      {text}
    </NavLink>
  );
};
export default NavItem;
