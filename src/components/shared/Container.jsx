const Container = ({ children }) => {
  return (
    <main className='min-h-[calc(100vh-112px)] h-full w-full p-4'>
      {children}
    </main>
  );
};
export default Container;
