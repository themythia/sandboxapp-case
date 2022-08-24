import { NavLink } from 'react-router-dom';

const NavItem = ({ to, text, type, onClick }) => {
  return (
    <NavLink
      className={`font-medium ${
        type === 'mobile' ? 'gap-y-4' : 'gap-x-4'
      } text-white/60 hover:text-white hover:underline duration-200`}
      to={to}
      onClick={onClick}
    >
      {text}
    </NavLink>
  );
};
export default NavItem;
