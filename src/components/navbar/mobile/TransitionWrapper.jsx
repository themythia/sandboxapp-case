import { CSSTransition } from 'react-transition-group';

const TransitionWrapper = ({ state, children }) => {
  return (
    <CSSTransition
      in={state}
      mountOnEnter
      unmountOnExit
      classNames={{
        enterActive: 'animate__animated animate__slideInLeft animate__faster',
        exitActive: 'animate__animated animate__slideOutLeft animate__faster',
      }}
      timeout={500}
    >
      {children}
    </CSSTransition>
  );
};
export default TransitionWrapper;
