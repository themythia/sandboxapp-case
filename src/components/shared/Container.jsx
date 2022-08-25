const Container = ({ children }) => {
  return (
    <main className='min-h-[calc(100vh-112px)] h-full w-full max-w-[1500px] p-4 m-auto'>
      {children}
    </main>
  );
};
export default Container;
