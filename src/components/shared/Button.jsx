const Button = ({ text, onClick, styles, type }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`mt-4 py-2 px-4 rounded bg-sky-600 hover:bg-sky-700 active:bg-sky-800 duration-200 text-white ${styles}`}
    >
      {text}
    </button>
  );
};
export default Button;
